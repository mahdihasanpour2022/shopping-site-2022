import React from 'react';
// scss 
import Styles from "../assets/styles/components_styles/Blog.module.scss";
// helper function 
import { shoretersentense } from "../helper_function/helper_functions";



const Blog = ({ blogData, findBlog }) => {


  // const {img_src,title,text,Tags,Categories,date } = blogData;
  const { id, img_src, date, title, text } = blogData;
  return (
    <>
      <div className={`col ${Styles.blog}`}>
        <div>
          <img src={img_src} alt="" />
          <span>{date}</span>
          <h3>{title}</h3>
          <p>{shoretersentense(text)}</p>
          <button className='btn' onClick={() => findBlog(id)} >Read More...</button>
        </div>
      </div>
    </>
  );
};

export default Blog;