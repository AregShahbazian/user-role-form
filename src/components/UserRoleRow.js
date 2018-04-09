import React from 'react';
import PropTypes from "prop-types";
import User from "./User";
import RolePickerContainer from "../containers/RolePickerContainer";
import RoleDeleterContainer from "../containers/RoleDeleterContainer";
import {UserRoleRowTr} from "./styled/UserRoleRow.styled";

const UserRoleRow = ({projectUserRoleId, projectUser, selectedRole, onRolePick}) => (
    <UserRoleRowTr>
        <td>
            <User projectUser={projectUser}/>
        </td>
        <td>
            <RolePickerContainer selectedRole={selectedRole} handleRolePick={onRolePick}/>
        </td>
        <td>
            <RoleDeleterContainer projectUserRoleId={projectUserRoleId}/>
        </td>
    </UserRoleRowTr>
);

UserRoleRow.propTypes = {
    projectUserRoleId: PropTypes.number.isRequired,
    projectUser: PropTypes.object.isRequired,
    selectedRole: PropTypes.object,
    onRolePick: PropTypes.func.isRequired
};

export default UserRoleRow