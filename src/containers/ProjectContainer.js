import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Project from "../components/Project";

const mapStateToProps = (state) => ({
    projects: state.users.entities.projects
});

const mapDispatchToProps = () => ({});

class ProjectContainer extends React.Component {
    render() {
        return <Project project={this.props.projects[this.props.projectId]}/>
    }
}

ProjectContainer.propTypes = {
    projectId: PropTypes.number.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectContainer)