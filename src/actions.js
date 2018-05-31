import { CHANGE_ADD_FIELD } from './constants';

export const setAddField = (text) => ({
    type: CHANGE_ADD_FIELD,
    payload: text
});