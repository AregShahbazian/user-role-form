import domainConfigs from "../config/index";
import {createRoutine} from "redux-saga-routines";

const FETCH = 'FETCH';
const CREATE = 'CREATE';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';

export const crudOps = [FETCH, CREATE, UPDATE, DELETE];

export const createRoutinesPerEntity = (entityRoutineStrings) => {
    return entityRoutineStrings.reduce((domainRoutines, routineString) => {
        domainRoutines[routineString] = crudOps.reduce((entityRoutines, crudOp) => {
            entityRoutines[crudOp] = createRoutine(
                `${routineString}/${crudOp}`,
                (payload) => payload,
                (payload, meta) => meta
            );
            return entityRoutines
        }, {});
        return domainRoutines
    }, {})

};

export default createRoutinesPerEntity(Object.values(domainConfigs).map(e => e.routineString))
