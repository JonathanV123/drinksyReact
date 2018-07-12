import {
    GET_TOKEN_ME,
    USER_LOGGED_IN,
    SET_USER_PROFILE,
    VERIFY_JSON_TOKEN,
    VERIFY_JSON_TOKEN_SUCCESS,
    VERIFY_JSON_TOKEN_PENDING,
    VERIFY_JSON_TOKEN_FAILED,
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
const tokenRet = {
    token: null,
};
export const tokenRetrieved = (state = tokenRet, action = {}) => {
    switch (action.type) {
        case GET_TOKEN_ME:
            return Object.assign({}, state, { token: action.token });
        // case REQUEST_PEOPLE_DATA_FAILED:
        //     return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state
    }
}

const initialProfile = {
    userId: null,
    userEmail: null,
};
export const userProfile = (state = initialProfile, action = {}) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return Object.assign({}, state, { userId: action.userProfile.user_id, userEmail: action.userProfile.user_email });
        // case REQUEST_PEOPLE_DATA_FAILED:
        //     return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state
    }
}

const initialToken = {
    isPending: false,
    token: null,
    user: {
        id: null,
        email: null,
    },
};
export const verifyJWT = (state = initialToken, action = {}) => {
    switch (action.type) {
        case VERIFY_JSON_TOKEN_PENDING:
            return Object.assign({}, state, { isPending: true });
        // case REQUEST_PEOPLE_DATA_FAILED:
        //     return Object.assign({}, state, { error: action.payload, isPending: false });
        case VERIFY_JSON_TOKEN_SUCCESS:
            return Object.assign({}, state, { token: action.payload.token, isPending: false, user: { id: action.payload.user.id, email: action.payload.user.email } });
        // case REQUEST_PEOPLE_DATA_FAILED:
        //     return Object.assign({}, state, { error: action.payload, isPending: false });
        case VERIFY_JSON_TOKEN_FAILED:
            return Object.assign({}, state, { error: action.payload });
        // case REQUEST_PEOPLE_DATA_FAILED:
        //     return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state
    }
}