import { CREATE_NEW_POST, DELETE_POST, GET_SINGLE_POST, GET_USER_POST, LIKE_POST, REQ_USER_POST, SAVE_POST, UNLIKE_POST, UNSAVE_POST } from "./ActionType";

const POST_BASE_API = "http://localhost:4000/api/posts";

export const createPostAction = (data) => async(dispatch) => {
    
    try {
        const res = await fetch(`${POST_BASE_API}/create`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                Authorizaiton: "Bearer " + data.jwt
            },
            body: JSON.stringify(data.data),
        })
    
        const post = await res.json();
        console.log("created post :", post);
        dispatch({type:CREATE_NEW_POST, payload:post});
    } catch (error) {
        console.log("catch error :", error);
    }

}

export const findUserPostAction = (data) => async(dispatch) => {
    
    try {
        const res = await fetch(`${POST_BASE_API}/following/${data.userIds}`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                Authorizaiton: "Bearer " + data.jwt
            },
        })
    
        const posts = await res.json();

        console.log("find posts by user ids", posts);

        dispatch({type:GET_USER_POST, payload:posts});
    } catch (error) {
        console.log("catch error :", error);
    }

}

export const reqUserPostAction = (data) => async(dispatch) => {
    
    try {
        const res = await fetch(`${POST_BASE_API}/following/${data.userId}`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                Authorizaiton: "Bearer " + data.jwt
            },
        })
    
        const posts = await res.json();

        console.log("req user post", posts);

        dispatch({type:REQ_USER_POST, payload:posts});
    } catch (error) {
        console.log("catch error :", error);
    }

}

export const likeUserPostAction = (data) => async(dispatch) => {
    
    try {
        const res = await fetch(`${POST_BASE_API}/like/${data.postId}`,{
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
                Authorizaiton: "Bearer " + data.jwt
            },
        })
    
        const post = await res.json();

        console.log("like post", post);

        dispatch({type:LIKE_POST, payload:post});
    } catch (error) {
        console.log("catch error :", error);
    }

}

export const unLikeUserPostAction = (data) => async(dispatch) => {
    
    try {
        const res = await fetch(`${POST_BASE_API}/unlike/${data.postId}`,{
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
                Authorizaiton: "Bearer " + data.jwt
            },
        })
    
        const post = await res.json();

        console.log("unLike post", post);

        dispatch({type:UNLIKE_POST, payload:post});
    } catch (error) {
        console.log("catch error :", error);
    }

}

export const saveUserPostAction = (data) => async(dispatch) => {
    
    try {
        const res = await fetch(`${POST_BASE_API}/save_post/${data.postId}`,{
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
                Authorizaiton: "Bearer " + data.jwt
            },
        })
    
        const post = await res.json();

        console.log("saved post", post);

        dispatch({type:SAVE_POST, payload:post});
    } catch (error) {
        console.log("catch error :", error);
    }

}

export const unSaveUserPostAction = (data) => async(dispatch) => {
    
    try {
        const res = await fetch(`${POST_BASE_API}/unsave_post/${data.postId}`,{
            method:"PUT",
            headers: {
                "Content-Type": "application/json",
                Authorizaiton: "Bearer " + data.jwt
            },
        })
    
        const post = await res.json();

        console.log("unsaved post", post);

        dispatch({type:UNSAVE_POST, payload:post});
    } catch (error) {
        console.log("catch error :", error);
    }

}

export const findPostbyIdAction = (data) => async(dispatch) => {
    
    try {
        const res = await fetch(`${POST_BASE_API}/${data.postId}`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                Authorizaiton: "Bearer " + data.jwt
            },
        })
    
        const post = await res.json();

        console.log("Get Single post", post);

        dispatch({type:GET_SINGLE_POST, payload:post});
    } catch (error) {
        console.log("catch error :", error);
    }

}

export const deletePostAction = (data) => async(dispatch) => {
    
    try {
        const res = await fetch(`${POST_BASE_API}/delete/${data.postId}`,{
            method:"DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorizaiton: "Bearer " + data.jwt
            },
        })
    
        const post = await res.json();

        console.log("Delete post", post);

        dispatch({type:DELETE_POST, payload:post});
    } catch (error) {
        console.log("catch error :", error);
    }

}