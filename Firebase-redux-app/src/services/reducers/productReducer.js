const intialState = {
    products: [],
    product: null,
    isLoading: false,
    isCreated: false,
    errorMsg: "",
    isUpdated: false
}


export const productReducer = (state = intialState, action) => {
    switch(action.type){
        case "LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "ERROR": 
        return {
            ...state,
            errorMsg: action.payload
        }
        case "ADD_PRODUCT":
        return {
            ...state,
            isCreated: true
        }
        case "GET_ALL_PRODUCT":
        return {
            ...state,
            products: action.payload,
            isLoading: false,
            errorMsg: "",
            isCreated: false,
            isUpdated: false
        }
        // case "DELETE_PRODUCT":
        //     return {
        //         ...state,
        //         products: deleteData
        //     }
        case "GET_PRODUCT":
            return {
                ...state,
                product: action.payload
            }
        case "UPDATE_PRODUCT":
            return {
                ...state,
                product: null,
                isUpdated: true
            }
        default:
            return state;
    }
}