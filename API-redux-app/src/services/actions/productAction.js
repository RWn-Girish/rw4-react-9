import axios from 'axios'

export const addProduct = () => {
    return {
        type: "ADD_PRODUCT",
    }
}

export const getAllProducts = (data) => {
    return {
        type: "GET_ALL_PRODUCT",
        payload: data
    }
}

// export const deleteProduct = (id) => {
//     return {
//         type: "DELETE_PRODUCT",
//         payload: id
//     }
// }

export const getProduct = (data) => {
    return {
        type: "GET_PRODUCT",
        payload: data
    }
}

export const updateProduct = () => {
    return {
        type: "UPDATE_PRODUCT",
    }
}

const loading = () => {
    return {
        type: "LOADING"
    }
}

const errMsg = (msg) => {
    return {
        type: "ERROR",
        payload: msg
    }
}


//middleware

export const getAllProductsAsync = () => {
    return (dispatch) => {
        dispatch(loading())
       fetch('http://localhost:3000/products')
       .then(res => res.json())
       .then(data => dispatch(getAllProducts(data)))
       .catch(err => dispatch(errMsg(err.message)));
    }
}

export const addProductAsync = (data) => {
    return async(dispatch) => {
        dispatch(loading())
       try {
        let res = await axios.post('http://localhost:3000/products', data)
        dispatch(addProduct());
       } catch (error) {
        console.log(error);
        dispatch(errMsg(error.message))
       }
    }
}

export const deleteProductAsync = (id) => {
    return async(dispatch) => {
        dispatch(loading())
       try {
        let res = await axios.delete(`http://localhost:3000/products/${id}`)
        dispatch(getAllProductsAsync());
       } catch (error) {
        console.log(error);
        dispatch(errMsg(error.message))
       }
    }
}

export const getProductAsync = (id) => {
    return async(dispatch) => {
        dispatch(loading())
       try {
        let res = await axios.get(`http://localhost:3000/products/${id}`)
        dispatch(getProduct(res.data));
       } catch (error) {
        console.log(error);
        dispatch(errMsg(error.message))
       }
    }
}

export const updateProductAsync = (data) => {
    return async(dispatch) => {
        dispatch(loading())
       try {
        let res = await axios.put(`http://localhost:3000/products/${data.id}`, data)
        dispatch(updateProduct());
       } catch (error) {
        console.log(error);
        dispatch(errMsg(error.message))
       }
    }
}