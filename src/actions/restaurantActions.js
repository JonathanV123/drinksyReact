import {
    REQUEST_RESTAURANT_DATA_PENDING,
    REQUEST_RESTAURANT_DATA_SUCCESS,
    REQUEST_RESTAURANT_DATA_FAILED,
} from '../constants';

export const handleRestaurantData = () => (dispatch) => {
    console.log("DISPATCHING HANDLE PEOPLE DATA ")
    dispatch({ type: REQUEST_RESTAURANT_DATA_PENDING });
    fetch('http://localhost:8080/')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_RESTAURANT_DATA_SUCCESS, payload: data }, ))
        .catch(error => dispatch({ type: REQUEST_RESTAURANT_DATA_FAILED, payload: error }));
};

// export const onPersonRemoval = (name) => {
//     return (dispatch, getState) => {
//         const peopleState = getState().peopleData;
//         const payload = Object.assign({}, peopleState, { updatedPeopleData: peopleState, name: name });
//         console.log(payload);
//         dispatch({ type: ON_REMOVE_RESTAURANT, payload });
//     }
// };


// export const onEditPeopleData = (person) => {
//     return (dispatch, getState) => {
//         const peopleState = getState().peopleData.currentPeopleData;
//         dispatch({ type: ON_EDIT_RESTAURANT, currentPeopleData: peopleState, updatedPersonInfo: person });
//     }
// };


// export const onEditPeopleData = (person) => {
//      return { type: ON_EDIT_PERSON, id: person.id, name: person.name, email: person.email }
// };




