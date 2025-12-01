const initalState = {
    user: JSON.parse(localStorage.getItem("user"))|| null,
    errorMsg: "",
    isLoading: false,
    isCreated: false
}


export const authReducer = (state = initalState, action) => {
    switch(action.type)
    {
        case "LOADING":
            return {
                ...state,
                isLoading: true,
                isCreated: false
            };

        case "ERROR_MSG": 
        return {
            ...state,
            errorMsg: action.payload,
            isCreated: false
        }
        
        case "SIGNUP_SUC": 
        return {
            ...state,
            errorMsg: "",
            isCreated: true
        }

        case "SIGNIN_SUC":
            localStorage.setItem("user", JSON.stringify(action.payload))
            return {
                ...state,
                errorMsg: "",
                user: action.payload,
                isCreated: false
            }
        
        case "SIGNOUT_SUC":
            localStorage.removeItem("user")
            return {
                ...state,
                errorMsg: "",
                user: null,
                isCreated: false
            }
        default:
            return state;
    }
}