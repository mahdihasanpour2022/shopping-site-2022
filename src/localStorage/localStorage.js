export const products_save_in_local =(data)=>{
  localStorage.setItem("products",JSON.stringify(data))
}
export const categories_save_in_local =(data)=>{
  localStorage.setItem("categories",JSON.stringify(data))
}
export const cart_save_in_local =(data)=>{
  localStorage.setItem("cart",JSON.stringify(data))
}
export const blogs_save_in_local =(data)=>{
  localStorage.setItem("blogs",JSON.stringify(data))
}
export const totalPrice_save_in_local =(data)=>{
  localStorage.setItem("totalPrice",JSON.stringify(data))
}
export const totalDiscount_save_in_local =(data)=>{
  localStorage.setItem("totalDiscount",JSON.stringify(data))
}
export const user_signup_data_save_in_local =(data)=>{
  localStorage.setItem("userSignupData",JSON.stringify(data))
}
export const user_login_data_save_in_local =(data)=>{
  localStorage.setItem("userLoginData",JSON.stringify(data))
}