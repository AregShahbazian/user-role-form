import React from 'react';
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import routines from "../actions/index"
import ProjectPicker from "../components/ProjectPicker";

const mapStateToProps = (state) => ({
    projects: state.projects.entities.projects || {},
    loading: state.projects.loading
});

const mapDispatchToProps = ({
    getProjects: routines.PROJECTS.FETCH.trigger,
    getProjectUserRoles: routines.PROJECT_USER_ROLES.FETCH.trigger
});


class ProjectPickerContainer extends React.Component {
    handleSelect = (project) => {
        this.props.getProjectUserRoles({project: project.id});
    };

    render() {
        return <ProjectPicker projects={this.props.projects} loading={this.props.loading}
                              handleSelect={this.handleSelect}/>
    }

    componentWillMount() {
        this.props.getProjects();
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(reduxForm({
    form: "projectPicker"
})(ProjectPickerContainer))