export const getAllRoles = (state) => state.roles.entities.roles || {}

export const getSelectedProjectId = (state) => state.form.projectPicker.values ? state.form.projectPicker.values.project.id : undefined;
export const getSelectedUserId = (state) => state.form.userPicker && state.form.userPicker.values ?
    state.form.userPicker.values.user.id : undefined;
export const getProjectUserRoles = (state) => state.projectUserRoles.entities.projectUserRoles;
export const usersWithoutRole = (state) => {
    let users = state.users.entities.users || {};
    let projectUsers = state.projectUserRoles.entities.users || {};
    let usersWithoutRole = {};
    Object.keys(users).forEach(id => {
        if (!projectUsers.hasOwnProperty(id)) {
            usersWithoutRole[id] = users[id];
        }
    });
    return usersWithoutRole
}
