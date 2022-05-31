export const addToCart_AC=(data)=>{
  return{type:"ADD_TO_CART",payload:data}
}
export const increaseProductInCart_AC=(data)=>{
  return{type:"INCREASE_PRODUCT_IN_CART",payload:data}
}
export const decreaseProductInCart_AC=(data)=>{
  return{type:"DECREASE_PRODUCT_IN_CART",payload:data}
}
export const removeProduct_AC=(data)=>{
  return{type:"REMOVE_PRODUCT_FROM_CART",payload:data}
}
export const clearCart_AC=()=>{
  return{type:"CLEAR_CART"}
}
export const checkOut_AC=()=>{
  return{type:"CHECKOUT_CART"}
}
export const calculate_AC=()=>{
  return{type:"CALCULATE_CART"}
}
export const shopCartMenu_AC=(data)=>{
  return{type:"SHOP_CART_MENU",payload:data}
}
