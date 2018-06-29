import {
    USER_LOGGED_IN,
    NO_USER_LOGGED_IN
} from '../constants';

// export const handlePeopleData = () => (dispatch) => {
//     console.log("DISPATCHING HANDLE PEOPLE DATA ")
//     dispatch({ type: REQUEST_PEOPLE_DATA_PENDING });
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(data => dispatch({ type: REQUEST_PEOPLE_DATA_SUCCESS, payload: data }, ))
//         .catch(error => dispatch({ type: REQUEST_PEOPLE_DATA_FAILED, payload: error }));
// };

export const userHasLoggedIn = () => (dispatch) => {
    console.log("DISPATCHING userHasLoggedIn")
        dispatch({ type: USER_LOGGED_IN, isUserLoggedIn: true });

    // return (dispatch, getState) => {
    //     // const peopleState = getState().peopleData.currentPeopleData;
    //     dispatch({ type: USER_LOGGED_IN, isUserLoggedIn: true });
    // }
};