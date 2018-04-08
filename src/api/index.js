import config from "../config/index"
import {normalize, schema} from "normalizr";
import axios from "axios";
import {reduce} from "lodash";
import $ from "jquery";
import "./mock"

export const GET = 'get'
export const POST = 'post'
export const PATCH = 'patch'
export const DELETE = 'delete'

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
export const createRequest = (endpoint, method, payload, id) => {
    let idUriParameter = ""

    if (method !== POST && id) {
        idUriParameter = `/${id}`
    }

    let queryParameters = "";
    let requestBody

    if (method === GET || method === DELETE) {
        queryParameters += !$.isEmptyObject(payload) ? "?" + $.param(payload) : ""
        requestBody = undefined
    } else {
        requestBody = payload
    }

    return {fullEndpoint: endpoint + idUriParameter + queryParameters, requestBody: requestBody}
}

/**
 * Perform the actual request
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
 * Generic function for calling an api at given endpoint, with given method, using given payload as data (or adding the
 * id in the meta object to the endpoint). Returns the data normalized using the given schema
 * @param endpoint
 * @param schema
 * @param method
 * @param payload
 * @param meta
 * @returns {Promise.<T>|*}
 */
const callApi = (endpoint = '', schema, method = GET, payload = {}, meta = {}) => {
    let request = createRequest(endpoint, method, payload, meta.id)
    console.log(`api\t Calling api at ${request.fullEndpoint} with method ${method} and payload ${JSON.stringify(request.requestBody)}`)
    return makeRequest(method, request, schema)
}

export const createApiFunctions = (config) => reduce(config, (acc, val, key) => {
    acc[key] = {
        fetchById: callApi.bind(null, val.endpoint, val.schema, GET),
        fetch: callApi.bind(null, val.endpoint, new schema.Array(val.schema), GET),
        create: callApi.bind(null, val.endpoint, val.schema, POST),
        update: callApi.bind(null, val.endpoint, val.schema, PATCH),
        delete: callApi.bind(null, val.endpoint, val.schema, DELETE)
    }
    return acc
}, {})

/**
 * For each entityConfig object in domainConfigs an object with api-functions is created,
 * containing api-functions for all routines
 */
export default createApiFunctions(config)



