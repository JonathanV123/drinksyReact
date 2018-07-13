import {
    REQUEST_RESTAURANT_DATA_PENDING,
    REQUEST_RESTAURANT_DATA_SUCCESS,
    REQUEST_RESTAURANT_DATA_FAILED,
    ON_REMOVE_RESTAURANT_DATA_PENDING,
    ON_REMOVE_RESTAURANT_SUCCESS,
    ON_REMOVE_RESTAURANT_DATA_FAILED,
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

export const onRestaurantRemoval = (userId) => {
    const token = sessionStorage.getItem('jwtToken');
    return (dispatch, getState) => {
        console.log('running');
        dispatch({ type: ON_REMOVE_RESTAURANT_DATA_PENDING });
        const restaurantState = getState().restaurantData.currentRestaurantData;
        axios({
            method: 'delete',
            url: `http://localhost:8080/deleteRestaurant/${userId}`,
            headers: { 'Authorization': "bearer " + token },
        })
            .then(response => dispatch({ type: ON_REMOVE_RESTAURANT_SUCCESS, restaurantData: restaurantState, payload: response.data, userId: userId }, ))
            .catch(error => dispatch({ type: ON_REMOVE_RESTAURANT_DATA_FAILED, payload: error }));
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




