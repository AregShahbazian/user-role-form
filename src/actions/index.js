import config from "../config/index"
import {createRoutine} from "redux-saga-routines";
import {createAction} from "redux-actions"

const FETCH_BY_ID = 'FETCH_BY_ID'
const FETCH = 'FETCH'
const CREATE = 'CREATE'
const UPDATE = 'UPDATE'

export const crudOps = [FETCH_BY_ID, FETCH, CREATE, UPDATE];

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

            /* Create form actions for each entity*/

            acc2.FORM = {}

            let formPrepareCreateName = `${routineName}/FORM/PREPARE_CREATE`;
            acc2.FORM.prepareCreate = createAction(
                formPrepareCreateName,
                (payload) => (payload)
            )
            acc2.FORM.PREPARE_CREATE = formPrepareCreateName

            let formPrepareUpdateName = `${routineName}/FORM/PREPARE_UPDATE`;
            acc2.FORM.prepareUpdate = createAction(
                formPrepareUpdateName,
                (payload) => (payload)
            )
            acc2.FORM.PREPARE_UPDATE = formPrepareUpdateName

            return acc2
        }, {})

        return acc
    }, {})

}

/**
 * Create routines-objects for the list of routine-names
 */
export default entityRoutines(Object.values(config).map(e => e.routineName))
