import React from 'react';
import PropTypes from "prop-types";

const RoleDeleter = ({handleDeleteClick}) => (
    <div onClick={handleDeleteClick}>
        X
    </div>
);

RoleDeleter.propTypes = {
    handleDeleteClick: PropTypes.func.isRequired
};

export default RoleDeleter