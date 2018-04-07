import React from 'react';
import PropTypes from "prop-types";

const Role = ({role}) => (
    <td>
        {JSON.stringify(role)}
    </td>
);

Role.propTypes = {
    role: PropTypes.object.isRequired
};

export default Role