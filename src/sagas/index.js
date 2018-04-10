import config from "../config/index"
import {map, reduce} from "lodash";
import {all, call, fork, put, takeLatest} from "redux-saga/effects";
import routines from "../actions/index";
import apiFunctions from "../api/index"

/******************************* SUBROUTINES *************************************/

/**
 * Performs an asynchronous entity operation and dispatches corresponding actions
 * @param entityOp bundle of actions that correspond to an asynchronous entity operation
 * @param apiFn actual api function
 * @param action action that triggered the asynchronous entity operation
 */
export function* makeApiCall(entityOp, apiFn, action) {
    console.log("saga\t Making api call for action: %s", action.type);

    console.log("saga\t put : entity operation request")
    yield put(entityOp.request())

    console.log("saga\t call : api function")
    const {response, error} = yield call(apiFn, action.payload, action.meta)

    if (response) {
        // console.log("saga\t put : entity operation success\n normalized response: %s", JSON.stringify(response))
        yield put(entityOp.success(response))
    }
    else {
        console.log("saga\t put : entity operation failure")
        console.error(error)
        yield put(entityOp.failure(error))
    }
    console.log("saga\t put : entity operation fulfill")
    yield put(entityOp.fulfill())
}


/**
 * Watches the action and calls the saga with action as parameter
 * @param action
 * @param doSaga
 */
export function* watchAction(action, doSaga) {
    yield takeLatest(action, doSaga)
}

/**
 * For each entityConfig object in domainConfigs an object with watchers is created,
 * containing watchers for all routines
 * @param domainConfigs config objects for all entities
 * @param routines routines object
 * @param apiFunctions api functions for each routine for each entity
 * @returns {{}|any|any}
 */
export const createWatcherSagas = (domainConfigs, routines, apiFunctions) => {
    return reduce(domainConfigs, (watchers, entityConfig, entityName) => {
        watchers[entityName] = {
            fetch: watchAction.bind(null, routines[entityConfig.routineString].FETCH.TRIGGER,
                makeApiCall.bind(null, routines[entityConfig.routineString].FETCH, apiFunctions[entityName].fetch)),

            create: watchAction.bind(null, routines[entityConfig.routineString].CREATE.TRIGGER,
                makeApiCall.bind(null, routines[entityConfig.routineString].CREATE, apiFunctions[entityName].create)),

            update: watchAction.bind(null, routines[entityConfig.routineString].UPDATE.TRIGGER,
                makeApiCall.bind(null, routines[entityConfig.routineString].UPDATE, apiFunctions[entityName].update)),

            delete: watchAction.bind(null, routines[entityConfig.routineString].DELETE.TRIGGER,
                makeApiCall.bind(null, routines[entityConfig.routineString].DELETE, apiFunctions[entityName].delete))
        }
        return watchers
    }, {})

}

/**
 * Create a list of fork-effects for each leaf node (watcher) of the watcherSagas object.
 * @param watcherSagas for E entities, each having watchers for R routines
 * @returns {Array} of N x R forks
 */
export const createWatcherSagaForks = (watcherSagas) => {
    let forks = [];
    map(watcherSagas, entityWatchers => {
        map(entityWatchers, watcher => {
            forks.push(fork(watcher))
        })
    })
    return forks
}

/**
 * Create root saga for all forked watcher sagas
 */
export default function* createRootSaga() {
    let watcherSagas = createWatcherSagas(config, routines, apiFunctions)
    let watcherSagaForks = createWatcherSagaForks(watcherSagas)

    yield all(watcherSagaForks)
}