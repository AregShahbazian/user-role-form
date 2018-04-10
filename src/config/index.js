import {normalize, schema} from "normalizr";

export const projects = "projects";
const projectsSchema = new schema.Entity(projects);
const projectsInitialState = {
    ...normalize([], new schema.Array(projectsSchema)),
    loading: false,
    error: undefined
};

export const users = "users";
const usersSchema = new schema.Entity(users);
const usersInitialState = {
    ...normalize([], new schema.Array(usersSchema)),
    loading: false,
    error: undefined
};

export const roles = "roles";
const rolesSchema = new schema.Entity(roles);
const rolesInitialState = {
    ...normalize([], new schema.Array(rolesSchema)),
    loading: false,
    error: undefined
};

export const projectUserRoles = "projectUserRoles";
const projectUserRolesSchema = new schema.Entity("projectUserRoles", {
    project: projectsSchema, user: usersSchema, role: rolesSchema
});
const projectUserRolesInitialState = {
    ...normalize([], new schema.Array(projectUserRolesSchema)),
    loading: false,
    error: undefined
};

const domainConfigs = {};

domainConfigs[projects] = {
    routineString: "PROJECTS",
    schema: projectsSchema,
    initialState: projectsInitialState
};

domainConfigs[users] = {
    routineString: "USERS",
    schema: usersSchema,
    initialState: usersInitialState
};

domainConfigs[roles] = {
    routineString: "ROLES",
    schema: rolesSchema,
    initialState: rolesInitialState
};

domainConfigs[projectUserRoles] = {
    routineString: "PROJECT_USER_ROLES",
    schema: projectUserRolesSchema,
    initialState: projectUserRolesInitialState
};

export default domainConfigs