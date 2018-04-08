import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const RoleOption = styled.span`
  border: solid black 1px;
  border-left-width: ${props => props.first ? "1px" : 0};
  border-top-left-radius:  ${props => props.first ? "8px" : 0};
  border-bottom-left-radius:  ${props => props.first ? "8px" : 0};
  border-top-right-radius:  ${props => props.last ? "8px" : 0};
  border-bottom-right-radius:  ${props => props.last ? "8px" : 0};
  padding: 0.4em 0.2em;

  font-weight:  ${props => props.selected && "bold"};
`;

const RolePicker = ({selectedRole, roles, handleRolePick, visible}) => {
    return <div>
        {visible && roles.map(role =>
            <RoleOption
                key={role.id}
                onClick={() => handleRolePick(role.id)}
                first={roles.indexOf(role) === 0}
                last={roles.indexOf(role) === roles.length - 1}
                selected={selectedRole && (selectedRole.id === role.id)}>

                {role.name}
            </RoleOption>)}
    </div>
};

RolePicker.propTypes = {
    selectedRole: PropTypes.object,
    roles: PropTypes.array.isRequired,
    handleRolePick: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired
};

export default RolePicker