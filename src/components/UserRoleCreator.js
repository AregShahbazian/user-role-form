import React from 'react';
import PropTypes from "prop-types";
import UserPickerContainer from "../containers/UserPickerContainer";
import RolePickerContainer from "../containers/RolePickerContainer";
import {UserRoleCreatorDiv} from "./UserRoleCreator.styled";


const UserRoleCreator = ({visible, selectedUserId, addRole}) => (
    <UserRoleCreatorDiv visible={visible}>
        <UserPickerContainer/>
        <RolePickerContainer handleRolePick={addRole} visible={!!selectedUserId}/>
    </UserRoleCreatorDiv>
);

UserRoleCreator.propTypes = {
    visible: PropTypes.bool.isRequired,
    selectedUserId: PropTypes.number,
    addRole: PropTypes.func.isRequired
};

export default UserRoleCreator