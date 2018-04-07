import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ProjectRoleRow from "../components/ProjectRoleRow";

const mapStateToProps = (state) => ({
    projectRoles: state.users.entities.projectRoles
});

const mapDispatchToProps = () => ({});

class ProjectRoleRowContainer extends React.Component {
    render() {
        return <ProjectRoleRow projectRole={this.props.projectRoles[this.props.id]}/>
    }
}

ProjectRoleRowContainer.propTypes = {
    id: PropTypes.number.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectRoleRowContainer)