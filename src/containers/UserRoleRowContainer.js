import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import routines from "../actions/index"
import UserRoleRow from "../components/UserRoleRow";

const mapStateToProps = (state) => ({
    projectUsers: state.projectUserRoles.entities.users,
    projectRoles: state.projectUserRoles.entities.roles,
});

const mapDispatchToProps = ({
    updateProjectUserRole: routines.PROJECT_USER_ROLES.UPDATE.trigger
});

class UserRoleRowContainer extends React.Component {
    updateRole = (roleId) => {
        const {id, updateProjectUserRole} = this.props;
        updateProjectUserRole({role: roleId}, {id});
    };

    render() {
        const {id, user, role, projectUsers, projectRoles} = this.props;
        return <UserRoleRow projectUser={projectUsers[user]}
                            selectedRole={projectRoles[role]}
                            onRolePick={this.updateRole}
                            projectUserRoleId={id}/>
    }
}

UserRoleRowContainer.propTypes = {
    id: PropTypes.number.isRequired,
    project: PropTypes.number.isRequired,
    user: PropTypes.number.isRequired,
    role: PropTypes.number.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserRoleRowContainer)