import React from 'react';
import PropTypes from "prop-types";
import {DeleteSpan} from "./styled/RoleDeleter.styled";

const RoleDeleter = ({handleDeleteClick}) => (
    <DeleteSpan onClick={handleDeleteClick}>
        Delete
    </DeleteSpan>
);

RoleDeleter.propTypes = {
    handleDeleteClick: PropTypes.func.isRequired
};

export default RoleDeleter