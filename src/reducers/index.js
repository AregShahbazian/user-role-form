import domainConfigs from "../config/index";
import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import update from "immutability-helper";
import {merge, reduce, union} from "lodash";
import {combineActions, handleActions} from "redux-actions";
import routines from "../actions/index";

export const mergeEntityIntoState = (state, payload) => {
    let entities = merge({}, state.entities, payload.entities);
    let result = union(state.result, [payload.result]);

    return {...state, entities, result}
};

export const deleteEntityFromStateResult = (state, payload) => {
    let idx = state.result.indexOf(payload.result);
    if (idx > -1) {
        return update(state, {result: {$splice: [[idx, 1]]}})
    }
    return state
};

export const setEntitiesAndResultState = (state, payload) => {
    return update(state, {
        entities: {$set: payload.entities},
        result: {$set: payload.result}
    });
};

export const setErrorState = (state, payload) => {
    return update(state, {error: {$set: payload}})
};

export const setLoadingState = (state, loading) => {
    return update(state, {loading: {$set: loading}})
};

const createDataReducersForEntity = (entityRoutines, initialState) => handleActions({
    /* REQUEST */
    [combineActions(
        entityRoutines.FETCH.request,
        entityRoutines.CREATE.request,
        entityRoutines.UPDATE.request,
        entityRoutines.DELETE.request)]
        (state, action) {
        return setLoadingState(state, true)
    },
    /* SUCCESS */
    [combineActions(
        entityRoutines.FETCH.success)]
        (state, action) {
        return setEntitiesAndResultState(state, action.payload);
    },
    [combineActions(
        entityRoutines.CREATE.success,
        entityRoutines.UPDATE.success)]
        (state, action) {
        return mergeEntityIntoState(state, action.payload);
    },
    [entityRoutines.DELETE.success]
        (state, action) {
        return deleteEntityFromStateResult(state, action.payload);
    },
    [combineActions(
        entityRoutines.FETCH.failure,
        entityRoutines.CREATE.failure,
        entityRoutines.UPDATE.failure,
        entityRoutines.DELETE.failure)]
        (state, action) {
        return setLoadingState(setErrorState(state, action.payload), false);
    },
    [combineActions(
        entityRoutines.FETCH.success,
        entityRoutines.CREATE.success,
        entityRoutines.UPDATE.success,
        entityRoutines.DELETE.success)]
        (state, action) {
        return setLoadingState(setErrorState(state, undefined), false);
    }
}, initialState);

const createUserPickerFormReducers = handleActions({
    [combineActions(
        routines.PROJECT_USER_ROLES.CREATE.trigger,
        routines.PROJECT_USER_ROLES.FETCH.trigger)]
        (state, action) {
        return {}
    }
}, {});

let dataReducersPerEntity = reduce(domainConfigs, (reducers, entityConfig, entityName) => {
    reducers[entityName] =
        createDataReducersForEntity(routines[entityConfig.routineString], entityConfig.initialState)
    return reducers
}, {});

export default combineReducers({
    ...dataReducersPerEntity,
    form: formReducer.plugin({userPicker: createUserPickerFormReducers})
})