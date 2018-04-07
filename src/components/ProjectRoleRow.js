import React from 'react';
import PropTypes from "prop-types";
import ProjectContainer from "../containers/ProjectContainer";
import RoleContainer from "../containers/RoleContainer";

const ProjectRoleRow = ({projectRole}) => (
    <tr>
        <ProjectContainer projectId={projectRole.project}/>
        <RoleContainer roleId={projectRole.role}/>
    </tr>
);

ProjectRoleRow.propTypes = {
    projectRole: PropTypes.object.isRequired
};

export default ProjectRoleRow