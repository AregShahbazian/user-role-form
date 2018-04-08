import {normalize, schema} from "normalizr";

const projects = "projects";
const projectsSchema = new schema.Entity(projects);
const projectsInitialState = {
    ...normalize([], new schema.Array(projectsSchema)),
    loading: false,
    error: undefined
};

const users = "users";
const usersSchema = new schema.Entity(users);
const usersInitialState = {
    ...normalize([], new schema.Array(usersSchema)),
    loading: false,
    error: undefined
};

const roles = "roles";
const rolesSchema = new schema.Entity(roles);
const rolesInitialState = {
    ...normalize([], new schema.Array(rolesSchema)),
    loading: false,
    error: undefined
};

const projectUserRoles = "projectUserRoles";
const projectUserRolesSchema = new schema.Entity("projectUserRoles", {
    project: projectsSchema, user: usersSchema, role: rolesSchema
});
const projectUserRolesInitialState = {
    ...normalize([], new schema.Array(projectUserRolesSchema)),
    loading: false,
    error: undefined
};


const entityConfigs = {}

entityConfigs[projects] = {
    endpoint: "projects",
    routineName: "PROJECTS",
    schema: projectsSchema,
    initialState: projectsInitialState
};

entityConfigs[users] = {
    endpoint: "users",
    routineName: "USERS",
    schema: usersSchema,
    initialState: usersInitialState
};

entityConfigs[roles] = {
    endpoint: "roles",
    routineName: "ROLES",
    schema: rolesSchema,
    initialState: rolesInitialState
};

entityConfigs[projectUserRoles] = {
    endpoint: "projectUserRoles",
    routineName: "PROJECT_USER_ROLES",
    schema: projectUserRolesSchema,
    initialState: projectUserRolesInitialState
};


export default entityConfigs