import React from 'react';
import PropTypes from "prop-types";
import ProjectRoleRowContainer from "../containers/ProjectRoleRowContainer";

const UserRolesTable = ({projectRolesIds}) => (
    projectRolesIds.map(id => <ProjectRoleRowContainer key={id} id={id}/>)
);

UserRolesTable.propTypes = {
    projectRolesIds: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired
};

export default UserRolesTable