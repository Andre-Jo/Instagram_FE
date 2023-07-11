import {REQ_USER} from './ActionType'
const URL = "http://localhost:4000/api";

export const getUserProfileAction =  (jwt) => async(dispatch) => {

    try {
        const res = await fetch(URL + "/users/req", {
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + jwt
            }
        })
    
        const reqUser = await res.json()
        dispatch({type: REQ_USER, payload: reqUser});
    } catch (error) {
        console.log("catch :", error);
    }

}