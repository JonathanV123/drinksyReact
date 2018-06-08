import {
    CHANGE_ADD_FIELD,
    // ON_FORM_SUBMIT,
    REQUEST_DUMMY_DATA_PENDING,
    REQUEST_DUMMY_DATA_SUCCESS,
    REQUEST_DUMMY_DATA_FAILED,
    UPDATE_PEOPLE_STORAGE,
    ON_REMOVE_PERSON,
} from './constants';

export const setAddField = (text) => {
    return {
        type: CHANGE_ADD_FIELD,
        payload: text
    }
};

export const onRequestPeopleData = () => (dispatch) => {
    dispatch({ type: REQUEST_DUMMY_DATA_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data =>
            dispatch({ type: REQUEST_DUMMY_DATA_SUCCESS, payload: data },
            dispatch({ type: UPDATE_PEOPLE_STORAGE , payload: data }),
            ))
        .catch (error => dispatch({ type: REQUEST_DUMMY_DATA_FAILED, payload: error }));
};

export const onPersonRemoval = (name) => {
    // return {
    //     type: ON_REMOVE_PERSON,
    //     name: name,
    //     peopleArr: peopleArr
    // }
    return (dispatch, getState) => {
        const peopleState = getState().peopleStorage.peopleData;
        console.log(peopleState);
        dispatch({ type: ON_REMOVE_PERSON, people: peopleState, name: name });
    }
};

