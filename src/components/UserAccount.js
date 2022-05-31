import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";

// scss 
import Styles from "../assets/styles/components_styles/UserAccount.module.scss";
const UserAccount = () => {


  const { signup: { email } } = useSelector(state => state.loginSignupState)

  return (
    <>
      <div className="container p-0">
        <div className="row m-0">
          <div className={`${Styles.accountContainer} col-lg-6`}>
            <Link to="/" className={Styles.backLink}>&laquo;&laquo; Go To Home</Link>
            <p> Your email : <span>{email}</span></p>
            <button className={Styles.changePasswordBtn}>Change Password</button>
            <hr />
            <label htmlFor="formFileSm" className="form-label d-block mt-3">Upload Avatar :</label>
            <input className="form-control form-control-sm" id="formFileSm" type="file"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAccount;