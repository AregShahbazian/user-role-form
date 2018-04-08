import React from 'react';
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import routines from "../actions/index"
import {getUsersWithoutRole} from "../reducers/selectors";
import UserPicker from "../components/UserPicker";

const mapStateToProps = (state) => ({
    usersWithoutRole: getUsersWithoutRole(state),
    loading: state.users.loading,
});

const mapDispatchToProps = ({
    getUsers: routines.USERS.FETCH.trigger
});


class UserPickerContainer extends React.Component {
    render() {
        const {usersWithoutRole, loading} = this.props;
        return <UserPicker users={usersWithoutRole} loading={loading}/>
    }

    componentWillMount() {
        this.props.getUsers();
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(reduxForm({
    form: "userPicker"
})(UserPickerContainer))