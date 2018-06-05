import {
    CHANGE_ADD_FIELD,
    // ON_FORM_SUBMIT,
    REQUEST_DUMMY_DATA_PENDING,
    REQUEST_DUMMY_DATA_SUCCESS,
    REQUEST_DUMMY_DATA_FAILED,
} from './constants';

const initialStateAddItem = {
    addField: '',
};

export const addItem = (state = initialStateAddItem, action = {}) => {
    switch (action.type) {
        case CHANGE_ADD_FIELD:
            return { ...state, addField: action.payload }
        default:
            return state;
    }
};

const initialStateRequestDummyData = {
    isPending: false,
    people: [],
    error: '',
};
export const requestDummyData = (state = initialStateRequestDummyData, action = {}) => {
    switch (action.type) {
        case REQUEST_DUMMY_DATA_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_DUMMY_DATA_SUCCESS:
            return Object.assign({}, state, { people: action.payload, isPending: false });
        case REQUEST_DUMMY_DATA_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state;
    }
}

