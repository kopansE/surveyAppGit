import axios, { Axios } from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
    return (dispatch)=>{
    axios.get('/api/current_user')
    .then(res => dispatch({type:FETCH_USER, payload: res}));
    };
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