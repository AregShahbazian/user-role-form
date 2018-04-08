import React from 'react';
import {connect} from "react-redux";
import {getAllEntities, getSelectedProjectId} from "../reducers/selectors"
import routines from "../actions/index"
import UserRoleTable from "../components/UserRoleTable";

const mapStateToProps = (state) => ({
    projectId: getSelectedProjectId(state),
    projectUserRoles: getAllEntities(state, "projectUserRoles"),
    loading: state.projectUserRoles.loading,
    error: state.projectUserRoles.error
});

const mapDispatchToProps = ({
    getRoles: routines.ROLES.FETCH.trigger,
});

class UserRoleTableContainer extends React.Component {
    render() {
        const {projectId, projectUserRoles, loading, error} = this.props;
        return <UserRoleTable show={!!projectId} projectUserRoles={projectUserRoles}
                              loading={loading} error={error}/>
    }

    componentWillMount() {
        this.props.getRoles();
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserRoleTableContainer)