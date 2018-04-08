import React from 'react';
import PropTypes from "prop-types";

const RolePicker = ({selectedRole, roles, handleRolePick, visible}) => (
    <div>
        {visible && roles.map(role =>
            <span key={role.id} onClick={() => handleRolePick(role.id)}
                  className={selectedRole && (selectedRole.id === role.id) ? "selected" : ""}>{role.name}
                      </span>)}
    </div>
);

RolePicker.propTypes = {
    selectedRole: PropTypes.object,
    roles: PropTypes.array.isRequired,
    handleRolePick: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired
};

export default RolePicker