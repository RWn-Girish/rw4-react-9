const intialState = {
    products: JSON.parse(localStorage.getItem('products')) || [],
    product: null,
    isLoading: false
}


export const productReducer = (state = intialState, action) => {
    switch(action.type){
        case "LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "ADD_PRODUCT":
            let data = JSON.parse(localStorage.getItem('products')) || []
            data.push(action.payload)
            localStorage.setItem('products', JSON.stringify(data));
        return {
            ...state,
            products: [...state.products, action.payload]
        }
        case "GET_ALL_PRODUCT":
            let getAllData = JSON.parse(localStorage.getItem('products')) || []
        return {
            ...state,
            products: getAllData,
            isLoading: false
        }
        case "DELETE_PRODUCT":
            let Data = JSON.parse(localStorage.getItem('products')) || [];
            let deleteData = Data.filter(prod => prod.id != action.payload)
            localStorage.setItem('products', JSON.stringify(deleteData));
            return {
                ...state,
                products: deleteData
            }
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