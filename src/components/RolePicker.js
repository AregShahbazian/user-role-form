import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const RoleSpan = styled.span`
  border: outset #bbb 2px;
  border-left-width: ${props => props.first ? "4px" : 0};
  border-top-left-radius:  ${props => props.first ? "8px" : 0};
  border-bottom-left-radius:  ${props => props.first ? "8px" : 0};
  border-top-right-radius:  ${props => props.last ? "8px" : 0};
  border-bottom-right-radius:  ${props => props.last ? "8px" : 0};
  
  padding: 0.2em 0.2em;

  background-color:  ${props => props.selected && "#bbb"};
`;

const RolePicker = ({selectedRole, roles, handleRolePick, visible}) => {
    return <div>
        {visible && roles.map(role =>
            <RoleSpan
                key={role.id}
                onClick={() => handleRolePick(role.id)}
                first={roles.indexOf(role) === 0}
                last={roles.indexOf(role) === roles.length - 1}
                selected={selectedRole && (selectedRole.id === role.id)}>

                {role.name}
            </RoleSpan>)}
    </div>
};

RolePicker.propTypes = {
    selectedRole: PropTypes.object,
    roles: PropTypes.array.isRequired,
    handleRolePick: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired
};

export default RolePicker