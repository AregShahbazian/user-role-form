import {concat, forEach} from "lodash";

export const getAllEntities = (state, entityName) => {
    return getEntitiesWithIds(state, entityName, state[entityName].result)
};

export const getEntitiesWithIds = (state, entityName, ids) => {
    let cachedEntities = []
    forEach(ids, (id) => {
        cachedEntities = concat(cachedEntities, state[entityName].entities[entityName][id])
    });
    return cachedEntities
};

export const getSelectedProjectId = (state) => state.form.projectPicker.values ? state.form.projectPicker.values.project.id : undefined;

export const getSelectedUserId = (state) => state.form.userPicker && state.form.userPicker.values ?
    state.form.userPicker.values.user.id : undefined;

export const getUsersWithoutRole = (state) => {
    let allUsersIds = state.users.result;

    let userIdsWithRole = [];
    let projectUserRoles = getAllEntities(state, "projectUserRoles");
    projectUserRoles.forEach(projectUserRole => {
        userIdsWithRole = concat(userIdsWithRole, projectUserRole.user)
    });

    let userIdsWithoutRole = allUsersIds.filter(id => !userIdsWithRole.includes(id))
    return getEntitiesWithIds(state, "users", userIdsWithoutRole)
}
