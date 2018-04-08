import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import routines from "../actions/index"
import UserRoleDeleter from "../components/RoleDeleter";

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = ({
    deleteProjectUserRole: routines.PROJECT_USER_ROLES.DELETE.trigger
});


class RoleDeleterContainer extends React.Component {
    onDelete = () => {
        const {projectUserRoleId, deleteProjectUserRole} = this.props;
        deleteProjectUserRole(undefined, {id: projectUserRoleId});
    };

    render() {
        return <UserRoleDeleter handleDeleteClick={this.onDelete}/>
    }
}

RoleDeleterContainer.propTypes = {
    projectUserRoleId: PropTypes.number.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoleDeleterContainer)