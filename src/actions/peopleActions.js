import {
    REQUEST_PEOPLE_DATA_PENDING,
    REQUEST_PEOPLE_DATA_SUCCESS,
    REQUEST_PEOPLE_DATA_FAILED,
    ON_REMOVE_PERSON,
    ON_EDIT_PERSON,
} from '../constants';

export const handlePeopleData = () => (dispatch) => {
    console.log("DISPATCHING HANDLE PEOPLE DATA ")
    dispatch({ type: REQUEST_PEOPLE_DATA_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_PEOPLE_DATA_SUCCESS, payload: data }, ))
        .catch(error => dispatch({ type: REQUEST_PEOPLE_DATA_FAILED, payload: error }));
};

export const onPersonRemoval = (name) => {
    return (dispatch, getState) => {
        const peopleState = getState().peopleData;
        const payload = Object.assign({}, peopleState, { updatedPeopleData: peopleState, name: name });
        console.log(payload);
        dispatch({ type: ON_REMOVE_PERSON, payload });
    }
};


export const onEditPeopleData = (person) => {
    return (dispatch, getState) => {
        const peopleState = getState().peopleData.currentPeopleData;
        dispatch({ type: ON_EDIT_PERSON, currentPeopleData: peopleState, updatedPersonInfo: person });
    }
};


// export const onEditPeopleData = (person) => {
//      return { type: ON_EDIT_PERSON, id: person.id, name: person.name, email: person.email }
// };




