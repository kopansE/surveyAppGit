import axios, { Axios } from "axios";
import { FETCH_USER, LOGOUT_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data || false });
};

export const logoutUser = () => async (dispatch) => {
  await axios.get("/api/logout");
  dispatch({ type: LOGOUT_USER }); // Re-fetch user to update auth status
};

/*
i added:
*******************************************************
    "proxy":{ 
        "/auth/google":{
            "target": "http://localhost:5000" 
        },
        "/api/*": {
            "target": "http://localhost:5000" 
        }
    }
*******************************************************
to package.json for redirecting purposes --> maybe not needed?      
*/
