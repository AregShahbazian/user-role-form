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

    const userRoleProject = [
        {id: 1, userId: 1, roleId: 1, projectId: 1},
        {id: 2, userId: 2, roleId: 1, projectId: 2},
        {id: 3, userId: 2, roleId: 3, projectId: 3}];

    const state = {
        users,
        roles,
        projects,
        userRoleProject,
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

