import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getAllEntities} from "../reducers/selectors";
import RolePicker from "../components/RolePicker";

const mapStateToProps = (state) => ({
    roles: getAllEntities(state, "roles")
});

class RolePickerContainer extends React.Component {

    render() {
        const {roles, selectedRole, handleRolePick, visible = true} = this.props;
        return <RolePicker roles={roles} selectedRole={selectedRole} handleRolePick={handleRolePick} visible={visible}/>
    }
}

RolePickerContainer.propTypes = {
    selectedRole: PropTypes.object,
    handleRolePick: PropTypes.func.isRequired,
    visible: PropTypes.bool
};

export default connect(
    mapStateToProps
)(RolePickerContainer)