import React from 'react';
// scss 
import Styles from "../assets/styles/components_styles/BlogDetail.module.scss";

const BlogDetail = ({ blogDetailData, setThisBlogs }) => {

  // desttructuring blog data 
  const { id, img_src, date, title, text, Tags } = blogDetailData;

  return (
    <>
    {/* start blogDetail  */}
      <div className={`col ${Styles.blogDetail}`}>
        <div>
          <img src={img_src} alt={`${title}`} />
          <span style={{ marginRight: "1rem" }}>{date}</span>
          {Tags.map((item, index) => <span key={index}>{item},</span>)}
          <h3>{title}</h3>
          <span>{id}</span>
          <p>{text}</p>
          <button onClick={() => setThisBlogs([])}>Go To Blogs</button>
        </div>
      </div>
    </>
  );
};

export default React.memo(BlogDetail);