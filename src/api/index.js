import config from "../config/index";
import {normalize, schema} from "normalizr";
import axios from "axios";
import {reduce} from "lodash";
import $ from "jquery";
import "./mock";

export const GET = 'get';
export const POST = 'post';
export const PATCH = 'patch';
export const DELETE = 'delete';

axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * Construct a request object containing the full endpoint and the request body
 * @param endpoint
 * @param method
 * @param payload
 * @param id
 * @returns {{fullEndpoint: string, requestBody: *}}
 */
export const createRequestObject = (endpoint, method, payload, id) => {
    let idUriParameter = "";

    if (method !== POST && id) {
        idUriParameter = `/${id}`;
    }

    let queryParameters = "";
    let requestBody;

    if (method === GET || method === DELETE) {
        queryParameters += !$.isEmptyObject(payload) ? "?" + $.param(payload) : "";
        requestBody = undefined;
    } else {
        requestBody = payload;
    }

    return {fullEndpoint: endpoint + idUriParameter + queryParameters, requestBody: requestBody};
}

/**
 * Perform the actual request and either return normalized data, or error object
 * @param method
 * @param request
 * @param schema
 */
const makeRequest = (method, request, schema) =>
    axios({
        method: method,
        url: request.fullEndpoint,
        data: request.requestBody
    }).then((response) => (
        {response: normalize(response.data, schema)}
    )).catch((error) => (
        {error: error}
    ))

/**
 * Convenience function for creating request object and making the request
 * @param endpoint
 * @param schema
 * @param method
 * @param payload
 * @param meta
 * @returns {Promise.<T>|*}
 */
const callApi = (endpoint = '', schema, method = GET, payload = {}, meta = {}) => {
    let request = createRequestObject(endpoint, method, payload, meta.id)
    console.log(`api\t Calling api at ${request.fullEndpoint} with method ${method} and payload ${JSON.stringify(request.requestBody)}`)
    return makeRequest(method, request, schema)
}

/**
 * For each config object in the config parameter, an object with api-functions is created,
 * containing api-functions for all routines
 * @param config
 * @returns {{}|any|any}
 */
export const createApiFunctionsPerEntity = (config) => reduce(config, (apiFunctions, entityConfig, entityName) => {
    apiFunctions[entityName] = {
        fetch: callApi.bind(null, entityName, new schema.Array(entityConfig.schema), GET),
        create: callApi.bind(null, entityName, entityConfig.schema, POST),
        update: callApi.bind(null, entityName, entityConfig.schema, PATCH),
        delete: callApi.bind(null, entityName, entityConfig.schema, DELETE)
    }
    return apiFunctions
}, {})

export default createApiFunctionsPerEntity(config)

