import React from 'react';
import {connect} from "react-redux";
import UserRoleTable from "../components/UserRoleTable";

const getSelectedProjectId = (state) => {
    return state.form.projectSelect.values ? state.form.projectSelect.values.project.id : undefined;
}

const getProjectUserRoles = (state) => {
    return state.projectUserRoles.entities.projectUserRoles;
};

const mapStateToProps = (state) => ({
    projectId: getSelectedProjectId(state),
    projectUserRoles: getProjectUserRoles(state) || {},
    loadingProjectUserRoles: state.projectUserRoles.loading
});

const mapDispatchToProps = () => ({});

class UserRoleTableContainer extends React.Component {
    render() {
        return this.props.projectId ?
            <UserRoleTable projectUserRoles={this.props.projectUserRoles} loading={this.props.loadingProjectUserRoles}/>
            : (null)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserRoleTableContainer)