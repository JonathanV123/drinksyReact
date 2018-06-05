import {
    CHANGE_ADD_FIELD,
    // ON_FORM_SUBMIT,
    REQUEST_DUMMY_DATA_PENDING,
    REQUEST_DUMMY_DATA_SUCCESS,
    REQUEST_DUMMY_DATA_FAILED,
} from './constants';

export const setAddField = (text) => {
    return {
        type: CHANGE_ADD_FIELD,
        payload: text
    }
};

export const requestDummyData = () => (dispatch) => {
    dispatch({ type: REQUEST_DUMMY_DATA_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({type: REQUEST_DUMMY_DATA_SUCCESS, payload: data}))
        .catch(error => dispatch({type: REQUEST_DUMMY_DATA_FAILED, payload: error}));
};
