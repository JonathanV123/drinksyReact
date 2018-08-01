import {
    VERIFY_JSON_TOKEN_SUCCESS,
    VERIFY_JSON_TOKEN_FAILED,
    VERIFY_JSON_TOKEN_PENDING,
} from '../constants';
import axios from 'axios';


export const verifyToken = (token) => (dispatch) => {
    dispatch({ type: VERIFY_JSON_TOKEN_PENDING });
    axios({
        method: 'post',
        url: 'http://localhost:8080/verifyToken',
        data: {
            token: token,
        }
    }).then((response) => {
        dispatch({ type: VERIFY_JSON_TOKEN_SUCCESS, payload: response.data })
    }).catch((err) => {
        dispatch({ type: VERIFY_JSON_TOKEN_FAILED, payload: err.response })
    })
};

