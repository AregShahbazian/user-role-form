import axios from "axios"
import {forEach} from "lodash";
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
    "211": {id: 211, project: projects["2"], user: users["1"], role: roles["1"]},
};

mock.onGet('/projects').reply(200, Object.values(projects));
mock.onGet('/users').reply(200, Object.values(users));
mock.onGet('/roles').reply(200, Object.values(roles));

mock.onGet('/projectUserRoles?project=1').reply(200, [
    projectUserRoles["111"],
    projectUserRoles["122"]]);
mock.onGet('/projectUserRoles?project=2').reply(200, [
    projectUserRoles["211"]]);
mock.onGet('/projectUserRoles?project=3').reply(200, []);

forEach(Object.values(roles), role => {
    forEach(Object.values(projectUserRoles), projectUserRole => {
        /* Mock PATCH'ing every combination of projectUserRoles and new roles */
        mock.onPatch(`/projectUserRoles/${projectUserRole.id}`,
            {
                role: role.id
            }).reply(200,
            {
                ...projectUserRole,
                role: role
            });

        mock.onDelete(`/projectUserRoles/${projectUserRole.id}`).reply(200, projectUserRole);
    });

    forEach(Object.values(users), user => {
        forEach(Object.values(projects), project => {
            mock.onPost("/projectUserRoles",
                {
                    project: project.id,
                    user: user.id,
                    role: role.id
                }).reply(200,
                {
                    id: Number(`${project.id}${user.id}${role.id}`),
                    project: project,
                    user: user,
                    role: role
                });
        })
    })

});