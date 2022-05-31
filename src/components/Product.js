import React, { useState } from 'react';
import { Link } from "react-router-dom";
// modal 
import { Modal } from 'react-bootstrap';
// scss 
import "../assets/styles/components_styles/Product.scss";
// react_icons 
import { FaEuroSign } from "react-icons/fa";
// helper function 
import { shoretersentense } from "../helper_function/helper_functions";


const Product = ({ productData }) => {


  // onMouseEnter 
  const [isHover, setIsHover] = useState(false);
  // modal 
  const [isShow, setIsShow] = useState(false)


  // destructring productData 
  const { id, title, detail, real_price, Discounted_price, image_src1, image_src2 } = productData;

  return (
    <>
      <div className='col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-3'>
        <div className="Product_card h-100" onClick={() => setIsShow(true)}>
          <div className="productImage" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="500">
            <img onMouseEnter={() => setIsHover(!isHover)} src={isHover ? image_src2 : image_src1} alt={title} />
          </div>
          <div className="productContent">
            <h6>{title}</h6>
            <p><span style={{ color: "lightgray" }}>{id}</span>{detail}</p>
            <span className='real_price'>
              {Discounted_price}
              <FaEuroSign />.00</span>
            <span className='Discounted_price'><FaEuroSign />{real_price}.00</span>
          </div>
        </div>
      </div>

      <Modal show={isShow}>
        <div className="modal-content">
          <div className="content">
            <img src={productData.image_src1} alt="title" />
            <div className='modal-right'>
              <button type="button" className='btn-close p-0' onClick={() => setIsShow(false)}></button>
              <h5 className="modal-title">{productData.title}</h5>
              <p>{shoretersentense(productData.detail)}</p>
              <p>{productData.id}</p>
              <Link to={`/productDetail/${productData.id}`} onClick={() => setIsShow(false)}>Details...</Link>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Product;