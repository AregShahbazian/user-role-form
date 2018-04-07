import React from 'react';
import PropTypes from "prop-types";
import ProjectRoleRowContainer from "../containers/ProjectRoleRowContainer";

const UserRolesTable = ({projectRolesIds}) => (
    <div>
        {projectRolesIds.length?
        <table>
            <tbody>
            <tr>
                <th>Project</th>
                <th>Role</th>
            </tr>
            {projectRolesIds.map(id => <ProjectRoleRowContainer key={id} id={id}/>)}
            </tbody>
        </table>:
        <p>
            No roles defined for selected user
        </p>}
    </div>
);

UserRolesTable.propTypes = {
    projectRolesIds: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired
};

export default UserRolesTable