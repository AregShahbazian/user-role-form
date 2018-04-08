import React from 'react';
import PropTypes from "prop-types";

const RolePicker = ({selectedRole, roles, handleChange}) => (
    <td>
        {Object.values(roles).map(role =>
            <span key={role.id} onClick={() => handleChange(role.id)}
                  className={selectedRole.id === role.id ? "selected" : ""}>{role.name}
                      </span>)}
    </td>
);

RolePicker.propTypes = {
    selectedRole: PropTypes.object.isRequired,
    roles: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default RolePicker