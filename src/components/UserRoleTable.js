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
    display:  ${props => !props.visible && "none"};
`;


const ErrorP = styled.p`
    display: table;
    margin: 0 auto;
    color: red;
    display:  ${props => !props.visible && "none"};
`;

const UserRoleTableDiv = styled.div`
    display:  ${props => !props.visible && "none"};
`;

const UserRoleTable = ({visible, projectUserRoles, loading, error}) => {
    let displayTable = loading || !!projectUserRoles.length;

    return <UserRoleTableDiv className="user-role-table-div" visible={visible}>
        <Table loading={loading} visible={displayTable}>
            <tbody>
            {projectUserRoles.map(projectUserRole =>
                <UserRoleRowContainer key={projectUserRole.id} {...projectUserRole}/>)}
            </tbody>
        </Table>
        <NoUserP className="no-user-p" visible={!displayTable}>
            No user-roles defined for selected project
        </NoUserP>

        <ErrorP className="error-p" visible={!!error}>Oops .. an error occurred</ErrorP>
    </UserRoleTableDiv>
};

UserRoleTable.propTypes = {
    visible: PropTypes.bool.isRequired,
    projectUserRoles: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object
};

export default UserRoleTable