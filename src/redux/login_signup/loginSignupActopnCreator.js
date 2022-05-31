export const navbarMenu_AC=(data)=>{
  return {type:"NAVBAR_MENU",payload:data}
}

export const successLogin_AC=()=>{
  return {type:"SUCCESS_LOGIN"}
}

export const successSignup_AC=()=>{
  return {type:"SUCCESS_SIGNUP"}
}

export const logout_AC=()=>{
  return {type:"LOGOUT"}
}

export const SignupForm_AC=(data)=>{
  return {type:"SIGNUP_FORM",payload:data}
}

export const LoginForm_AC=(data)=>{
  return {type:"LOGIN_FORM",payload:data}
}
