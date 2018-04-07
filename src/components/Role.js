import React from 'react';
import PropTypes from "prop-types";

const Role = ({role}) => (
    <div>
        {JSON.stringify(role)}
    </div>
);

Role.propTypes = {
    role: PropTypes.object.isRequired
};

export default Role