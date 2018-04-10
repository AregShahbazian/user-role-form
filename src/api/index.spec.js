import {normalize, schema} from "normalizr";
import {createApiFunctionsPerEntity, prepareRequestObject, GET, PATCH, POST,} from "./index";

describe('prepareRequestObject', () => {

    it("should create correct GET requests", () => {
        expect(prepareRequestObject("myEntity", GET, {}, undefined)).toEqual({
            fullEndpoint: "myEntity",
            requestBody: undefined
        });
        expect(prepareRequestObject("myEntity", GET, {foo: "Foo", bar: "Bar"}, undefined)).toEqual({
            fullEndpoint: "myEntity?foo=Foo&bar=Bar",
            requestBody: undefined
        });
        expect(prepareRequestObject("myEntity", GET, {}, 1)).toEqual({
            fullEndpoint: "myEntity/1",
            requestBody: undefined
        });
        expect(prepareRequestObject("myEntity", GET, {foo: "Foo", bar: "Bar"}, 1)).toEqual({
            fullEndpoint: "myEntity/1?foo=Foo&bar=Bar",
            requestBody: undefined
        })
    });

    it("should create correct POST requests", () => {
        expect(prepareRequestObject("myEntity", POST, {}, undefined)).toEqual({
            fullEndpoint: "myEntity",
            requestBody: {}
        });
        expect(prepareRequestObject("myEntity", POST, {foo: "Foo", bar: "Bar"}, undefined)).toEqual({
            fullEndpoint: "myEntity",
            requestBody: {foo: "Foo", bar: "Bar"}
        });
        expect(prepareRequestObject("myEntity", POST, {}, 1)).toEqual({
            fullEndpoint: "myEntity",
            requestBody: {}
        });
        expect(prepareRequestObject("myEntity", POST, {foo: "Foo", bar: "Bar"}, 1)).toEqual({
            fullEndpoint: "myEntity",
            requestBody: {foo: "Foo", bar: "Bar"}
        })
    });

    it("should create correct PATCH requests", () => {
        expect(prepareRequestObject("myEntity", PATCH, {}, undefined)).toEqual({
            fullEndpoint: "myEntity",
            requestBody: {}
        });
        expect(prepareRequestObject("myEntity", PATCH, {foo: "Foo", bar: "Bar"}, undefined)).toEqual({
            fullEndpoint: "myEntity",
            requestBody: {foo: "Foo", bar: "Bar"}
        });
        expect(prepareRequestObject("myEntity", PATCH, {}, 1)).toEqual({
            fullEndpoint: "myEntity/1",
            requestBody: {}
        });
        expect(prepareRequestObject("myEntity", PATCH, {foo: "Foo", bar: "Bar"}, 1)).toEqual({
            fullEndpoint: "myEntity/1",
            requestBody: {foo: "Foo", bar: "Bar"}
        })
    })
});

describe('createApiFunctionsPerEntity', () => {

    const myEntity1 = "myEntity1";
    const myEntity1Schema = new schema.Entity(myEntity1)
    const myEntity1InitialState = normalize([], new schema.Array(myEntity1Schema))

    const myEntity1Config = {
        routineString: "MY_ENTITY1",
        schema: myEntity1Schema,
        initialState: myEntity1InitialState
    };

    const myEntity2 = "myEntity2";
    const myEntity2Schema = new schema.Entity(myEntity2)
    const myEntity2InitialState = normalize([], new schema.Array(myEntity2Schema))

    const myEntity2Config = {
        routineString: "MY_ENTITY2",
        schema: myEntity2Schema,
        initialState: myEntity2InitialState
    };

    const domainConfigs = {myEntity1: myEntity1Config, myEntity2: myEntity2Config}

    const a = ["fetch", "create", "update", "delete"];
    const apiFunctions = createApiFunctionsPerEntity(domainConfigs)

    a.forEach((a) => {
        it(`should create a bound function to createAndMakeRequest, for each entity using configuration object, for ${a}`, () => {
            expect(apiFunctions.myEntity1[a].name).toEqual("bound createAndMakeRequest")
            expect(apiFunctions.myEntity2[a].name).toEqual("bound createAndMakeRequest")
        })
    })
});

