import React from 'react';
import PropTypes from "prop-types";
import UserRoleRowContainer from "../containers/UserRoleRowContainer";

const UserRoleTable = ({projectUserRoles, loading}) => (
    <div>
        {loading ?
            <p>Loading...</p> :
            Object.keys(projectUserRoles).length ?
                <table>
                    <tbody>
                    <tr>
                        <th>User</th>
                        <th>Role</th>
                    </tr>
                    {Object.keys(projectUserRoles).map(id =>
                        <UserRoleRowContainer key={id} {...projectUserRoles[id]}/>)}
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