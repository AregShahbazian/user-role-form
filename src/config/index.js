import {normalize, schema} from "normalizr";

const roles = "roles"
const rolesSchema = new schema.Entity(roles);
const rolesInitialState = normalize([], new schema.Array(rolesSchema))

const projects = "projects"
const projectsSchema = new schema.Entity(projects);
const projectsInitialState = normalize([], new schema.Array(projectsSchema))

const projectRoles = "projectRoles"
const projectRolesSchema = new schema.Entity("projectRoles", {
    role: rolesSchema, project: projectsSchema
})
const projectRolesInitialState = normalize([], new schema.Array(projectRolesSchema))

const users = "users"
const usersSchema = new schema.Entity(users, {
    projectRoles: [projectRolesSchema]
});
const usersInitialState = normalize([], new schema.Array(usersSchema))

const entityConfigs = {}

entityConfigs[roles] = {
    endpoint: "roles",
    routineName: "ROLES",
    schema: rolesSchema,
    initialState: rolesInitialState
}

entityConfigs[projects] = {
    endpoint: "projects",
    routineName: "PROJECTS",
    schema: projectsSchema,
    initialState: projectsInitialState
}

entityConfigs[projectRoles] = {
    endpoint: "projectRoles",
    routineName: "PROJECT_ROLES",
    schema: projectRolesSchema,
    initialState: projectRolesInitialState
}

entityConfigs[users] = {
    endpoint: "users",
    routineName: "USERS",
    schema: usersSchema,
    initialState: usersInitialState
}

export default entityConfigs