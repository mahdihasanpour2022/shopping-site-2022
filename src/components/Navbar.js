import React, { useState } from 'react';
// react-router-dom 
import { Link } from "react-router-dom";
// react-redux 
import { useSelector, useDispatch } from 'react-redux';
// components 
import Signup from "./Signup";
import Login from "./Login";
import SideMenu from "./SideMenu";
import ShoppMenu from "./ShoppMenu";
// action creator login/signup 
import { SignupForm_AC, LoginForm_AC, navbarMenu_AC ,logout_AC} from "../redux/login_signup/loginSignupActopnCreator";
import { shopCartMenu_AC } from "../redux/cart/cartAcionCreators";
import {searchValue_AC} from "../redux/products/productsActionCreators";
// scss 
import "../assets/styles/components_styles/Navbar.scss";
// icons 
import { CgMenuLeft } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { RiShoppingCart2Line } from "react-icons/ri";

const Navbar = () => {

  const dispatch = useDispatch()
  const { cart } = useSelector(state => state.cartState);
  const { login, signup, Signupform ,Loginform,navbarmenu} = useSelector(state => state.loginSignupState);
  const { shoppcartmenu } = useSelector(state => state.cartState);


  const [showSearch , setShowSearch]=useState(false)

  const showLoginFormBtn = () => {
    dispatch(LoginForm_AC(true))
    dispatch(SignupForm_AC(false))
    dispatch(navbarMenu_AC(false))
    dispatch(shopCartMenu_AC(false))
  }
  const showSignupFormBtn = () => {
    dispatch(SignupForm_AC(true))
    dispatch(LoginForm_AC(false))
    dispatch(navbarMenu_AC(false))
    dispatch(shopCartMenu_AC(false))
  }
  const shoNabbarBtn = () => {
    dispatch(navbarMenu_AC(true))
    dispatch(shopCartMenu_AC(false))
    dispatch(SignupForm_AC(false))
    dispatch(LoginForm_AC(false))
  }
  const showShoppingCartDiv = () => {
    dispatch(shopCartMenu_AC(true))
    dispatch(navbarMenu_AC(false))
    dispatch(SignupForm_AC(false))
    dispatch(LoginForm_AC(false))
  }

const searchInput=e=>{
  dispatch(searchValue_AC(e.target.value))
}

  return (
    <>
      <div className="container-fluid nav_container">
        <div className="row">
          <nav className="nav" style={{height:showSearch?"6rem":"5rem"}}>

            <div className='col-5 left_nav'>
              <button onClick={() => shoNabbarBtn()} className='hamburgerMenu'><CgMenuLeft /></button>
              <div className='brand'>
                <Link to="/">
                  <span>CARTSY.</span>
                  <h5>FASHION</h5>
                </Link>
              </div>
            </div>

            <div className='col-7 right_nav'>
              <FiSearch onClick={()=>setShowSearch(true)} style={{display:showSearch?"none":"block"}}/>
              {login ?
                <>
                  <Link to="/useraccount">My Account</Link>
                  <button onClick={()=>dispatch(logout_AC())} className='logout'>logOut</button>
                </>
                :
                <>
                  {signup ?
                    <button className='openLoginBtn' onClick={() => showLoginFormBtn()}>login</button>
                    :
                    <button className='openSignupBtn' onClick={() => showSignupFormBtn()}>Signup</button>}
                </>
              }
            </div>

            <Signup />
            <Login />
            <SideMenu />
            <ShoppMenu />
            <div className='inputContainer' style={{display:showSearch?"block":"none"}}>
              <input onChange={e=>searchInput(e)} className=' searchInput' style={{display:showSearch?"block":"none"}} type="search" placeholder='search...' />
            </div>
          </nav>
        </div>
      </div >

      {!Loginform && !navbarmenu && !Signupform && !shoppcartmenu && <div className='shoppingCart_icon' onClick={() => showShoppingCartDiv()}>
        {cart.length ?
          <>
            <RiShoppingCart2Line />
            <span>{cart.length}</span>
          </>
          :
          <div className='letterContainer'>
            <span>B</span>
            <span>U</span>
            <span>Y</span>
          </div>
        }
      </div>
      }

    </>
  );
};

export default Navbar;