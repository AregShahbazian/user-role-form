import React from 'react';
import PropTypes from "prop-types";
import UserRoleRowContainer from "../containers/UserRoleRowContainer";

const UserRoleTable = ({show, projectUserRoles, loading, error}) => (
    show && <div>
        {(loading &&
            <p>Loading...</p>)
        || (!!projectUserRoles.length &&
            <table>
                <tbody>
                <tr>
                    <th>User</th>
                    <th>Role</th>
                </tr>
                {projectUserRoles.map(projectUserRole =>
                    <UserRoleRowContainer key={projectUserRole.id} {...projectUserRole}/>)}
                </tbody>
            </table>)
        ||
        <p>
            No user-roles defined for selected project
        </p>
        }
        {error && <p>Oops .. an error occurred</p>}
    </div>
);

UserRoleTable.propTypes = {
    show: PropTypes.bool.isRequired,
    projectUserRoles: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object
};

export default UserRoleTable