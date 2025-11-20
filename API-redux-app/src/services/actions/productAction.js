export const addProduct = (data) => {
    return {
        type: "ADD_PRODUCT",
        payload: data
    }
}

export const getAllProducts = (data) => {
    return {
        type: "GET_ALL_PRODUCT",
        payload: data
    }
}

export const deleteProduct = (id) => {
    return {
        type: "DELETE_PRODUCT",
        payload: id
    }
}

export const getProduct = (id) => {
    return {
        type: "GET_PRODUCT",
        payload: id
    }
}

export const updateProduct = (data) => {
    return {
        type: "UPDATE_PRODUCT",
        payload: data
    }
}

const loading = () => {
    return {
        type: "LOADING"
    }
}


//middleware

export const getAllProductsAsync = () => {
    return (dispatch) => {
        dispatch(loading())
       fetch('http://localhost:3000/products')
       .then(res => res.json())
       .then(data => dispatch(getAllProducts(data)))
       .catch(err => console.log(err));
    }
}

// export const addProductAsync = () => {
//     return (dispatch) => {
//         dispatch(loading())
//         setTimeout(()=> {
//             dispatch(getAllProducts())
//         }, 3000)
//     }
// }