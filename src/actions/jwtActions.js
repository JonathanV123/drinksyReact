import {
    USER_LOGGED_IN,
    GET_TOKEN_ME,
    SET_USER_PROFILE,
} from '../constants';

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