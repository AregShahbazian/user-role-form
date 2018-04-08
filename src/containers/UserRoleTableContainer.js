import React from 'react';
import {connect} from "react-redux";
import {getProjectUserRoles, getSelectedProjectId} from "../reducers/selectors"
import routines from "../actions/index"
import UserRoleTable from "../components/UserRoleTable";

const mapStateToProps = (state) => ({
    projectId: getSelectedProjectId(state),
    projectUserRoles: getProjectUserRoles(state) || {},
    loadingProjectUserRoles: state.projectUserRoles.loading
});

const mapDispatchToProps = ({
    getRoles: routines.ROLES.FETCH.trigger,
});

class UserRoleTableContainer extends React.Component {


    render() {
        return <UserRoleTable show={!!this.props.projectId} projectUserRoles={this.props.projectUserRoles}
                              loading={this.props.loadingProjectUserRoles}/>
    }

    componentWillMount() {
        this.props.getRoles();
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserRoleTableContainer)