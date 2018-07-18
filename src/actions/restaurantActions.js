import {
    REQUEST_RESTAURANT_DATA_PENDING,
    REQUEST_RESTAURANT_DATA_SUCCESS,
    REQUEST_RESTAURANT_DATA_FAILED,
    ON_REMOVE_RESTAURANT_DATA_PENDING,
    ON_REMOVE_RESTAURANT_SUCCESS,
    ON_REMOVE_RESTAURANT_DATA_FAILED,
    ON_EDIT_RESTAURANT_PENDING,
    ON_EDIT_RESTAURANT_SUCCESS,
    ON_EDIT_RESTAURANT_FAILED,
    ON_FETCH_RESTAURANT_BY_ID_PENDING,
    ON_FETCH_RESTAURANT_BY_ID_SUCCESS,
    ON_FETCH_RESTAURANT_BY_ID_FAILED,
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

export const onRestaurantEdit = (restaurantId, title, description, drinks) => (dispatch) => {
    const token = sessionStorage.getItem('jwtToken');
    dispatch({ type: ON_EDIT_RESTAURANT_PENDING });
    axios({
        method: 'patch',
        url: `http://localhost:8080/updateRestaurant/${restaurantId}`,
        headers: { 'Authorization': "bearer " + token },
        data: {
            title: title,
            description: description,
            drinks: drinks
        }
    })
        .then(response => dispatch({ type: ON_EDIT_RESTAURANT_SUCCESS, payload: response.data }))
        .catch(error => dispatch({ type: ON_EDIT_RESTAURANT_FAILED, payload: error }));

};

export const fetchRestaurantById = (restaurantId) => (dispatch) => {
    const token = sessionStorage.getItem('jwtToken');
    dispatch({ type: ON_FETCH_RESTAURANT_BY_ID_PENDING });
    axios({
        method: 'get',
        url: `http://localhost:8080/restaurant/${restaurantId}`,
        headers: { 'Authorization': "bearer " + token },
    })
        .then(response => dispatch({ type: ON_FETCH_RESTAURANT_BY_ID_SUCCESS, payload: response.data, restaurantId: restaurantId }))
        .catch(error => dispatch({ type: ON_FETCH_RESTAURANT_BY_ID_FAILED, payload: error }));
};





