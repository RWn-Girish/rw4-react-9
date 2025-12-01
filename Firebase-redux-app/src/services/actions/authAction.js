import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../config/firebase.config";

const loading = () => {
    return {
        type: "LOADING"
    }
};

const errorMsg = (msg) => {
    return {
        type: "ERROR_MSG",
        payload: msg
    }
}

const signUpSuc = () => {
    return {
        type: "SIGNUP_SUC",
    }
}

const signInSuc = (user) => {
    return {
        type: "SIGNIN_SUC",
        payload: user
    }
}

const signOutSuc = () => {
    return {
        type: "SIGNOUT_SUC",
    }
}


export const signUpAsync = (data) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let res = await createUserWithEmailAndPassword(auth, data.email, data.password)
            await updateProfile(auth.currentUser, {
                displayName: data.name
            });
            dispatch(signUpSuc());
        } catch (error) {
            console.log(error);
            dispatch(errorMsg(error.message));
        }
    }
}

export const signInAsync = (data) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let res = await signInWithEmailAndPassword(auth, data.email, data.password)
            console.log(res.user);
            dispatch(signInSuc(res.user));
        } catch (error) {
            console.log(error);
            dispatch(errorMsg(error.message));
        }
    }
}

export const signOutAsync = () => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            await signOut(auth)
            dispatch(signOutSuc());
        } catch (error) {
            console.log(error);
            dispatch(errorMsg(error.message));
        }
    }
}