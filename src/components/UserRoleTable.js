import React from 'react';
import PropTypes from "prop-types";
import UserRoleRowContainer from "../containers/UserRoleRowContainer";
import {Table} from "./styled/UserRoleTable.styled";

const UserRoleTable = ({show, projectUserRoles, loading, error}) => (
    show && <div>
        {((loading || !!projectUserRoles.length) &&
            <Table loading={loading}>
                <tbody>
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