import React from 'react';
import PropTypes from "prop-types";

const RolePicker = ({selectedRole, roles, onPick, visible}) => (
    <div>
        {visible && Object.values(roles).map(role =>
            <span key={role.id} onClick={() => onPick(role.id)}
                  className={selectedRole && (selectedRole.id === role.id) ? "selected" : ""}>{role.name}
                      </span>)}
    </div>
);

RolePicker.propTypes = {
    selectedRole: PropTypes.object,
    roles: PropTypes.object.isRequired,
    onPick: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired
};

export default RolePicker