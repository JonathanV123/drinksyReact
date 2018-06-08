import {
    REQUEST_PEOPLE_DATA_PENDING,
    REQUEST_PEOPLE_DATA_SUCCESS,
    REQUEST_PEOPLE_DATA_FAILED,
    ON_REMOVE_PERSON,
    PEOPLE_USER_INTERFACE_UPDATE,
} from '../constants';

// ************************************** People Data Manipulation Reducers

const initialPeopleState = {
    isPending: false,
    currentPeopleData: [],
    error: '',
};
export const peopleData = (state = initialPeopleState, action = {}) => {
    switch (action.type) {
        case REQUEST_PEOPLE_DATA_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_PEOPLE_DATA_SUCCESS:
            return Object.assign({}, state, { currentPeopleData: action.payload, isPending: false });
        case REQUEST_PEOPLE_DATA_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
            return state;
        case ON_REMOVE_PERSON:
            const copy = [...action.currentPeopleData]
            const result = copy.filter(person => person.name !== action.name);
            return Object.assign({}, state, { currentPeopleData: result });
        default:
            return state
    }
}

// *************************************** User Interface Reducers

export const peopleButtonInformation = (state = {}, action = {}) => {
    switch (action.type) {
        case PEOPLE_USER_INTERFACE_UPDATE:
            return Object.assign({}, state, { buttonTextDescription: action.buttonDescription });
        default:
            return state;
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

// const initialStateRemovePerson = {
//     name: ''
// };
// export const handleRemovePerson = (state = initialStateRemovePerson, action = {}) => {
//     switch (action.type) {
//         case ON_REMOVE_PERSON:
//             console.log(action)
//             const copy = [...action.people]
//             const result = copy.filter(person => person.name !== action.name);
//             return Object.assign({}, state, { peopleData: result });
//         default:
//             return state;
//     }
// }

