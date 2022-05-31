import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
// action creator cart 
import { shopCartMenu_AC, increaseProductInCart_AC, decreaseProductInCart_AC, removeProduct_AC, clearCart_AC, checkOut_AC, calculate_AC } from "../redux/cart/cartAcionCreators";
// helper function 
import { checkCount } from "../helper_function/helper_functions";
// icons 
import { VscClose } from "react-icons/vsc";
// import { FaShoppingCart } from "react-icons/fa";
import shoppIcon from "../assets/icons/not-found-alt.svg";
// scss
import Styles from "../assets/styles/components_styles/ShoppMenu.module.scss";
// icons 
import { IoIosTrash } from "react-icons/io";
import { FaEuroSign } from "react-icons/fa";
// ITyped 
import ITyped from 'react-ityped';
// toastify 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// react-countup
import CountUp from 'react-countup';



const ShoppMenu = () => {

  const dispatch = useDispatch()
  const { cart, shoppcartmenu, totalPrice, totalDiscount } = useSelector(state => state.cartState)


  useEffect(() => {

  }, [])


  // const totalPrice = () => {
  //   return cart.reduce((total, item) => total + (item.Discounted_price * item.quantity), 0)
  // }
  // const totalDiscounted = () => {
  //   return cart.reduce((total, item) => total + (item.real_price * item.quantity), 0) - totalPrice();
  // }




  // const strings = [`saved money: ${totalDiscount.toString()}`];

  // const strings = ["salam", "bar", "to"];
  // console.log([totalDiscount.toString()])

  return (
    <>
      <div className={shoppcartmenu ? `${Styles.shoppMenu} ${Styles.shoppMenuOpen}` : Styles.shoppMenu}>
        <button onClick={() => dispatch(shopCartMenu_AC(false))} className={Styles.closeShopCart}><VscClose /></button>
        <h4>ShoppCart</h4>
        <hr />
        {
          !cart.length ?
            <div className={Styles.emptyShoppCard}>
              {/* <FaShoppingCart /> */}
              <img src={shoppIcon} alt="shoppIcon" />
              <p>Your SoppingCart is <span>Empty</span></p>
            </div>
            :
            <div className={Styles.fullShoppCard}>

              <table className={`${Styles.table} table align-middle mt-3`}>

                <thead >
                  <tr>
                    <th>#</th>
                    <th>image</th>
                    <th>price</th>
                    <th>count</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody >
                  {cart.map((item, index) =>

                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td><img src={item.image_src1} className={Styles.tdImage} alt={item.id} /></td>
                      <td>{item.Discounted_price}<FaEuroSign className={Styles.ueroIcon} /></td>
                      <td>{item.quantity}</td>
                      <td>
                        <div className={Styles.actionButtons}>
                          <button onClick={() => {
                            dispatch(increaseProductInCart_AC(item));
                            dispatch(calculate_AC());
                          }
                          } className={`${Styles.changeOrderCount} ${Styles.increaseOrder}`}>+</button>
                          {checkCount(cart, item) > 1 ?
                            <button onClick={() => {
                              dispatch(decreaseProductInCart_AC(item));
                              dispatch(calculate_AC());
                            }
                            } className={`${Styles.changeOrderCount} ${Styles.decreaseOrder}`}>-</button>
                            :
                            <button onClick={() => {
                              dispatch(removeProduct_AC(item));
                              dispatch(calculate_AC());
                            }} className={Styles.trashOrder}><IoIosTrash /></button>
                          }
                        </div>
                      </td>
                    </tr>

                  )}
                </tbody>
              </table>

              <div className={Styles.clearCheckOutTotalContainer}>
                <div className={Styles.prices}>

                  <p>Total price:
                    <span>
                      <CountUp delay={0.2} duration={0.5} start={10} end={totalPrice} />
                      <FaEuroSign className={Styles.ueroIcon} />
                    </span>
                  </p>

                  <p>Save Money :
                    <span>{totalDiscount}<FaEuroSign className={Styles.ueroIcon} /></span>
                  </p>

                  <div className='itypedContainer'>
                    <ITyped
                      className='ityped-cursor'
                      showCursor={false}
                      // strings={strings}
                      strings={["Buy more..."]}
                      typeSpeed={50}
                      backSpeed={50}
                      startDelay={5000}
                      backDelay={5000}
                    />
                  </div>
                </div>
                <button onClick={() => {
                  dispatch(clearCart_AC());
                  dispatch(calculate_AC());
                }} className={Styles.clearCard}>CLEAR CART</button>
                <button onClick={() => {
                  dispatch(checkOut_AC());
                  dispatch(calculate_AC());
                }} className={Styles.checkOutCard}>CheckOut</button>
              </div>

            </div>
        }
      </div>
      <ToastContainer />
    </>
  );
};

export default ShoppMenu;