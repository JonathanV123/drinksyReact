import {
    REQUEST_PEOPLE_DATA_PENDING,
    REQUEST_PEOPLE_DATA_SUCCESS,
    REQUEST_PEOPLE_DATA_FAILED,
    ON_REMOVE_PERSON,
} from '../constants';

export const handlePeopleData = () => (dispatch) => {
    dispatch({ type: REQUEST_PEOPLE_DATA_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_PEOPLE_DATA_SUCCESS, payload: data }, ))
        .catch(error => dispatch({ type: REQUEST_PEOPLE_DATA_FAILED, payload: error }));
};

export const onPersonRemoval = (name) => {
    return (dispatch, getState) => {
        const peopleState = getState().peopleData.currentPeopleData;
        console.log(peopleState);
        dispatch({ type: ON_REMOVE_PERSON, currentPeopleData: peopleState, name: name });
    }
};


