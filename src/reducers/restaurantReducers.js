import {
    REQUEST_RESTAURANT_DATA_PENDING,
    REQUEST_RESTAURANT_DATA_SUCCESS,
    REQUEST_RESTAURANT_DATA_FAILED,
    ON_REMOVE_RESTAURANT,
    ON_EDIT_RESTAURANT,
} from '../constants';

const initialRestaurantDataBeforeFetch = {
    isPending: false,
    error: '',
};
export const restaurantDataFetch = (state = initialRestaurantDataBeforeFetch, action = {}) => {
    switch (action.type) {
        case REQUEST_RESTAURANT_DATA_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_RESTAURANT_DATA_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state
    }
}

const initialRestaurantData = {
    currentRestaurantData: [],
};
export const restaurantData = (state = initialRestaurantData, action = {}) => {
    switch (action.type) {
        case REQUEST_RESTAURANT_DATA_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_RESTAURANT_DATA_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        case REQUEST_RESTAURANT_DATA_SUCCESS:
            return Object.assign({}, state, { currentRestaurantData: action.payload.restaurants, isPending: false });
        case ON_REMOVE_RESTAURANT:
            let removeCopy = [...action.payload.currentRestaurantData]
            const result = removeCopy.filter(person => person.name !== action.payload.name);
            return Object.assign({}, state, { currentRestaurantData: result });
        case ON_EDIT_RESTAURANT:
            let editCopy = [...action.currentRestaurantData]
            const updatedPersonData = action.updatedPersonInfo;
            editCopy.forEach(person => {
                if (person.id === updatedPersonData.id) {
                    person.name = updatedPersonData.name
                    person.email = updatedPersonData.email
                }
            });
            return Object.assign({}, state, { currentRestaurantData: editCopy });
        default:
            return state
    }
};





