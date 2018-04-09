import React from 'react';
import PropTypes from "prop-types";
import {RolePickerDiv, RoleSpan} from "./styled/RolePicker.styled";

const RolePicker = ({selectedRole, roles, handleRolePick, visible}) => {
    return <RolePickerDiv visible={visible}>
        {roles.map(role =>
            <RoleSpan
                key={role.id}
                onClick={() => handleRolePick(role.id)}
                first={roles.indexOf(role) === 0}
                last={roles.indexOf(role) === roles.length - 1}
                selected={selectedRole && (selectedRole.id === role.id)}>


                {role.name}
            </RoleSpan>)}
    </RolePickerDiv>
};

RolePicker.propTypes = {
    selectedRole: PropTypes.object,
    roles: PropTypes.array.isRequired,
    handleRolePick: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired
};

export default RolePicker