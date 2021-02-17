import { GET_SMURF, GET_SMURF_SUCCESS, GET_SMURF_ERROR, POST_SMURF, POST_SMURF_SUCCESS, POST_SMURF_ERROR } from '../actions';

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SMURF: 
        return { 
            smurfs: "LOADING"
            //does this need to be an array?
        }
        case GET_SMURF_SUCCESS:
        return {
            ...state, 
            smurfs: action.payload
            //payload should be the initial or current list of smurfs
        }
        case GET_SMURF_ERROR:
        return {
            smurfs: action.payload
            //this should be an error message inside the payload
        }
        case POST_SMURF:
        return {
            smurfs: "SENDING"
            //Submit button sending payload object to the array
            //does this need to be an array?
        }
        case POST_SMURF_SUCCESS:
        return {
            ...state,
            smurfs: action.payload
            //State should be filled array and payload should be newSmurf object
            //Spread state with adding newSmurf object to the array.
        }
        case POST_SMURF_ERROR:
        return {
            smurfs: action.payload
            //this should be an error message inside payload
        }
    }
    
}

export default reducer;