import {
    getAllEntities, getEntitiesWithIds, getSelectedProjectId, getSelectedUserId,
    getUsersWithoutRole
} from "./selectors"

const state = {
    projects: {
        entities: {
            projects: {
                '1': {
                    id: 1,
                    name: 'Trip to space'
                },
                '2': {
                    id: 2,
                    name: 'Assembly Ikea furniture'
                },
                '3': {
                    id: 3,
                    name: 'Datumize Zentral'
                }
            }
        },
        result: [
            1,
            2,
            3
        ],
        loading: false
    },
    users: {
        entities: {
            users: {
                '1': {
                    id: 1,
                    name: 'John Doe'
                },
                '2': {
                    id: 2,
                    name: 'Alice'
                },
                '3': {
                    id: 3,
                    name: 'Bob'
                }
            }
        },
        result: [
            1,
            2,
            3
        ],
        loading: false
    },
    roles: {
        entities: {
            roles: {
                '1': {
                    id: 1,
                    name: 'Admin'
                },
                '2': {
                    id: 2,
                    name: 'Editor'
                },
                '3': {
                    id: 3,
                    name: 'Viewer'
                }
            }
        },
        result: [
            1,
            2,
            3
        ],
        loading: false
    },
    projectUserRoles: {
        entities: {
            projects: {
                '1': {
                    id: 1,
                    name: 'Trip to space'
                }
            },
            users: {
                '1': {
                    id: 1,
                    name: 'John Doe'
                },
                '2': {
                    id: 2,
                    name: 'Alice'
                }
            },
            roles: {
                '1': {
                    id: 1,
                    name: 'Admin'
                },
                '2': {
                    id: 2,
                    name: 'Editor'
                }
            },
            projectUserRoles: {
                '111': {
                    id: 111,
                    project: 1,
                    user: 1,
                    role: 1
                },
                '122': {
                    id: 122,
                    project: 1,
                    user: 2,
                    role: 2
                }
            }
        },
        result: [
            111,
            122
        ],
        loading: false
    },
    form: {
        userPicker: {
            fields: {
                user: {
                    visited: true,
                    touched: true
                }
            },
            values: {
                user: {
                    id: 3,
                    name: 'Bob'
                }
            },
            anyTouched: true
        },
        projectPicker: {
            registeredFields: {
                project: {
                    name: 'project',
                    type: 'Field',
                    count: 1
                }
            },
            fields: {
                project: {
                    visited: true,
                    touched: true
                }
            },
            values: {
                project: {
                    id: 1,
                    name: 'Trip to space'
                }
            },
            anyTouched: true
        }
    }
}

describe('getAllEntities', () => {
    it("should get all role entities", () => {
        expect(getAllEntities(state, "roles").map(role => role.id)).toEqual([1, 2, 3]);
    });

    it("should get role entities with ids from given list", () => {
        expect(getEntitiesWithIds(state, "roles", [1, 3]).map(role => role.id)).toEqual([1, 3]);
    });

    it("should get id of selected project", () => {
        expect(getSelectedProjectId(state)).toEqual(1);
    });

    it("should get id of selected user", () => {
        expect(getSelectedUserId(state)).toEqual(3);
    });

    it("should all users that don't have a relation with a role and project", () => {
        expect(getUsersWithoutRole(state)).toEqual(getEntitiesWithIds(state, "users", [3]));
    })
});
