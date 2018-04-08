import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import User from "./User";
import RolePickerContainer from "../containers/RolePickerContainer";
import RoleDeleterContainer from "../containers/RoleDeleterContainer";

const Tr = styled.tr`
    line-height: 3em;
`;

const UserRoleRow = ({projectUserRoleId, projectUser, selectedRole, onRolePick}) => (
    <Tr>
        <td>
            <User projectUser={projectUser}/>
        </td>
        <td>
            <RolePickerContainer selectedRole={selectedRole} handleRolePick={onRolePick}/>
        </td>
        <td>
            <RoleDeleterContainer projectUserRoleId={projectUserRoleId}/>
        </td>
    </Tr>
);

UserRoleRow.propTypes = {
    projectUserRoleId: PropTypes.number.isRequired,
    projectUser: PropTypes.object.isRequired,
    selectedRole: PropTypes.object,
    onRolePick: PropTypes.func.isRequired
};

export default UserRoleRow