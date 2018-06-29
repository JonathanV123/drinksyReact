import {
    GET_TOKEN_ME,
    USER_LOGGED_IN
} from '../constants';



const initialIsLoggedIn = {
    isUserLoggedIn: false,
};

export const userIsLoggedIn = (state = initialIsLoggedIn, action = {}) => {
    console.log('REDUCEEEERRRRR')
    console.log(action.type);
    switch (action.type) {
        case USER_LOGGED_IN:
            return Object.assign({}, state, { isUserLoggedIn: true });
        // case REQUEST_PEOPLE_DATA_FAILED:
        //     return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state
    }
}