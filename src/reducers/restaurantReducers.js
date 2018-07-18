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
    isPending: false,
    restaurantLoaded: false,
    error: null,
    removalPending: false,
    editPending: false,
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
            return Object.assign({}, state, { restaurantLoaded: false });
        case ON_FETCH_RESTAURANT_BY_ID_SUCCESS:
            return Object.assign({}, state, { currentRestaurantById: action.payload.restaurant, restaurantLoaded: true })
        case ON_FETCH_RESTAURANT_BY_ID_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        // |||||||||||||||||||||||||||||||||| Request Restaurant Data By Id |||||||||||||||||||||||||||||||||||||||||||||||||||


        // |||||||||||||||||||||||||||||||||| Remove Restaurant Data ||||||||||||||||||||||||||||||||||||||||||||||||||||
        case ON_REMOVE_RESTAURANT_DATA_PENDING:
            return Object.assign({}, state, { removalPending: true });
        case ON_REMOVE_RESTAURANT_SUCCESS:
            let restaurantDataCopy = [...action.restaurantData]
            const result = restaurantDataCopy.filter(restaurant => restaurant.id !== action.userId);
            return Object.assign({}, state, { currentRestaurantData: result, removalPending: false });
        case ON_REMOVE_RESTAURANT_DATA_FAILED:
            return Object.assign({}, state, { error: action.payload, removalPending: false, notification: action.payload.response.data });
        // ||||||||||||||||||||||||||||||||||Remove Restaurant Data |||||||||||||||||||||||||||||||||||||||||||||||||||||




        // |||||||||||||||||||||||||||||||||| Edit Restaurant Data ||||||||||||||||||||||||||||||||||||||||||||||||||||||
        case ON_EDIT_RESTAURANT_PENDING:
            return Object.assign({}, state, { editPending: true });
        case ON_EDIT_RESTAURANT_SUCCESS:
            console.log(action);
            // const result = restaurantDataCopy.filter(restaurant => restaurant.id !== action.userId);
            return Object.assign({}, state, { currentRestaurantById: action.payload, editPending: true });
        case ON_EDIT_RESTAURANT_FAILED:
            return Object.assign({}, state, { error: action.payload, removalPending: false, notification: action.payload.response.data });
        // |||||||||||||||||||||||||||||||||| Edit Restaurant Data ||||||||||||||||||||||||||||||||||||||||||||||||||||||

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





