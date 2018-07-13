import {
    VERIFY_JSON_TOKEN_SUCCESS,
    VERIFY_JSON_TOKEN_PENDING,
    VERIFY_JSON_TOKEN_FAILED,
} from '../constants';


const initialToken = {
    isPending: false,
    token: null,
    user: {
        id: null,
        email: null,
        name: null,
    },
};
export const verifyJWT = (state = initialToken, action = {}) => {
    console.log(action.payload)
    switch (action.type) {
        case VERIFY_JSON_TOKEN_PENDING:
            return Object.assign({}, state, { isPending: true });
        case VERIFY_JSON_TOKEN_SUCCESS:
            return Object.assign({}, state, {
                token: action.payload.token, isPending: false,
                user: { id: action.payload.user.id, email: action.payload.user.email, name: action.payload.name }
            }
            );
        case VERIFY_JSON_TOKEN_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state
    }
}