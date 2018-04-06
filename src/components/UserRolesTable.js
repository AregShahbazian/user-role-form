import React from 'react';
import PropTypes from "prop-types";
import UserRolesRow from "./ProjectRoleRow";

const UserRolesTable = ({projectRoles}) => (
    <div>
        {projectRoles.map(projectRole =>
            <UserRolesRow key={projectRole.id} {...projectRole}/>)}
    </div>
);

UserRolesTable.propTypes = {
    projectRoles: PropTypes.arrayOf(
        PropTypes.object.isRequired
    ).isRequired
};

export default UserRolesTable