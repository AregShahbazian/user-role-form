import config from "../config/index";
import {createRoutine} from "redux-saga-routines";

const FETCH_BY_ID = 'FETCH_BY_ID';
const FETCH = 'FETCH';
const CREATE = 'CREATE';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';

export const crudOps = [FETCH_BY_ID, FETCH, CREATE, UPDATE, DELETE];

export const routinesPerEntity = (entityRoutineStrings) => {
    return entityRoutineStrings.reduce((domainRoutines, routineString) => {
        domainRoutines[routineString] = crudOps.reduce((entityRoutines, crudOp) => {
            entityRoutines[crudOp] = createRoutine(
                `${routineString}/${crudOp}`,
                (payload) => payload,
                (payload, meta) => meta
            )
            return entityRoutines
        }, {})
        return domainRoutines
    }, {})

}

export default routinesPerEntity(Object.values(config).map(e => e.routineString))
