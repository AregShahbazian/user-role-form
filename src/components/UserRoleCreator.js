import React from 'react';
import PropTypes from "prop-types";
import UserPickerContainer from "../containers/UserPickerContainer";
import RolePickerContainer from "../containers/RolePickerContainer";
import styled from 'styled-components';

const UserRoleCreatorDiv = styled.div`
    display:  ${props => !props.visible && "none"};
`;

const UserRoleCreatorRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const UserRoleCreator = ({visible, selectedUserId, addRole}) => (
    <UserRoleCreatorDiv className="user-role-creator" visible={visible}>
        <p>Add new role for user:</p>
        <UserRoleCreatorRow>
            <UserPickerContainer/>
            <RolePickerContainer handleRolePick={addRole} visible={!!selectedUserId}/>
        </UserRoleCreatorRow>
    </UserRoleCreatorDiv>
);

UserRoleCreator.propTypes = {
    visible: PropTypes.bool.isRequired,
    selectedUserId: PropTypes.number,
    addRole: PropTypes.func.isRequired
};

export default UserRoleCreator