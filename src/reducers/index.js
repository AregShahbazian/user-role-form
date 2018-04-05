import {combineReducers} from "redux";
import {handleActions} from "redux-actions";
import update from "immutability-helper";
import {userRoleProjectRoutines} from "../actions/index"

export const handleRequest = (state, payload) => {
    return update(state, {loading: {$set: true}});
};

export const handleSuccess = (state, payload) => {
    return state;
};

export const handleFailure = (state, payload) => {
    return state;
};

export const handleFulfill = (state, payload) => {
    return state;
};

const userRoles = handleActions({
    /* USER_ROLE_PROJECT routine reducers */
    [userRoleProjectRoutines.REQUEST]
        (state, action) {
        return handleRequest(state, action.payload);
    },
    [userRoleProjectRoutines.SUCCESS]
        (state, action) {
        return handleSuccess(state, action.payload);
    },
    [userRoleProjectRoutines.FAILURE]
        (state, action) {
        return handleFailure(state, action.payload);
    },
    [userRoleProjectRoutines.FULFILL]
        (state, action) {
        return handleFulfill(state, action.payload);
    }
}, {
    users: [],
    roles: [],
    projects: [],
    userRoleProject: [],
    loading: false,
    error: undefined
});

export default combineReducers({
    userRoles
})