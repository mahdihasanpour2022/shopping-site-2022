import React from 'react';
// react-router-dom
import { NavLink } from "react-router-dom";
// react-redux 
import { useDispatch, useSelector } from "react-redux";
// action creator login signup 
import { navbarMenu_AC, logout_AC } from "../redux/login_signup/loginSignupActopnCreator";
// scss 
import Styles from "../assets/styles/components_styles/SideMenu.module.scss";
// icons 
import { VscClose } from "react-icons/vsc";

const SideMenu = () => {

  const dispatch = useDispatch()
  const { navbarmenu } = useSelector(state => state.loginSignupState)

  return (
    <>
      <div className={navbarmenu ? `${Styles.left_menu} ${Styles.open}` : Styles.left_menu}>
        {/* start TopMenu */}
        <div className={Styles.brandTopMenu}>
          <NavLink to="/">
            <span>CARTSY.</span>
            <h5>FASHION</h5>
          </NavLink>
          <button onClick={() => dispatch(navbarMenu_AC(false))} className={Styles.closeBtn}><VscClose /></button>
        </div>
        <hr />
        {/* start nav bar  */}
        <ul>
          <li><NavLink className={navData => navData.isActive ? "navLink active" : "navLink"} to="/" onClick={() => dispatch(navbarMenu_AC(false))}>Home</NavLink></li>
          <li><NavLink to="/" onClick={() => dispatch(navbarMenu_AC(false))}>Shop</NavLink></li>
          <li><NavLink className={navData => navData.isActive ? "navLink active" : "navLink"} to="/blogs" onClick={() => dispatch(navbarMenu_AC(false))}>Blog</NavLink></li>
          <li><NavLink to="/contactus" onClick={() => dispatch(navbarMenu_AC(false))}>Contact</NavLink></li>
          <li><button onClick={() => { dispatch(logout_AC()); dispatch(navbarMenu_AC(false)) }} className={Styles.signoutBTN}>Logout</button></li>
        </ul>
      </div>
    </>
  );
};

export default SideMenu;