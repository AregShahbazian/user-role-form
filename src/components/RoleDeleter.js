import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const DeleteSpan = styled.span`
  border: outset #bbb 2px;
  border-radius: 8px;  
  
  padding: 0.1em 0.2em;
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