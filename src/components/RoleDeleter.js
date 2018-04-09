import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const DeleteSpan = styled.span`
    --main-color: #333;

    border: solid var(--main-color) 1px;
    border-radius: 8px;  
    padding: 0 0.2em;
    
    &:hover{
        background-color: #eee;
        cursor: pointer;    
    }
`;

const RoleDeleter = ({handleDeleteClick}) => (
    <DeleteSpan onClick={handleDeleteClick}>
        Delete
    </DeleteSpan>
);

RoleDeleter.propTypes = {
    handleDeleteClick: PropTypes.func.isRequired
};

export default RoleDeleter