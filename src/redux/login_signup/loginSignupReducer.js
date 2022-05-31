import {notify} from "../../helper_function/toastify";

const inintialLoginSignupState = {
  navbarmenu: false,
  login: localStorage.getItem("userLoginData") ? JSON.parse(localStorage.getItem("userLoginData")) : false,
  signup: localStorage.getItem("userSignupData") ? JSON.parse(localStorage.getItem("userSignupData")) : false,
  Signupform: false,
  Loginform: false,
}
const loginSignupReducer = (state = inintialLoginSignupState, action) => {
  switch (action.type) {

    case "NAVBAR_MENU":
      return { ...state, navbarmenu: action.payload };

    case "SUCCESS_LOGIN":
      return { ...state, login: true };

      case "LOGOUT":
        notify("success" , "you are logout successfully");
        localStorage.removeItem("userLoginData");

        return { ...state, login: false };

    case "SUCCESS_SIGNUP":
      return { ...state, signup: true };

    case "SIGNUP_FORM":
      return { ...state, Signupform: action.payload };

    case "LOGIN_FORM":
      return { ...state, Loginform: action.payload };

    default:
      return state;
  }
}
export default loginSignupReducer;