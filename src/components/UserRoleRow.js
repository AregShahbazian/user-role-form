import React from 'react';
import PropTypes from "prop-types";
import User from "./User";
import RolePickerContainer from "../containers/RolePickerContainer";

const UserRoleRow = ({projectUser, selectedRole, onRolePick}) => (
    <tr>
        <td>
            <User projectUser={projectUser}/>
        </td>
        <td>
            <RolePickerContainer selectedRole={selectedRole} onPick={onRolePick}/>
        </td>
    </tr>
);

UserRoleRow.propTypes = {
    projectUser: PropTypes.object.isRequired,
    selectedRole: PropTypes.object,
    onRolePick: PropTypes.func.isRequired
};

export default UserRoleRow