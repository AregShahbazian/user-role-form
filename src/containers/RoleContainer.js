import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Role from "../components/Role";

const mapStateToProps = (state) => ({
    roles: state.users.entities.roles
});

const mapDispatchToProps = () => ({});

class RoleContainer extends React.Component {
    render() {
        return <Role role={this.props.roles[this.props.roleId]}/>
    }
}

RoleContainer.propTypes = {
    roleId: PropTypes.number.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoleContainer)