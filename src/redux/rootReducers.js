import { combineReducers } from "redux";
// reducers 
import productsReducer from "./products/productsReducer";
import cartReducer from "./cart/cartReducer";
import loginSignupReducer from './login_signup/loginSignupReducer';

const rootReducers = combineReducers({
  productsState : productsReducer,
  cartState :cartReducer,
  loginSignupState : loginSignupReducer
})
export default rootReducers;


