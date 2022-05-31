import React, { useState, useEffect } from 'react';
// react-redux 
import { useDispatch, useSelector } from "react-redux";
// scss 
import Styles from "../assets/styles/components_styles/Login.module.scss";
// action reducer 
import { SignupForm_AC, LoginForm_AC ,successLogin_AC} from "../redux/login_signup/loginSignupActopnCreator";
// helper function 
import { validation } from "../helper_function/validation";
// icons 
import { VscClose } from "react-icons/vsc";
// notify 
import {notify} from "../helper_function/toastify";
// localStorage 
import {user_login_data_save_in_local} from "../localStorage/localStorage";
const Login = () => {

  const dispatch = useDispatch();
  const { Loginform } = useSelector(state => state.loginSignupState);


  const [loginError, setLoginError] = useState({})
  const [loginInputTouched, setLoginInputTouched] = useState({})
  const [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  })
  const loginInputTouch = e => {
    setLoginInputTouched({ ...loginInputTouched, [e.target.name]: true })
  }
  const loginInputHandler = e => {
    setLoginUserData({ ...loginUserData, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    setLoginError(validation(loginUserData, "login"))
  }, [loginUserData])



  const submitLoginForm =e => {
    e.preventDefault();

    if (!!Object.keys(loginError).length) {
      setLoginInputTouched({
        email: true,
        password: true,
      })
      notify("failed", "login failed.you have errors");
    }else{
      notify("success", "you login successfully");
      dispatch(successLogin_AC())
      user_login_data_save_in_local(loginUserData)
      dispatch(LoginForm_AC(false))
    }
  }
console.log()
  return (
    <>
      <div className={Loginform ? `${Styles.login_container} ${Styles.loginopen}` : Styles.login_container}>

        <button onClick={() => dispatch(LoginForm_AC(false))} className={Styles.closeLoginForm}><VscClose /></button>
        <h4>Login</h4>
        <hr />

        <form onSubmit={e => submitLoginForm(e)} className={Styles.loginForm}>
          <input name='email' onFocus={e => loginInputTouch(e)} onChange={e => loginInputHandler(e)} className='form-control' type="text" placeholder='email...' />
          <span className={Styles.errorSpan}>{(loginInputTouched.email && loginError.email) && loginError.email}</span>

          <input name='password' onFocus={e => loginInputTouch(e)} onChange={e => loginInputHandler(e)} className='form-control' type="password" placeholder='password...' />
          <span className={Styles.errorSpan}>{(loginInputTouched.password && loginError.password) && loginError.password}</span>

          <button className={Styles.loginformButton} type='submit'>login</button>
        </form>

        <button className={Styles.showsignupupFormButton} onClick={() => {
          dispatch(LoginForm_AC(false))
          dispatch(SignupForm_AC(true))
        }}>Signup</button>
      </div>
    </>
  );
};

export default Login;