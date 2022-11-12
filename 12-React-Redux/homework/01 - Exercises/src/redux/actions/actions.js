//Gestión lista de compras
//Funciones creadoras


import { ADD_PRODUCT, DELETE_PRODUCT} from "./types.js";

export const addProduct = (product)=>{
    return{
        type: ADD_PRODUCT,
        payload: product,
    }
};

// export const editProduct = ()=> {
//     return{
//         type: EDIT_PRODUCT
//     }
// };

export const deleteProduct =(id)=>{
    return {
        type: DELETE_PRODUCT,
        payload: id,
    }
}