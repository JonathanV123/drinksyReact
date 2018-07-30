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

const initialRestaurantData = {
    currentRestaurantData: [],
    isPending: false,
    error: null,
    notification: null,
    currentRestaurantById: null,
};
export const restaurantData = (state = initialRestaurantData, action = {}) => {
    switch (action.type) {
        // |||||||||||||||||||||||||||||||||| Request Restaurant Data All |||||||||||||||||||||||||||||||||||||||||||||||||||
        case REQUEST_RESTAURANT_DATA_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_RESTAURANT_DATA_SUCCESS:
            return Object.assign({}, state, { currentRestaurantData: action.payload.restaurants, isPending: false })
        case REQUEST_RESTAURANT_DATA_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        // |||||||||||||||||||||||||||||||||| Request Restaurant Data All |||||||||||||||||||||||||||||||||||||||||||||||||||


        // |||||||||||||||||||||||||||||||||| Request Restaurant Data By Id |||||||||||||||||||||||||||||||||||||||||||||||||||
        case ON_FETCH_RESTAURANT_BY_ID_PENDING:
            return Object.assign({}, state, { isPending: true });
        case ON_FETCH_RESTAURANT_BY_ID_SUCCESS:
            return Object.assign({}, state, { currentRestaurantById: action.payload.restaurant, isPending: false })
        case ON_FETCH_RESTAURANT_BY_ID_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        // |||||||||||||||||||||||||||||||||| Request Restaurant Data By Id |||||||||||||||||||||||||||||||||||||||||||||||||||


        // |||||||||||||||||||||||||||||||||| Remove Restaurant Data ||||||||||||||||||||||||||||||||||||||||||||||||||||
        case ON_REMOVE_RESTAURANT_DATA_PENDING:
            return Object.assign({}, state, { isPending: true });
        case ON_REMOVE_RESTAURANT_SUCCESS:
            let restaurantDataCopy = [...action.restaurantData]
            const result = restaurantDataCopy.filter(restaurant => restaurant.id !== action.userId);
            return Object.assign({}, state, { currentRestaurantData: result, isPending: false });
        case ON_REMOVE_RESTAURANT_DATA_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false, notification: action.payload.response.data });
        // ||||||||||||||||||||||||||||||||||Remove Restaurant Data |||||||||||||||||||||||||||||||||||||||||||||||||||||




        // |||||||||||||||||||||||||||||||||| Edit Restaurant Data ||||||||||||||||||||||||||||||||||||||||||||||||||||||
        case ON_EDIT_RESTAURANT_PENDING:
            return Object.assign({}, state, { isPending: true });
        case ON_EDIT_RESTAURANT_SUCCESS:
            return Object.assign({}, state, { currentRestaurantById: action.payload, isPending: false });
        case ON_EDIT_RESTAURANT_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false, notification: action.payload.response.data });
        // |||||||||||||||||||||||||||||||||| Edit Restaurant Data ||||||||||||||||||||||||||||||||||||||||||||||||||||||
        default:
            return state
    }
};





