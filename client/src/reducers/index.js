/*
    In React, reducers are functions that help manage state changes in applications, 
    especially when using a library like Redux or React’s useReducer hook. A reducer 
    is a pure function that takes the current state and an action, then returns a new state 
    based on that action.
*/
import { combineReducers } from "redux";
import authReducer from "./authReducer";

export default combineReducers({
    auth: authReducer
});