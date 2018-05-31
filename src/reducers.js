import { CHANGE_ADD_FIELD } from './constants';


const initialState = {
    addField: '',
};

export const addItem = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_ADD_FIELD:
            return {...state, addField: action.payload }
        default:
            return state;
    }
};

