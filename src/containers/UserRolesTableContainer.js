import React from 'react';
import {connect} from "react-redux";
import {concat, forEach} from "lodash";
import UserRolesTable from "../components/UserRolesTable";

const getProjectRolesForSelectedUser = (state) => {
    let userId = state.form.userSelect.values ? state.form.userSelect.values.user.id : undefined;
    let projectRolesIds = userId ? state.users.entities.users[userId].projectRoles : [];

    let projectRoles = [];
    forEach(projectRolesIds, (id) => {
        projectRoles = concat(projectRoles, state.users.entities.projectRoles[id])
    });

    let projectRolesDenorm = []

    forEach(projectRoles, projectRole => {
        projectRolesDenorm = concat(projectRolesDenorm, {
            ...projectRole,
            project: state.users.entities.projects[projectRole.project],
            role: state.users.entities.roles[projectRole.role]
        })
    });

    return projectRolesDenorm
}

const mapStateToProps = (state) => ({
    userProjectRoles: getProjectRolesForSelectedUser(state)
});

const mapDispatchToProps = () => ({});

class UserRolesTableContainer extends React.Component {
    render() {
        return <UserRolesTable projectRoles={this.props.userProjectRoles}/>
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserRolesTableContainer)