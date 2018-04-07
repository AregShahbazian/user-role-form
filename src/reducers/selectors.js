export const getSelectedProjectId = (state) => state.form.projectSelect.values ? state.form.projectSelect.values.project.id : undefined;
export const getProjectUserRoles = (state) => state.projectUserRoles.entities.projectUserRoles;
