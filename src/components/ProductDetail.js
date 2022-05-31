import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// components 
import Product from "./Product";
// react-router-dom 
import { Link } from "react-router-dom"
// react-redux 
import { useDispatch, useSelector } from 'react-redux';
// action creator 
import { addToCart_AC, increaseProductInCart_AC, decreaseProductInCart_AC, removeProduct_AC, calculate_AC } from "../redux/cart/cartAcionCreators";
// helper function 
import { checkIsInCart, checkCount } from "../helper_function/helper_functions";
// scss 
import "../assets/styles/components_styles/ProductDetail.scss"
// icons 
import { FaEuroSign } from "react-icons/fa";
import { IoIosTrash } from "react-icons/io";
// react-countup
import CountUp from 'react-countup';
// ityped
import ITyped from 'react-ityped';
// Breadcrumb
import { Breadcrumb } from "react-bootstrap";



const ProductDetail = () => {


  const dispatch = useDispatch()
  const { cart } = useSelector(state => state.cartState);
  const { categories, products } = useSelector(state => state.productsState);
  // find all item that is in this category 
  const [allInThisCategory, setAllInThisCategory] = useState("")
  // find this product data 
  const [thisProduct, setThisProduct] = useState("")


  const { id } = useParams();


  useEffect(() => {

    if (localStorage.hasOwnProperty("products")) {
      const allProducts = JSON.parse(localStorage.getItem("products"));
      var productDetailData = allProducts.filter(item => item.id === id);
      productDetailData = productDetailData[0];
      setThisProduct(productDetailData);
      const categoryHas = allProducts.filter(item => item.Category === productDetailData.Category)
      const categoryHasExcludeThis = categoryHas.filter(item => item.id !== productDetailData.id)
      setAllInThisCategory(categoryHasExcludeThis);
    }
  }, [id])


  const imageCount = () => {
    if (!!thisProduct) {
      const count = Object.keys(thisProduct).filter(item => item.includes("image_src"));
      return count;
    }
  }


  // const createArrayFromString = useCallback(()=>{
  //   if (thisProduct.title) {
  //     return thisProduct.title.split(" ");
  //   }
  // },[thisProduct])
  // const strings = createArrayFromString();

  // productDetailData destructuring 
  const { Tags, SKU, title, detail, real_price, Discounted_price, sizes, Category } = thisProduct;

  const strings = Tags;

  return (
    <>
      {!!thisProduct ?
        <>
          {/* Breadcrumb */}
          <div className="container mt-3">
            <div className="row">
              <div>
                <Breadcrumb style={{ fontSize: "15px" }}>
                  <Breadcrumb.Item href="/" >Home</Breadcrumb.Item>
                  <Breadcrumb.Item active>productDetail/{id}</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </div>
          <div className="container p-0 mt-5">

            <div className="row m-0">
              {/* start left hand Detail */}
              <div className="col-md-6">
                <div className="leftDetail" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500" >
                  {imageCount().map(item => <img src={thisProduct[item]} alt={item} key={item} />)}
                </div>
              </div>
              {/* start right hand Detail */}
              <div className="col-md-6">
                <div className="rightDetail">

                  <h5>{title}</h5>
                  <div className='itypedContainer'>
                    <ITyped
                      className='ityped-cursor'
                      showCursor={false}
                      strings={strings}
                      typeSpeed={50}
                      backSpeed={50}
                      startDelay={500}
                      backDelay={1000}
                    />
                  </div>


                  {/* <span>{id}</span> */}
                  <p className='parphDetail'>{detail}</p>
                  <div className='hContainer'>

                    <h3><CountUp delay={0.5} duration={1} start={real_price} end={Discounted_price} />.00<FaEuroSign /></h3>


                    {/* <h3>{Discounted_price}.00<FaEuroSign /></h3> */}
                    <h3>{real_price}.<FaEuroSign /></h3>
                  </div>
                  <hr />
                  <h6>Sizes:</h6>
                  <div className='pContainer'>
                    {sizes && sizes.map(item => <p key={item}>{item}</p>)}
                  </div>
                  <hr />
                  <p>SKU: <span>{SKU}</span></p>
                  <p>Category: <span className='category'>{Category}</span></p>
                  <div className='spanContainer'>
                    <p>Tags:</p>
                    <div >
                      {Tags.map(item => <span key={item}>{item} ,</span>)}
                    </div>
                  </div>
                  <hr />
                  <div className='shoppingButtons'>
                    {!checkIsInCart(cart, thisProduct) ?
                      < button onClick={() => {
                        dispatch(addToCart_AC(thisProduct));
                        dispatch(calculate_AC());
                      }} className='addToCartButton'>ADD TO CART</button>
                      :
                      <>
                        <button onClick={() => {
                          dispatch(increaseProductInCart_AC(thisProduct))
                          dispatch(calculate_AC());
                        }} className='changeProductCount increaseCount'>+</button>

                        <span className='ProductCount'>{checkCount(cart, thisProduct)}</span>

                        {checkCount(cart, thisProduct) > 1 ?
                          <>
                            <button onClick={() => {
                              dispatch(decreaseProductInCart_AC(thisProduct));
                              dispatch(calculate_AC());
                            }} className='changeProductCount decreaseCount'>-</button>
                          </>
                          :
                          <button onClick={() => {
                            dispatch(removeProduct_AC(thisProduct));
                            dispatch(calculate_AC());
                          }} className='trashButton'><IoIosTrash /></button>
                        }
                      </>
                    }
                  </div>
                  <Link to="/">&laquo;&laquo; Go To Product</Link>
                </div>
              </div>
            </div>
          </div>
        </> :
        <p>loading...</p>
      }

      {/* start similar_product */}
      <hr className='similar_product' />
      <p className='similar_products'>You may also like …</p>
      <div className="container my-5">
        <div className="row">
          {!!allInThisCategory.length && allInThisCategory.map(item => <Product key={item.id} productData={item} />)}
        </div>
      </div>


      <hr className='similar_product' />
      <p className='similar_products'>Related products</p>

      <div className="container">
        <div className="row">
          {categories.map(item => {
            const categoryHasThisProducts = products.filter(product => product.Category === item);
            return <Product key={categoryHasThisProducts[1].id} productData={categoryHasThisProducts[1]} />
          })}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;