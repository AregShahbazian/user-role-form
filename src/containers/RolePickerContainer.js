import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getAllRoles} from "../reducers/selectors";
import RolePicker from "../components/RolePicker";

const mapStateToProps = (state) => ({
    roles: getAllRoles(state)
});

const mapDispatchToProps = ({});

class RolePickerContainer extends React.Component {

    render() {
        const {roles, selectedRole, onPick, visible = true} = this.props;
        return <RolePicker roles={roles} selectedRole={selectedRole} onPick={onPick} visible={visible}/>
    }
}

RolePickerContainer.propTypes = {
    selectedRole: PropTypes.object,
    onPick: PropTypes.func.isRequired,
    visible: PropTypes.bool
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RolePickerContainer)