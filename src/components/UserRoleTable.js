import React from 'react';
import PropTypes from "prop-types";
import UserRoleRowContainer from "../containers/UserRoleRowContainer";

const UserRoleTable = ({projectUserRoles, loading}) => (
    <div>
        {loading ?
            <p>Loading...</p> :
            Object.values(projectUserRoles).length ?
                <table>
                    <tbody>
                    <tr>
                        <th>User</th>
                        <th>Role</th>
                    </tr>
                    {Object.values(projectUserRoles).map(projectUserRole =>
                        <UserRoleRowContainer key={projectUserRole.id} {...projectUserRole}/>)}
                    </tbody>
                </table> :
                <p>
                    No user-roles defined for selected project
                </p>}
    </div>
);

UserRoleTable.propTypes = {
    projectUserRoles: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

export default UserRoleTable