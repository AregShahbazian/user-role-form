import axios from "axios"
import MockAdapter from "axios-mock-adapter"

const mock = new MockAdapter(axios, {delayResponse: 500});


export const projects = {
    "1": {id: 1, name: 'Trip to space'},
    "2": {id: 2, name: 'Assembly Ikea furniture'},
    "3": {id: 3, name: 'Datumize Zentral'}
};
export const users = {
    "1": {id: 1, name: 'John Doe'},
    "2": {id: 2, name: 'Alice'},
    "3": {id: 3, name: 'Bob'}
};

export const roles = {
    "1": {id: 1, name: 'Admin'},
    "2": {id: 2, name: 'Editor'},
    "3": {id: 3, name: 'Viewer'}
};

const projectUserRoles = {
    "111": {id: 111, project: projects["1"], user: users["1"], role: roles["1"]},
    "122": {id: 122, project: projects["1"], user: users["2"], role: roles["2"]},
    "222": {id: 211, project: projects["2"], user: users["1"], role: roles["1"]},
};

mock.onGet('/projects').reply(200, Object.values(projects));
mock.onGet('/projects/1').reply(200, projects["1"]);
mock.onGet('/projects/2').reply(200, projects["2"]);
mock.onGet('/projects/3').reply(200, projects["3"]);

mock.onGet('/users').reply(200, Object.values(users));
mock.onGet('/users/1').reply(200, users["1"]);
mock.onGet('/users/2').reply(200, users["2"]);
mock.onGet('/users/3').reply(200, users["3"]);

mock.onGet('/roles').reply(200, Object.values(roles));
mock.onGet('/roles/1').reply(200, roles["1"]);
mock.onGet('/roles/2').reply(200, roles["2"]);
mock.onGet('/roles/3').reply(200, roles["3"]);

mock.onGet('/projectUserRoles').reply(200, Object.values(projectUserRoles));
mock.onGet('/projectUserRoles/111').reply(200, projectUserRoles["111"]);
mock.onGet('/projectUserRoles/122').reply(200, projectUserRoles["122"]);
mock.onGet('/projectUserRoles/222').reply(200, projectUserRoles["222"]);
mock.onGet('/projectUserRoles?project=1').reply(200, [
    projectUserRoles["111"],
    projectUserRoles["122"]]);
mock.onGet('/projectUserRoles?project=2').reply(200, [
    projectUserRoles["222"]]);
mock.onGet('/projectUserRoles?project=3').reply(200, []);
