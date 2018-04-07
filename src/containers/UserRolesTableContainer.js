import React from 'react';
import {connect} from "react-redux";
import UserRolesTable from "../components/UserRolesTable";

const getSelectedUserId = (state) => {
    return state.form.userSelect.values ? state.form.userSelect.values.user.id : undefined;
}

const getProjectRoleIdsForSelectedUser = (state) => {
    let userId = getSelectedUserId(state);
    return userId ? state.users.entities.users[userId].projectRoles : [];
};

const mapStateToProps = (state) => ({
    userId: getSelectedUserId(state),
    userProjectRoleIds: getProjectRoleIdsForSelectedUser(state)
});

const mapDispatchToProps = () => ({});

class UserRolesTableContainer extends React.Component {
    render() {
        return this.props.userId &&
            <UserRolesTable projectRolesIds={this.props.userProjectRoleIds}/>
            || (null)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserRolesTableContainer)