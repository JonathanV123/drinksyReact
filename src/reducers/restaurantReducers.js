import {
    REQUEST_RESTAURANT_DATA_PENDING,
    REQUEST_RESTAURANT_DATA_SUCCESS,
    REQUEST_RESTAURANT_DATA_FAILED,
    ON_REMOVE_RESTAURANT_DATA_PENDING,
    ON_REMOVE_RESTAURANT_SUCCESS,
    ON_REMOVE_RESTAURANT_DATA_FAILED,
} from '../constants';

// const initialRestaurantDataBeforeFetch = {
//     isPending: false,
//     error: '',
// };
// export const restaurantDataFetch = (state = initialRestaurantDataBeforeFetch, action = {}) => {
//     switch (action.type) {
//         case REQUEST_RESTAURANT_DATA_PENDING:
//             return Object.assign({}, state, { isPending: true });
//         case REQUEST_RESTAURANT_DATA_FAILED:
//             return Object.assign({}, state, { error: action.payload, isPending: false });
//         default:
//             return state
//     }
// }

const initialRestaurantData = {
    currentRestaurantData: [],
    isPending: null,
    error: null,
    removalPending: false,
    notification: null,
};
export const restaurantData = (state = initialRestaurantData, action = {}) => {
    switch (action.type) {
        case REQUEST_RESTAURANT_DATA_PENDING:
            return Object.assign({}, state, { isPending: true });
        case REQUEST_RESTAURANT_DATA_SUCCESS:
            return Object.assign({}, state, { currentRestaurantData: action.payload.restaurants, isPending: false })
        case REQUEST_RESTAURANT_DATA_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        case ON_REMOVE_RESTAURANT_DATA_PENDING:
            console.log('ON REMOVE RESTAURANT PENDING');
            return Object.assign({}, state, { removalPending: true });
        case ON_REMOVE_RESTAURANT_SUCCESS:
            console.log('ON_REMOVE_RESTAURANT_SUCCESS');
            let restaurantDataCopy = [...action.restaurantData]
            const result = restaurantDataCopy.filter(restaurant => restaurant.id !== action.userId);
            return Object.assign({}, state, { currentRestaurantData: result });
        case ON_REMOVE_RESTAURANT_DATA_FAILED:
            return Object.assign({}, state, { error: action.payload, removalPending: false, notification: action.payload.response.data });
        // case ON_EDIT_RESTAURANT:
        //     let editCopy = [...action.currentRestaurantData]
        //     const updatedPersonData = action.updatedPersonInfo;
        //     editCopy.forEach(person => {
        //         if (person.id === updatedPersonData.id) {
        //             person.name = updatedPersonData.name
        //             person.email = updatedPersonData.email
        //         }
        //     });
        //     return Object.assign({}, state, { currentRestaurantData: editCopy });
        default:
            return state
    }
};





