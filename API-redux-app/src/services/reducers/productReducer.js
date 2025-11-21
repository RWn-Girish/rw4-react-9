const intialState = {
    products: [],
    product: null,
    isLoading: false,
    isCreated: false,
    errorMsg: ""
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
            isCreated: false
        }
        // case "DELETE_PRODUCT":
        //     return {
        //         ...state,
        //         products: deleteData
        //     }
        case "GET_PRODUCT":
            let getData = JSON.parse(localStorage.getItem('products')) || [];
            let record = getData.find(prod => prod.id == action.payload)
            return {
                ...state,
                product: record
            }
        case "UPDATE_PRODUCT":
            let GetData = JSON.parse(localStorage.getItem('products')) || [];
            let updateData = GetData.map(prod => {
                if(prod.id == action.payload.id){
                    return action.payload
                }else{
                    return prod;
                }
            })
            localStorage.setItem('products', JSON.stringify(updateData));
            return {
                ...state,
                product: null,
                products:updateData
            }
        default:
            return state;
    }
}