import React from 'react';
import {connect} from "react-redux";
import UserRolesTable from "../components/UserRolesTable";

const getProjectRoleIdsForSelectedUser = (state) => {
    let userId = state.form.userSelect.values ? state.form.userSelect.values.user.id : undefined;
    return userId ? state.users.entities.users[userId].projectRoles : [];
};

const mapStateToProps = (state) => ({
    userProjectRoleIds: getProjectRoleIdsForSelectedUser(state)
});

const mapDispatchToProps = () => ({});

class UserRolesTableContainer extends React.Component {
    render() {
        return <UserRolesTable projectRolesIds={this.props.userProjectRoleIds}/>
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserRolesTableContainer)