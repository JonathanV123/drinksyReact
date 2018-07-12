import {
    USER_LOGGED_IN,
    GET_TOKEN_ME,
    SET_USER_PROFILE,
    VERIFY_JSON_TOKEN,
    VERIFY_JSON_TOKEN_SUCCESS,
    VERIFY_JSON_TOKEN_FAILED,
    VERIFY_JSON_TOKEN_PENDING,
} from '../constants';
import axios from 'axios';

export const getTokenMe = (token) => (dispatch) => {
    const token = sessionStorage.getItem('jwtToken')
    dispatch({ type: GET_TOKEN_ME, token: token });
};

export const userHasLoggedIn = () => (dispatch) => {
    dispatch({ type: USER_LOGGED_IN, isUserLoggedIn: true });
    // return (dispatch, getState) => {
    //     // const peopleState = getState().peopleData.currentPeopleData;
    //     dispatch({ type: USER_LOGGED_IN, isUserLoggedIn: true });
    // }
};

export const setUserProfile = (userInfo) => (dispatch) => {
    dispatch({ type: SET_USER_PROFILE, userProfile: { user_id: userInfo.user_id, user_email: userInfo.user_id } });
    // return (dispatch, getState) => {
    //     // const peopleState = getState().peopleData.currentPeopleData;
    //     dispatch({ type: USER_LOGGED_IN, isUserLoggedIn: true });
    // }
};

export const verifyToken = (token) => (dispatch) => {
    console.log(token);
    dispatch({ type: VERIFY_JSON_TOKEN_PENDING });
    axios({
        method: 'post',
        url: 'http://localhost:8080/verifyToken',
        // headers: { 'Authorization': "bearer " + token },
        data: {
            token: token,
        }
    }).then((response) => {
        dispatch({ type: VERIFY_JSON_TOKEN_SUCCESS, payload: response.data })
    }).catch((err) => {
        dispatch({ type: VERIFY_JSON_TOKEN_FAILED, payload: err.response })
    })
};

