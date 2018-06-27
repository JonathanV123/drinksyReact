import {
    REQUEST_PEOPLE_DATA_PENDING,
    REQUEST_PEOPLE_DATA_SUCCESS,
    REQUEST_PEOPLE_DATA_FAILED,
    ON_REMOVE_PERSON,
    ON_EDIT_PERSON,
} from '../constants';

// ************************************** People Data Manipulation Reducers

const peopleDataBeforeFetch = {
    isPending: false,
    error: '',
};
export const peopleDataFetch = (state = peopleDataBeforeFetch, action = {}) => {
    switch (action.type) {
        case REQUEST_PEOPLE_DATA_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_PEOPLE_DATA_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state
    }
}

const initialPeopleState = {
    currentPeopleData: [],
};
export const peopleData = (state = initialPeopleState, action = {}) => {
    switch (action.type) {
        case REQUEST_PEOPLE_DATA_SUCCESS:
            return Object.assign({}, state, { currentPeopleData: action.payload, isPending: false });
        case ON_REMOVE_PERSON:
            let removeCopy = [...action.payload.currentPeopleData]
            const result = removeCopy.filter(person => person.name !== action.payload.name);
            return Object.assign({}, state, { currentPeopleData: result });
        case ON_EDIT_PERSON:
            let editCopy = [...action.currentPeopleData]
            const updatedPersonData = action.updatedPersonInfo;
            editCopy.forEach(person => {
                if (person.id === updatedPersonData.id) {
                    person.name = updatedPersonData.name
                    person.email = updatedPersonData.email
                }
            });
            console.log(editCopy)
            return Object.assign({}, state, { currentPeopleData: editCopy });
        default:
            return state
    }
};





