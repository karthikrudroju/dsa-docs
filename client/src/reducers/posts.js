import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (initialState = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...initialState, action.payload];
        case UPDATE:
        case LIKE:
            return initialState.map((post) => post._id === action.payload._id ? action.payload : post);
        case DELETE:
            return initialState.filter((post) => post._id !== action.payload);
        default:
            return initialState;
    }
}