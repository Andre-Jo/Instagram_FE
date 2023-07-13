import {FOLLOW_USER, GET_USERS_BY_USER_IDS, GET_USER_BY_USERNAME, REQ_USER, SEARCH_USER, UNFOLLOW_USER, UPDATE_USER} from './ActionType'
const USER_BASE_API = "http://localhost:4000/api/users";

export const getUserProfileAction =  (jwt) => async(dispatch) => {

    try {
        const res = await fetch(`${USER_BASE_API}/req`, {
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + jwt
            }
        })
    
        const reqUser = await res.json();
        dispatch({type: REQ_USER, payload: reqUser});
    } catch (error) {
        console.log("catch :", error);
    }

}

export const findUserByUserNameAction = (data) => async (dispatch) => {
    
    const res = await fetch(`${USER_BASE_API}/username/${data.username}`, {
        method:"GET",
        headers: {
            "Content-Type": "application/json",
            Authorization : "Bearer" + data.jwt
        }
    });

    const user = await res.json();

    console.log("find by username: ", user);
    dispatch({type: GET_USER_BY_USERNAME, payload: user});

}

export const findUserByUserIdsAction = (data) => async (dispatch) => {
    
    const res = await fetch(`${USER_BASE_API}/m/${data.userIds}`, {
        method:"GET",
        headers: {
            "Content-Type": "application/json",
            Authorization : "Bearer" + data.jwt
        }
    });

    const users = await res.json();

    console.log("find by userIds: ", users);
    dispatch({type: GET_USERS_BY_USER_IDS, payload: users});

}

export const followUserAction = (data) => async (dispatch) => {
    
    const res = await fetch(`${USER_BASE_API}/follow/${data.userId}`, {
        method:"PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization : "Bearer" + data.jwt
        }
    });

    const user = await res.json();

    console.log("follow user: ", user);
    dispatch({type: FOLLOW_USER, payload: user});

}

export const unFollowUserAction = (data) => async (dispatch) => {
    
    const res = await fetch(`${USER_BASE_API}/unfollow/${data.userId}`, {
        method:"PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization : "Bearer" + data.jwt
        }
    });

    const user = await res.json();

    console.log("unFollow user: ", user);
    dispatch({type: UNFOLLOW_USER, payload: user});

}

export const searchUserAction = (data) => async (dispatch) => {
    
    try {
        const res = await fetch(`${USER_BASE_API}/search?q=${data.query}`, {
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                Authorization : "Bearer" + data.jwt
            }
        });
    
        const user = await res.json();
    
        console.log("search user: ", user);
        dispatch({type: SEARCH_USER, payload: user});

    } catch (error) {
        console.log("catch error :", error);
    }

}

export const editUserAction = (data) => async (dispatch) => {
    
    try {
        const res = await fetch(`${USER_BASE_API}/account/edit`, {
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization : "Bearer" + data.jwt
            },
            body: JSON.stringify(data.data)
        });
    
        const user = await res.json();
    
        console.log("update user: ", user);
        dispatch({type: UPDATE_USER, payload: user});

    } catch (error) {
        console.log("catch error :", error);
    }

}