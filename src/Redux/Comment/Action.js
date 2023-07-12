import {CREATE_COMMENT, GET_POST_COMMENT, LIKE_COMMENT, UNLIKE_COMMENT} from "./ActionType";

const COMMENT_BASE_API = "http://localhost:4000/api/comments";

export const createCommentAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${COMMENT_BASE_API}/create/${data.postId}`, {
            method: "POST",
            headers: {
                "Cotent-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            },
            body: JSON.stringify(data.data)
        })

        const comment = await res.json();
        console.log("Create comment : ", comment);

        dispatch({type: CREATE_COMMENT, payload: comment});
    } catch (error) {
        console.log("catch error ", error);
    }
}

export const findPostCommentAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${COMMENT_BASE_API}/${data.postId}`, {
            method: "GET",
            headers: {
                "Cotent-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            },
            body: JSON.stringify(data.data)
        })

        const comment = await res.json();
        console.log("find Post comment : ", comment);

        dispatch({type: GET_POST_COMMENT, payload: comment});
    } catch (error) {
        console.log("catch error ", error);
    }
}

export const likeCommentAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${COMMENT_BASE_API}/like/${data.commentId}`, {
            method: "PUT",
            headers: {
                "Cotent-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            },
            body: JSON.stringify(data.data)
        })

        const comment = await res.json();
        console.log("like comment : ", comment);

        dispatch({type: LIKE_COMMENT, payload: comment});
    } catch (error) {
        console.log("catch error ", error);
    }
}

export const unLikeCommentAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${COMMENT_BASE_API}/unlike/${data.commentId}`, {
            method: "PUT",
            headers: {
                "Cotent-Type": "application/json",
                Authorization: "Bearer " + data.jwt
            },
            body: JSON.stringify(data.data)
        })

        const comment = await res.json();
        console.log("unLike comment : ", comment);

        dispatch({type: UNLIKE_COMMENT, payload: comment});
    } catch (error) {
        console.log("catch error ", error);
    }
}