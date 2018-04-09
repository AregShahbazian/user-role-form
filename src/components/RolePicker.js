import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const RolePickerDiv = styled.div`
    flex: 2 0 auto;
    margin-left: 1em;
    display:  ${props => !props.visible && "none"};
`;

const RoleSpan = styled.span`
    --main-color: #333;
  
    border: solid var(--main-color) 1px;
    border-left-style: ${props => props.first ? "solid" : "none"};
    border-top-left-radius:  ${props => props.first ? "8px" : 0};
    border-bottom-left-radius:  ${props => props.first ? "8px" : 0};
    border-top-right-radius:  ${props => props.last ? "8px" : 0};
    border-bottom-right-radius:  ${props => props.last ? "8px" : 0};
    
    padding: 0 0.2em;
    
    background-color:  ${props => props.selected && "var(--main-color)"};
    color:  ${props => props.selected ? "#fff" : "var(--main-color)"};
    
    &:hover{
        background-color: #eee;
        cursor: pointer;    
    }
`;

const RolePicker = ({selectedRole, roles, handleRolePick, visible}) => {
    let isSelected = selectedRole && (selectedRole.id === role.id);

    return <RolePickerDiv className="role-picker" visible={visible}>
        {roles.map(role =>
            <RoleSpan
                className={`role-picker-option ${isSelected && "selected"}`}
                key={role.id}
                onClick={() => handleRolePick(role.id)}
                first={roles.indexOf(role) === 0}
                last={roles.indexOf(role) === roles.length - 1}
                selected={isSelected}>


                {role.name}
            </RoleSpan>)}
    </RolePickerDiv>
}

RolePicker.propTypes = {
    selectedRole: PropTypes.object,
    roles: PropTypes.array.isRequired,
    handleRolePick: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired
};

export default RolePicker