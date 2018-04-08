import React from 'react';
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import routines from "../actions/index"
import {usersWithoutRole} from "../reducers/selectors";
import UserPicker from "../components/UserPicker";

const mapStateToProps = (state) => ({
    users: usersWithoutRole(state),
    loading: state.users.loading,
});

const mapDispatchToProps = ({
    getUsers: routines.USERS.FETCH.trigger
});


class UserPickerContainer extends React.Component {
    render() {
        const {users, loading} = this.props;
        return <UserPicker users={users} loading={loading}/>
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