import axios from 'axios'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { db } from '../../config/firebase.config'

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
    return async(dispatch) => {
        dispatch(loading())
    try {
        let records = [];
        let res = await getDocs(collection(db, 'products'));
        res.forEach(rec => {
            records.push({
                ...rec.data(), id: rec.id
            })
        })


        dispatch(getAllProducts(records)) 
    } catch (error) {
        console.log(error);
        dispatch(errMsg(error.message))
    }
    }
}

export const addProductAsync = (data) => {
    return async(dispatch) => {
        dispatch(loading())
       try {
        // await addDoc(collection(db, 'products'), data)  // automatic ID Generate
        await setDoc(doc(db, 'products', `${data.id}`), data);  // manually ID Generate
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
        await deleteDoc(doc(db, "products", `${id}`));
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
        let res = await getDoc(doc(db, 'products', `${id}`));
        dispatch(getProduct({...res.data(), id: res.id}));
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
        // let res = await axios.put(`http://localhost:3000/products/${data.id}`, data)
        dispatch(updateProduct());
       } catch (error) {
        console.log(error);
        dispatch(errMsg(error.message))
       }
    }
}