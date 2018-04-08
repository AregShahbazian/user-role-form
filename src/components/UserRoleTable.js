import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';
import UserRoleRowContainer from "../containers/UserRoleRowContainer";

const Table = styled.table`
    table-layout: auto;
    width: 100%;
`;

const UserRoleTable = ({show, projectUserRoles, loading, error}) => (
    show && <div>
        {(loading &&
            <p>Loading...</p>)
        || (!!projectUserRoles.length &&
            <Table>
                <tbody>
                <tr>
                    <th>User</th>
                    <th>Role</th>
                </tr>
                {projectUserRoles.map(projectUserRole =>
                    <UserRoleRowContainer key={projectUserRole.id} {...projectUserRole}/>)}
                </tbody>
            </Table>)
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