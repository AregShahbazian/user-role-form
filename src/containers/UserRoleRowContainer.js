import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import routines from "../actions/index"
import UserRoleRow from "../components/UserRoleRow";

const mapStateToProps = (state) => ({
    projectUsers: state.projectUserRoles.entities.users,
    projectRoles: state.projectUserRoles.entities.roles,
    roles: state.roles.entities.roles || {}
});

const mapDispatchToProps = ({
    updateProjectUserRole: routines.PROJECT_USER_ROLES.UPDATE.trigger
});

class UserRoleRowContainer extends React.Component {
    handleChange = (event) => {
        const {id, roles, updateProjectUserRole} = this.props;
        let roleId = event.target.value;
        console.log(`Setting role to "${roles[roleId].name}"`)
        updateProjectUserRole({role: roleId}, {id});
    };

    render() {
        const {user, role, projectUsers, projectRoles, roles} = this.props;
        return <UserRoleRow projectUser={projectUsers[user]} projectRole={projectRoles[role]} roles={roles}
                            handleChange={this.handleChange}/>
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