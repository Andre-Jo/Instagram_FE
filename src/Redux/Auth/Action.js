import { SIGN_IN, SIGN_UP } from "./ActionType";

const URL = "http://localhost:4000";

export const signinAction = (data) => async (dispatch) => {
    
    try {
        const res = await fetch(URL + "/signin", {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa(data.email + ":" + data.password)
            },
            // mode: "cors",
            // credentials: "include"
        })
        
        const token = res.headers.get("Authorization");
        localStorage.setItem("token", token);
        dispatch({ type: SIGN_IN, payload: token });
        
    } catch (e) {
        console.log(e);
    }
};

export const signupAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(URL + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const user = await res.json();
    dispatch({ type: SIGN_UP, payload: user });
  } catch (e) {
    console.log(e);
  }
};
