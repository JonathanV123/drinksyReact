import {
    REQUEST_DUMMY_DATA_PENDING,
    REQUEST_DUMMY_DATA_SUCCESS,
    REQUEST_DUMMY_DATA_FAILED,
    ON_REMOVE_PERSON,
    UPDATE_PEOPLE_STORAGE,
} from './constants';

const initialPeopleState = {
    isPending: false,
    responseData: [],
    error: '',
};
export const requestPeopleData = (state = initialPeopleState, action = {}) => {
    switch (action.type) {
        case REQUEST_DUMMY_DATA_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_DUMMY_DATA_SUCCESS:
            return Object.assign({}, state, { responseData: action.payload, isPending: false });
        case REQUEST_DUMMY_DATA_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
            return state;
        default:
            return state
    }
}



const initialStateRemovePerson = {
    name: ''
};

export const handleRemovePerson = (state = initialStateRemovePerson, action = {}) => {
    switch (action.type) {
        case ON_REMOVE_PERSON:
        console.log(action)
            const copy = [...action.people]
            const result = copy.filter(person => person.name !== action.name);
            return Object.assign({}, state, { peopleData: result });
        default:
            return state;
    }
}

const initialStatePeopleStorage = {
    peopleData: [],
};

export const peopleStorage = (state = initialStatePeopleStorage, action = {}) => {
    switch (action.type) {
        case UPDATE_PEOPLE_STORAGE:
        console.log("PEOPLE STORAGE RUNNING YAY!");
        console.log(action);
            return Object.assign({}, state, { peopleData: action.payload });
        default:
            return state
    }
}

const rrr = 'test';
export const test = (state = 'test', action = {}) => {
    switch (action.type) {
        case test:
            // const copy = [...action.peopleArr]
            // const result = copy.filter(person => person.name !== action.name);
            return Object.assign({}, state, { people: rrr });
        default:
            return state;
    }
}

