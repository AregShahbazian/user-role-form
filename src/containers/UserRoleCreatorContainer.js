import React from 'react';
import {connect} from "react-redux";
import routines from "../actions/index"
import {reduxForm} from "redux-form";
import {getSelectedProjectId, getSelectedUserId} from "../reducers/selectors";
import UserRoleCreator from "../components/UserRoleCreator";

const mapStateToProps = (state) => ({
    projectId: getSelectedProjectId(state),
    userId: getSelectedUserId(state)
});

const mapDispatchToProps = ({
    createProjectUserRole: routines.PROJECT_USER_ROLES.CREATE.trigger
});


class UserRoleCreatorContainer extends React.Component {
    addRole = (roleId) => {
        const {projectId, userId, createProjectUserRole} = this.props;
        createProjectUserRole({project: projectId, user: userId, role: roleId});
    };

    render() {
        const {projectId, userId} = this.props;
        return <UserRoleCreator visible={!!projectId}
                                selectedUserId={userId}
                                addRole={this.addRole}/>
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(reduxForm({
    form: "userRoleAdd"
})(UserRoleCreatorContainer))