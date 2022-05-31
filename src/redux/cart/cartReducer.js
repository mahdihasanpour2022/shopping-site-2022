import { notify } from "../../helper_function/toastify";


import { cart_save_in_local,totalPrice_save_in_local,totalDiscount_save_in_local } from "../../localStorage/localStorage";

const initialCartState = {
  cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  shoppcartmenu: false,
  totalPrice: localStorage.getItem("totalPrice") ? JSON.parse(localStorage.getItem("totalPrice")) : 0,
  totalDiscount:localStorage.getItem("totalDiscount") ? JSON.parse(localStorage.getItem("totalDiscount")) : 0,
  checkOut: false,
}

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (!(state.cart.find(item => item.id === action.payload.id))) {
        state.cart.push({ ...action.payload, quantity: 1 })
        // state.cart = [...state.cart , {...action.payload , quantity : 1}]
      }
      cart_save_in_local(state.cart)
      return { ...state, cart: state.cart };
    case "INCREASE_PRODUCT_IN_CART":
      if (state.cart.find(product => product.id === action.payload.id)) {
        const increaseIntendedProduct = state.cart.find(item => item.id === action.payload.id);
        increaseIntendedProduct.quantity += 1;
      }
      cart_save_in_local(state.cart)
      return { ...state, cart: state.cart };
    case "DECREASE_PRODUCT_IN_CART":
      if (state.cart.find(product => product.id === action.payload.id)) {
        const decreaseIntendedProduct = state.cart.find(item => item.id === action.payload.id);
        decreaseIntendedProduct.quantity -= 1;
      }
      cart_save_in_local(state.cart)
      return { ...state, cart: state.cart };
    case "REMOVE_PRODUCT_FROM_CART":
      if (state.cart.find(product => product.id === action.payload.id)) {
        const newCart = state.cart.filter(item => item.id !== action.payload.id);
        state.cart = newCart;
      }
      cart_save_in_local(state.cart)
      return { ...state, cart: state.cart };
    case "CLEAR_CART":
      state.cart = [];
      cart_save_in_local(state.cart);
      notify("failed", "You emptied shopping cart")
      return { ...state, checkOut: false, cart: state.cart };
    // return { ...state, cart:[] };
    case "CHECKOUT_CART":
      state.cart = [];
      cart_save_in_local(state.cart)
      notify("success", "You checkOut successfuly")
      return { ...state, checkOut: true, cart: state.cart };
    case "CALCULATE_CART":
      const totalPriceCart = state.cart.reduce((total, item) => total + (item.Discounted_price * item.quantity), 0);
      const totalDiscounted = state.cart.reduce((total, item) => total + (item.real_price * item.quantity), 0) - totalPriceCart
      totalPrice_save_in_local(totalPriceCart);
      totalDiscount_save_in_local(totalDiscounted);
      return { ...state, totalPrice: totalPriceCart, totalDiscount: totalDiscounted };
    case "SHOP_CART_MENU":
      return { ...state, shoppcartmenu: action.payload };
    default:
      return state;
  }
}

export default cartReducer;