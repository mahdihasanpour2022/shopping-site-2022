import {ProductsList} from "../../serivice_data/productsList.js";
import {products_save_in_local,categories_save_in_local} from "../../localStorage/localStorage.js";

const getProductsLoading = (data)=>{
  return {type:"GET_PRODUCTS_LOADING",payload:data}
}
const getProductsSuccess = (data)=>{
  return {type:"GET_PRODUCTS_SUCCESS",payload:data}
}
const getProductsFailed =(message)=>{
  return {type : "GET_PRODUCTS_FAILED",payload:message}
}
 const createCategory =(array)=>{
  return {type : "CREATE_CATEGORY",payload:array}
}
export const filterCategoty=(data)=>{
  return {type:"FILTER_CATEGORY" , payload :data}
}
export const removeFilteredProduct=()=>{
  return {type:"REMOVE_FILTER_CATEGORY"}
}
export const searchValue_AC=(data)=>{
  return {type:"SEARCH_IN_PRODUCTS",payload:data}
}

const fetchProducts =()=>{
  return  (dispatch)=>{
    try{
      dispatch(getProductsLoading(true))
      const productsData =  ProductsList;
      dispatch(getProductsLoading(false));
      dispatch(getProductsSuccess(productsData));
      products_save_in_local(productsData)
      let categories = productsData.map(item => item.Category)
      
      categories = [...new Set(categories)].sort();
      dispatch(createCategory(categories));
      categories_save_in_local(categories)

      dispatch(getProductsFailed(null));
    }catch(error){
      dispatch(getProductsLoading(false));
      dispatch(getProductsSuccess([]));
      dispatch(getProductsFailed(error.message));
    }
  }
}
export default fetchProducts;
