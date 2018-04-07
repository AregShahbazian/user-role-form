import React from 'react';
import PropTypes from "prop-types";

const UserRoleRow = ({projectUser, projectRole, roles, handleChange}) => (
    <tr>
        <td>
            {projectUser.name}
        </td>
        <td>
            <select defaultValue={projectRole.id} onChange={handleChange}>
                {Object.values(roles).map(role =>
                    <option key={role.id} value={role.id}>{role.name}</option>)}
            </select>
        </td>
    </tr>
);

UserRoleRow.propTypes = {
    projectUser: PropTypes.object.isRequired,
    projectRole: PropTypes.object.isRequired,
    roles: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default UserRoleRow