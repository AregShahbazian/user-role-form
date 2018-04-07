import React from 'react';
import PropTypes from "prop-types";
import ProjectContainer from "../containers/ProjectContainer";
import RoleContainer from "../containers/RoleContainer";

const ProjectRoleRow = ({projectRole}) => (
    <div>
        <ProjectContainer projectId={projectRole.project}/>
        <RoleContainer roleId={projectRole.role}/>
    </div>
);

ProjectRoleRow.propTypes = {
    projectRole: PropTypes.object.isRequired
};

export default ProjectRoleRow