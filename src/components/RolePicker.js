import React from 'react';
import PropTypes from "prop-types";

const RolePicker = ({role}) => (
    <td>
        {JSON.stringify(role)}
    </td>
);

RolePicker.propTypes = {
    role: PropTypes.object.isRequired
};

export default RolePicker