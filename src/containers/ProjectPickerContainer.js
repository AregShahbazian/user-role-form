import React from 'react';
import {connect} from "react-redux";
import {concat, forEach} from "lodash";
import {reduxForm} from "redux-form";
import routines from "../actions/index"
import ProjectPicker from "../components/ProjectPicker";

const getProjectsFromState = (projectsState) => {
    let cachedProjects = [];
    forEach(projectsState.result, (id) => {
        cachedProjects = concat(cachedProjects, projectsState.entities.projects[id])
    });
    return cachedProjects
};

const mapStateToProps = (state) => ({
    projects: getProjectsFromState(state.projects),
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
        return <ProjectPicker projects={this.props.projects} loading={this.props.loading} onSelect={this.handleSelect}/>
    }

    componentWillMount() {
        this.props.getProjects();
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(reduxForm({
    form: "projectSelect"
})(ProjectPickerContainer))