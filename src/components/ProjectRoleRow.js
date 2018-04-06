import React from 'react';
import PropTypes from "prop-types";

const ProjectRoleRow = ({project, role}) => (
    <div>
        {JSON.stringify(project)}
        {JSON.stringify(role)}
    </div>
);

ProjectRoleRow.propTypes = {
    project: PropTypes.object.isRequired,
    role: PropTypes.object.isRequired
};

export default ProjectRoleRow