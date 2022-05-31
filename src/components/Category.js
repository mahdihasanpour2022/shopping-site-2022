import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// helper function 
import { shorterName, countItemInCategory } from "../helper_function/helper_functions";
// scss 
import "../assets/styles/components_styles/Category.scss";
// action creator 
import { filterCategoty } from "../redux/products/productsActionCreators";



const Category = ({ categoryName }) => {

  const [categoryFiltered, setCategoryFiltered] = useState({})
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.productsState)

  useEffect(() => {
    if (!!products.length) {
      const filteredCategory = products.filter(item => item.Category === categoryName);
      setCategoryFiltered(filteredCategory[Math.floor(Math.random() * 3)])
    }
  }, [categoryName, products])

  return (
    <>
      <div onClick={() => dispatch(filterCategoty(categoryName))} className='cardContainer'>
        {/* start each card */}
        <div className="card">
          <img src={categoryFiltered.image_src1} alt="findImage.Category" />
          <div className="card-body">
            <h6>{shorterName(categoryName)}</h6>
            <p>{countItemInCategory(products, categoryName)}items</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Category;