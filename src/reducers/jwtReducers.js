import {
    GET_TOKEN_ME,
    USER_LOGGED_IN
} from '../constants';



const initialIsLoggedIn = {
    isUserLoggedIn: false,
};

export const userIsLoggedIn = (state = initialIsLoggedIn, action = {}) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return Object.assign({}, state, { isUserLoggedIn: true });
        // case REQUEST_PEOPLE_DATA_FAILED:
        //     return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state
    }
}
const initialToken = {
    token: null,
};
export const tokenRetrieved = (state = initialToken, action = {}) => {
    switch (action.type) {
        case GET_TOKEN_ME:
            return Object.assign({}, state, { token: action.token });
        // case REQUEST_PEOPLE_DATA_FAILED:
        //     return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state
    }
}