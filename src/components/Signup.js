import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// action creator login signup 
import { SignupForm_AC, LoginForm_AC,navbarMenu_AC ,successSignup_AC } from "../redux/login_signup/loginSignupActopnCreator";
// action creator cart
import { shopCartMenu_AC } from "../redux/cart/cartAcionCreators";
// scss 
import Styles from "../assets/styles/components_styles/Signup.module.scss";
// icons 
import { VscClose } from "react-icons/vsc";
// helper function 
import { validation } from "../helper_function/validation";
// local storage 
import {user_signup_data_save_in_local} from "../localStorage/localStorage";
// react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// notify 
import { notify } from "../helper_function/toastify";


const Signup = () => {

  const dispatch = useDispatch();
  const { Signupform } = useSelector(state => state.loginSignupState)

  const [signupUserData, setSignupUserData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    isAccepted: false,
  })

  const [signupError, setSignupError] = useState({})
  const [touched, setTouched] = useState({})

  useEffect(() => {
    setSignupError(validation(signupUserData,"signup"))
  }, [signupUserData])

  const getSignupData = e => {
    setSignupUserData({ ...signupUserData, [e.target.name]: e.target.value })
  }
  const checkboxAccept = e => {
    setSignupUserData({ ...signupUserData, [e.target.name]: e.target.checked })
  }
  const inputTouch = e => {
    setTouched({ ...touched, [e.target.name]: true })
  }
  const submitForm = e => {
    e.preventDefault();

    if (!!Object.keys(signupError).length) {
      setTouched({
        email: true,
        password: true,
        confirmpassword: true,
        isAccepted: true
      });
      notify("failed", "singup failed.you have errors");
    } else {
      notify("success", "you singup successfully");
      user_signup_data_save_in_local(signupUserData)
      dispatch(successSignup_AC())
      dispatch(SignupForm_AC(false))
      dispatch(LoginForm_AC(true))
    }
  }


  return (
    <>
      <div className={Signupform ? `${Styles.signup_container} ${Styles.signupopen}` : Styles.signup_container}>

        <button onClick={() => dispatch(SignupForm_AC(false))} className={Styles.closeSignup}><VscClose /></button>
        <h4>Signup</h4>
        <hr />

        <form onSubmit={e => submitForm(e)} className={Styles.signupForm}>

          {/* signup email */}
          <div className="form-floating">
            <input onFocus={e => inputTouch(e)} onChange={e => getSignupData(e)} value={signupUserData.email} name="email" type="email" className="form-control" id="an1" placeholder="name@example.com" />
            <label className={Styles.inputLabels} htmlFor="an1">email address *</label>
          </div>
          <span className={Styles.errorSpan}>{(touched.email && signupError.email) && signupError.email}</span>





          {/* signup password */}
          <div className="form-floating">
            <input onFocus={e => inputTouch(e)} onChange={e => getSignupData(e)} value={signupUserData.password} name="password" type="password" className="form-control" id="an2" placeholder="Password" />
            <label className={Styles.inputLabels} htmlFor="an2">Password *</label>
          </div>
          <span className={Styles.errorSpan}>{(touched.password && signupError.password) && signupError.password}</span>

          {/* signup confirm password */}





          <div className='form-floating'>
            <input onFocus={e => inputTouch(e)} onChange={e => getSignupData(e)} value={signupUserData.confirmpassword} name="confirmpassword" type="password" className="form-control" id="an3" placeholder="Password" />
            <label className={Styles.inputLabels} htmlFor="an3">Confirm Password *</label>
          </div>
          <span className={Styles.errorSpan}>{(touched.confirmpassword && signupError.confirmPassword) && signupError.confirmPassword}</span>




          {/* signup checkbox */}
          <div className={Styles.signupCheckInput}>
            <div className={Styles.signupCheckbox}>
              <input onFocus={e => inputTouch(e)} name="isAccepted" type="checkbox" onClick={e => checkboxAccept(e)} id="signupcheckbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="signupcheckbox">I agree with your rows...</label>
            </div>
            <span className={Styles.errorSpan}>{(touched.isAccepted && signupError.isAccepted) && signupError.isAccepted}</span>




          </div>

          <button className={Styles.formButton} type="submit" >signup</button>
        </form>

        <button className={Styles.showLoginFormButton} onClick={() => {
          dispatch(SignupForm_AC(false));
          dispatch(LoginForm_AC(true));
          dispatch(shopCartMenu_AC(false));
          dispatch(navbarMenu_AC(false));
        }}>Login</button>
      </div >
      <ToastContainer />
    </>
  );
};

export default Signup;