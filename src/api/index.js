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

export const prepareRequestObject = (endpoint, method, payload, id) => {
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
};

const makeRequest = (method, request, schema) =>
    axios({
        method: method,
        url: request.fullEndpoint,
        data: request.requestBody
    }).then((response) => (
        {response: normalize(response.data, schema)}
    )).catch((error) => (
        {error: error}
    ));

const createAndMakeRequest = (endpoint = '', schema, method = GET, payload = {}, meta = {}) => {
    let request = prepareRequestObject(endpoint, method, payload, meta.id);
    console.log(`api\t Calling api at ${request.fullEndpoint} with method ${method} and payload ${JSON.stringify(request.requestBody)}`);
    return makeRequest(method, request, schema);
};

export const createApiFunctionsPerEntity = (config) => reduce(config, (apiFunctions, entityConfig, entityName) => {
    apiFunctions[entityName] = {
        fetch: createAndMakeRequest.bind(null, entityName, new schema.Array(entityConfig.schema), GET),
        create: createAndMakeRequest.bind(null, entityName, entityConfig.schema, POST),
        update: createAndMakeRequest.bind(null, entityName, entityConfig.schema, PATCH),
        delete: createAndMakeRequest.bind(null, entityName, entityConfig.schema, DELETE)
    };
    return apiFunctions
}, {});

export default createApiFunctionsPerEntity(config)

