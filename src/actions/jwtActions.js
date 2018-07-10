import {
    USER_LOGGED_IN,
    GET_TOKEN_ME,
    SET_USER_PROFILE,
} from '../constants';

export const getTokenMe = (token) => (dispatch) => {
    const token = sessionStorage.getItem('jwtToken')
    console.log(token);
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
    dispatch({ type: SET_USER_PROFILE, userProfile: userInfo });
    // return (dispatch, getState) => {
    //     // const peopleState = getState().peopleData.currentPeopleData;
    //     dispatch({ type: USER_LOGGED_IN, isUserLoggedIn: true });
    // }
};