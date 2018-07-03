import {
    USER_LOGGED_IN,
    GET_TOKEN_ME
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