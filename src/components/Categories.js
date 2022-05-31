import React, { useEffect } from 'react';
// react-redux 
import { useDispatch, useSelector } from 'react-redux';
// components 
import Category from "./Category.js";
// action creator 
import fetchProducts, { removeFilteredProduct } from "../redux/products/productsActionCreators";
// scss 
import "../assets/styles/components_styles/Categories.scss";


const Categories = () => {



  const dispatch = useDispatch()
  const { categories } = useSelector(state => state.productsState);


  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);


  return (
    <>
      <div className="container-fluid p-0">
        <div className="row m-0">
          <p className='categories_p'>Select Categories or
            <span onClick={() => dispatch(removeFilteredProduct())}>All</span>
          </p>

          <div className='Categories'>
            {!!categories.length && categories.map(item => <Category key={item} categoryName={item} />)}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Categories;