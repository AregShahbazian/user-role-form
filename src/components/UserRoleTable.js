import React from 'react';
import PropTypes from "prop-types";
import UserRoleRowContainer from "../containers/UserRoleRowContainer";
import styled from 'styled-components';

const Table = styled.table`
    position: relative;
    table-layout: auto;
    width: 100%;
    margin-bottom: 2em;
    
    opacity:  ${props => !props.loading ? "1.0" : "0.3"};
`;


const NoUserP = styled.p`
    display: table;
    margin: 1em auto;
    font-size: 14px;
`;


const ErrorP = styled.p`
    display: table;
    margin: 0 auto;
    color: red;
`;

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
        <NoUserP>
            No user-roles defined for selected project
        </NoUserP>
        }
        {error && <ErrorP>Oops .. an error occurred</ErrorP>}
    </div>
);

UserRoleTable.propTypes = {
    show: PropTypes.bool.isRequired,
    projectUserRoles: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object
};

export default UserRoleTable