import domainConfigs from "../config/index"
import {map, reduce} from "lodash";
import {all, call, fork, put, takeLatest} from "redux-saga/effects";
import routines from "../actions/index";
import apiFunctions from "../api/index"

export function* crudSaga(routine, apiFunction, action) {
    console.log("saga\t CRUD saga triggered by action: %s", action.type);

    console.log("saga\t put : entity operation request");
    yield put(routine.request());

    console.log("saga\t call : api function");
    const {response, error} = yield call(apiFunction, action.payload, action.meta);

    if (response) {
        // console.log("saga\t put : entity operation success\n normalized response: %s", JSON.stringify(response))
        yield put(routine.success(response))
    }
    else {
        console.log("saga\t put : entity operation failure")
        console.error(error);
        yield put(routine.failure(error))
    }
    console.log("saga\t put : entity operation fulfill")
    yield put(routine.fulfill())
}

export function* watchLatestAction(action, workerSaga) {
    yield takeLatest(action, workerSaga)
}

export const createWatcherSagasPerEntity = (domainConfigs, routines, apiFunctions) => {
    return reduce(domainConfigs, (watcherSagas, entityConfig, entityName) => {
        watcherSagas[entityName] = {
            fetch: watchLatestAction.bind(null, routines[entityConfig.routineString].FETCH.TRIGGER,
                crudSaga.bind(null, routines[entityConfig.routineString].FETCH, apiFunctions[entityName].fetch)),

            create: watchLatestAction.bind(null, routines[entityConfig.routineString].CREATE.TRIGGER,
                crudSaga.bind(null, routines[entityConfig.routineString].CREATE, apiFunctions[entityName].create)),

            update: watchLatestAction.bind(null, routines[entityConfig.routineString].UPDATE.TRIGGER,
                crudSaga.bind(null, routines[entityConfig.routineString].UPDATE, apiFunctions[entityName].update)),

            delete: watchLatestAction.bind(null, routines[entityConfig.routineString].DELETE.TRIGGER,
                crudSaga.bind(null, routines[entityConfig.routineString].DELETE, apiFunctions[entityName].delete))
        };
        return watcherSagas
    }, {})

};

export const createWatcherSagaForks = (watcherSagas) => {
    let forks = [];
    map(watcherSagas, entityWatchers => {
        map(entityWatchers, watcher => {
            forks.push(fork(watcher))
        })
    });
    return forks
};

export default function* forkAllWatchers() {
    let watcherSagas = createWatcherSagasPerEntity(domainConfigs, routines, apiFunctions);
    let watcherSagaForks = createWatcherSagaForks(watcherSagas);

    yield all(watcherSagaForks)
}