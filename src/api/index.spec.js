import {normalize, schema} from "normalizr";
import apiFunctions, {
    createApiFunctions,
    createRequest,
    GET,
    PATCH,
    POST,
} from "./index";

describe('createRequest', () => {

    it("should create correct GET requests", () => {
        expect(createRequest("myEntity", GET, {}, undefined)).toEqual({
            fullEndpoint: "myEntity",
            requestBody: undefined
        })
        expect(createRequest("myEntity", GET, {foo: "Foo", bar: "Bar"}, undefined)).toEqual({
            fullEndpoint: "myEntity?foo=Foo&bar=Bar",
            requestBody: undefined
        })
        expect(createRequest("myEntity", GET, {}, 1)).toEqual({
            fullEndpoint: "myEntity/1",
            requestBody: undefined
        })
        expect(createRequest("myEntity", GET, {foo: "Foo", bar: "Bar"}, 1)).toEqual({
            fullEndpoint: "myEntity/1?foo=Foo&bar=Bar",
            requestBody: undefined
        })
    })

    it("should create correct POST requests", () => {
        expect(createRequest("myEntity", POST, {}, undefined)).toEqual({
            fullEndpoint: "myEntity",
            requestBody: {}
        })
        expect(createRequest("myEntity", POST, {foo: "Foo", bar: "Bar"}, undefined)).toEqual({
            fullEndpoint: "myEntity",
            requestBody: {foo: "Foo", bar: "Bar"}
        })
        expect(createRequest("myEntity", POST, {}, 1)).toEqual({
            fullEndpoint: "myEntity",
            requestBody: {}
        })
        expect(createRequest("myEntity", POST, {foo: "Foo", bar: "Bar"}, 1)).toEqual({
            fullEndpoint: "myEntity",
            requestBody: {foo: "Foo", bar: "Bar"}
        })
    })

    it("should create correct PATCH requests", () => {
        expect(createRequest("myEntity", PATCH, {}, undefined)).toEqual({
            fullEndpoint: "myEntity",
            requestBody: {}
        })
        expect(createRequest("myEntity", PATCH, {foo: "Foo", bar: "Bar"}, undefined)).toEqual({
            fullEndpoint: "myEntity",
            requestBody: {foo: "Foo", bar: "Bar"}
        })
        expect(createRequest("myEntity", PATCH, {}, 1)).toEqual({
            fullEndpoint: "myEntity/1",
            requestBody: {}
        })
        expect(createRequest("myEntity", PATCH, {foo: "Foo", bar: "Bar"}, 1)).toEqual({
            fullEndpoint: "myEntity/1",
            requestBody: {foo: "Foo", bar: "Bar"}
        })
    })
})

describe('createApiFunctions', () => {

    const myEntity1 = "myEntity1";
    const myEntity1Schema = new schema.Entity(myEntity1)
    const myEntity1InitialState = normalize([], new schema.Array(myEntity1Schema))

    const myEntity1Config = {
        endpoint: "myEntity1",
        routineName: "MY_ENTITY1",
        schema: myEntity1Schema,
        initialState: myEntity1InitialState
    }

    const myEntity2 = "myEntity2";
    const myEntity2Schema = new schema.Entity(myEntity2)
    const myEntity2InitialState = normalize([], new schema.Array(myEntity2Schema))

    const myEntity2Config = {
        endpoint: "myEntity2",
        routineName: "MY_ENTITY2",
        schema: myEntity2Schema,
        initialState: myEntity2InitialState
    }

    const domainConfigs = {myEntity1: myEntity1Config, myEntity2: myEntity2Config}

    const a = ["fetchById", "fetch", "create", "update"]
    const apiFunctions = createApiFunctions(domainConfigs)

    a.forEach((a) => {
        it(`should create api function for ${a}, for each entity using configuration object`, () => {
            expect(apiFunctions.myEntity1[a].name).toEqual("bound callApi")
        })
    })
})

