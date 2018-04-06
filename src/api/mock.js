import axios from "axios"
import MockAdapter from "axios-mock-adapter"

const mock = new MockAdapter(axios);

export const roles = {
    "1": {id: 1, name: 'Admin'},
    "2": {id: 2, name: 'Editor'},
    "3": {id: 3, name: 'Viewer'}
};

export const projects = {
    "1": {id: 1, name: 'Trip to space'},
    "2": {id: 2, name: 'Assembly Ikea furniture'},
    "3": {id: 3, name: 'Datumize Zentral'}
};

const projectRoles = {
    "11": {id: 11, role: roles["1"], project: projects["1"]},
    "21": {id: 21, role: roles["2"], project: projects["1"]},
    "31": {id: 31, role: roles["3"], project: projects["1"]},
    "12": {id: 12, role: roles["1"], project: projects["2"]},
    "22": {id: 22, role: roles["2"], project: projects["2"]},
    "32": {id: 32, role: roles["3"], project: projects["2"]},
    "13": {id: 13, role: roles["1"], project: projects["3"]},
    "23": {id: 23, role: roles["2"], project: projects["3"]},
    "33": {id: 33, role: roles["3"], project: projects["3"]}
};

export const users = {
    "1": {
        id: 1, name: 'John Doe',
        projectRoles: [
            projectRoles["11"], projectRoles["12"], projectRoles["13"]]
    },
    "2": {
        id: 2, name: 'Alice',
        projectRoles: [
            projectRoles["21"], projectRoles["32"], projectRoles["33"]]
    },
    "3": {
        id: 3, name: 'Bob',
        projectRoles: []
    }
};



mock.onGet('/projects').reply(200, Object.values(projects));
mock.onGet('/projects/1').reply(200, projects["1"]);
mock.onGet('/projects/2').reply(200, projects["2"]);
mock.onGet('/projects/3').reply(200, projects["3"]);

mock.onGet('/roles').reply(200, Object.values(roles));
mock.onGet('/roles/1').reply(200, roles["1"]);
mock.onGet('/roles/2').reply(200, roles["2"]);
mock.onGet('/roles/3').reply(200, roles["3"]);

mock.onGet('/projectRoles').reply(200, Object.values(projectRoles));
mock.onGet('/projectRoles/11').reply(200, projectRoles["11"]);
mock.onGet('/projectRoles/21').reply(200, projectRoles["21"]);
mock.onGet('/projectRoles/31').reply(200, projectRoles["31"]);
mock.onGet('/projectRoles/12').reply(200, projectRoles["12"]);
mock.onGet('/projectRoles/22').reply(200, projectRoles["22"]);
mock.onGet('/projectRoles/32').reply(200, projectRoles["32"]);
mock.onGet('/projectRoles/13').reply(200, projectRoles["13"]);
mock.onGet('/projectRoles/23').reply(200, projectRoles["23"]);
mock.onGet('/projectRoles/33').reply(200, projectRoles["33"]);


mock.onGet('/users').reply(200, Object.values(users));
mock.onGet('/users/1').reply(200, users["1"]);
mock.onGet('/users/2').reply(200, users["2"]);
mock.onGet('/users/3').reply(200, users["3"]);
