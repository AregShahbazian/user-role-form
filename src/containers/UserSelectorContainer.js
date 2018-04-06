import React from 'react';
import {connect} from "react-redux";
import {concat, forEach} from "lodash";
import {reduxForm} from "redux-form";
import routines from "../actions/index"
import UserSelector from "../components/UserSelector";

const getUsersFromState = (usersState) => {
    let cachedUsers = [];
    forEach(usersState.result, (id) => {
        cachedUsers = concat(cachedUsers, usersState.entities.users[id])
    });
    return cachedUsers
};

const mapStateToProps = (state) => ({
    users: getUsersFromState(state.users),
    loading: state.users.loading
});

const mapDispatchToProps = ({
    getUsers: routines.USERS.FETCH.trigger
});


class UserSelectorContainer extends React.Component {
    render() {
        return <UserSelector users={this.props.users} loading={this.props.loading}/>
    }

    componentWillMount() {
        this.props.getUsers();
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(reduxForm({
    form: "userSelect"
})(UserSelectorContainer))