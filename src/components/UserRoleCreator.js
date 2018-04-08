import React from 'react';
import PropTypes from "prop-types";
import UserPickerContainer from "../containers/UserPickerContainer";
import RolePickerContainer from "../containers/RolePickerContainer";

const UserRoleCreator = ({show, selectedUserId, addRole}) => (
    show && <div>
        <UserPickerContainer/>
        <RolePickerContainer onPick={addRole} visible={!!selectedUserId}/>
    </div>
);

UserRoleCreator.propTypes = {
    show: PropTypes.bool.isRequired,
    selectedUserId: PropTypes.number,
    addRole: PropTypes.func.isRequired
};

export default UserRoleCreator