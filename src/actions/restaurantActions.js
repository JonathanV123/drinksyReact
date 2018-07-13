import {
    REQUEST_RESTAURANT_DATA_PENDING,
    REQUEST_RESTAURANT_DATA_SUCCESS,
    REQUEST_RESTAURANT_DATA_FAILED,
    ON_REMOVE_RESTAURANT
} from '../constants';
import axios from 'axios';

export const handleRestaurantData = (userId) => (dispatch) => {
    const token = sessionStorage.getItem('jwtToken');
    dispatch({ type: REQUEST_RESTAURANT_DATA_PENDING });
    axios({
        method: 'get',
        url: `http://localhost:8080/home/${userId}`,
        headers: { 'Authorization': "bearer " + token },
    })
        .then(response => dispatch({ type: REQUEST_RESTAURANT_DATA_SUCCESS, payload: response.data }, ))
        .catch(error => dispatch({ type: REQUEST_RESTAURANT_DATA_FAILED, payload: error }));
};

export const onRestaurantRemoval = (id) => {
    return (dispatch, getState) => {
        const peopleState = getState().peopleData;
        const payload = Object.assign({}, peopleState, { updatedPeopleData: peopleState, name: id });
        console.log(payload);
        dispatch({ type: ON_REMOVE_RESTAURANT, payload });
    }
};


// export const onEditPeopleData = (person) => {
//     return (dispatch, getState) => {
//         const peopleState = getState().peopleData.currentPeopleData;
//         dispatch({ type: ON_EDIT_RESTAURANT, currentPeopleData: peopleState, updatedPersonInfo: person });
//     }
// };


// export const onEditPeopleData = (person) => {
//      return { type: ON_EDIT_PERSON, id: person.id, name: person.name, email: person.email }
// };




