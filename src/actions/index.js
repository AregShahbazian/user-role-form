import config from "../config/index"
import {createRoutine} from "redux-saga-routines";

const FETCH_BY_ID = 'FETCH_BY_ID'
const FETCH = 'FETCH'
const CREATE = 'CREATE'
const UPDATE = 'UPDATE'
const DELETE = 'DELETE'

export const crudOps = [FETCH_BY_ID, FETCH, CREATE, UPDATE, DELETE];

/**
 * Creates CRUD action creator routines for each routine name
 * @param routineNames
 */
export const entityRoutines = (routineNames) => {
    return routineNames.reduce((acc, routineName) => {
        acc[routineName] = crudOps.reduce((acc2, crudOp) => {
            /* Create CRUD routines for each entity*/
            acc2[crudOp] = createRoutine(
                `${routineName}/${crudOp}`,
                (payload) => payload,
                (payload, meta) => meta
            )
            return acc2
        }, {})

        return acc
    }, {})

}

/**
 * Create routines-objects for the list of routine-names
 */
export default entityRoutines(Object.values(config).map(e => e.routineName))
