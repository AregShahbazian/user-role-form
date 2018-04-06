import config from "../config/index"
import {combineReducers} from "redux";
import update from "immutability-helper"
import {merge, reduce, union} from "lodash";
import {combineActions, handleActions} from "redux-actions";
import routines from "../actions/index";

// NOTE: lodash merge performs recursively, and could slow down performance
/**
 * Performs immutable merge of a single normalized entity with the state
 * @param state
 * @param payload
 * @returns {*}
 */
export const mergeEntityIntoState = (state, payload) => {
    let entities = merge({}, state.entities, payload.entities)
    let result = union(state.result, [payload.result])

    return {...state, entities, result}
}

/**
 * Performs immutable delete, removing the the id in the payload from the result array in the state
 * @param state
 * @param payload
 * @returns {*}
 */
export const deleteEntityFromState = (state, payload) => {
    let idx = state.result.indexOf(payload.result)
    if (idx > -1) {
        return update(state, {result: {$splice: [[idx, 1]]}})
    }
    return state
}

/**
 * Immutably replaces the entities- and result-keys in the state with those in the payload
 * @param state
 * @param payload
 * @returns {{entities, result}}
 */
export const replaceStateWithEntities = (state, payload) => {
    return {...state, entities: payload.entities, result: payload.result}
}

export const updateTableState = (state, loading) => {
    return {...state, loading: loading}
}

/**
 * Reducers for entity-state
 * @param entityRoutines
 * @param initialState
 */
export const createEntityDataReducers = (entityRoutines, initialState) => handleActions({
    /* REQUEST */
    [combineActions(
        entityRoutines.FETCH.request)]
        (state, action) {
        return updateTableState(state, true)
    },
    /* SUCCESS */
    [combineActions(
        entityRoutines.FETCH.success)]
        (state, action) {
        return updateTableState(replaceStateWithEntities(state, action.payload), false)
    },
    [combineActions(
        entityRoutines.FETCH_BY_ID.success,
        entityRoutines.CREATE.success,
        entityRoutines.UPDATE.success)]
        (state, action) {
        return mergeEntityIntoState(state, action.payload);
    }
}, initialState);

/**
 * Creates crud-reducers, create-form reducers, and update-form reducers, for each entity in domainConfigs.
 */
let entityDataReducers = reduce(config, (reducers, entityConfig, entityName) => {
    reducers[entityName] =
        createEntityDataReducers(routines[entityConfig.routineName], entityConfig.initialState)
    return reducers
}, {})

export default combineReducers({
    ...entityDataReducers
})