import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import User from "../components/User";
import RolePicker from "../components/RolePicker";

const mapStateToProps = (state) => ({
    users: state.projectUserRoles.entities.users,
    roles: state.projectUserRoles.entities.roles
});

const mapDispatchToProps = () => ({});

class UserRoleRowContainer extends React.Component {

    render() {
        const {user, role} = this.props;
        console.info(this.props)
        return <tr>
            <User user={this.props.users[user]}/>
            <RolePicker role={this.props.roles[role]}/>
        </tr>
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