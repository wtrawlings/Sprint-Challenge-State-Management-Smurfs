//How do I get newSmurf to payload?

//make a basic constant with a string inside it
//then have that return your TYPE and PAYLOAD
import axios from 'axios';

export const GET_SMURF = "GET_SMURF";//loading smurf list
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_ERROR = "GET_SMURF_ERROR";

export const getSmurfControl = () => {
    const promise = axios.get('http://localhost:3333/smurfs');
    return dispatch => {
        dispatch({type: GET_SMURF});
        promise
            .then(response => {
                console.log(response);
                dispatch({type: GET_SMURF_SUCCESS, payload: response.data});
            })
            .catch(error => {
                console.log(error);
                dispatch({type: GET_SMURF_ERROR, payload: error});
            });
    };
};

export const POST_SMURF = "POST_SMURF";//send data to api/database
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_ERROR = "POST_SMURF_ERROR";

export const postSmurfControl = () => {
    const promise = axios.post('http://localhost:3333/smurfs');
    return dispatch => {
        dispatch({type: POST_SMURF});
        promise
            .then(response => {
                console.log(response);
                dispatch({type: POST_SMURF_SUCCESS, payload: newSmurf});
            })
            .catch(error => {
                console.log(error);
                dispatch({type: POST_SMURF_ERROR, payload: error});
            });
    }
}
