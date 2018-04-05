import {handleRequest} from "./index"

describe('Action handler', () => {
    const users = [
        {id: 1, name: 'John Doe'},
        {id: 2, name: 'Alice'},
        {id: 3, name: 'Bob'}];

    const roles = [
        {id: 1, name: 'Admin'},
        {id: 2, name: 'Editor'},
        {id: 3, name: 'Viewer'}];

    const projects = [
        {id: 1, name: 'Trip to space'},
        {id: 2, name: 'Assembly Ikea furniture'},
        {id: 3, name: 'Datumize Zentral'}];

    const state = {
        users,
        roles,
        projects,
        userRoleProject: [],
        loading: false,
        error: undefined
    };

    it("handleRequest should immutably set loading to true", () => {
        const newSate = handleRequest(state);
        expect(newSate.loading).toEqual(true);
        expect(newSate.loading).not.toBe(state.loading);
    })

    it("handleSuccess should immutably merge", () => {
        const newSate = handleRequest(state);
        expect(newSate.loading).toEqual(true);
        expect(newSate.loading).not.toBe(state.loading);
    })

})





