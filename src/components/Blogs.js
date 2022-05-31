import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
// components 
import Blog from "./Blog";
import BlogDetail from "../components/BlogDetail";
// localStorage 
import { blogs_save_in_local } from "../localStorage/localStorage";
// scss 
import Styles from "../assets/styles/components_styles/Blogs.module.scss";
// icons 
import { FiSearch } from "react-icons/fi";
// image 
import blogImage from "../assets/images/blog.jpg";
// blogs_list 
import { blogs_list } from "../serivice_data/blogsList.js";
// Breadcrumb
import { Breadcrumb } from "react-bootstrap";


const Blogs = () => {


  // for recent blogs
  const [titleArray, setTitleArray] = useState([]);
  // for blogs categories 
  const [allCategories, setAllCategories] = useState([]);
  // count for load  more
  const [blogsCount, setBlogsCount] = useState(2);
  // for load  more
  const [someBlogs, setSomeBlogs] = useState([]);
  // find clicked blog 
  const [thisBlogs, setThisBlogs] = useState([]);


  useEffect(() => {
    blogs_save_in_local(blogs_list)
    setSomeBlogs(blogs_list.slice(0, blogsCount))

    const titlesArray = blogs_list.map(item => item.title);
    setTitleArray(titlesArray);

    let Categories = [];
    blogs_list.forEach(blog => blog.Categories.map(item => Categories.push(item)))
    const newCategories = [...new Set(Categories)]
    setAllCategories(newCategories);

  }, [blogsCount])


  const findBlog = (id) => {
    const intendedBlog = blogs_list.filter(item => item.id === id);
    setThisBlogs(intendedBlog)
  }

  return (
    <>
      <div className={Styles.blogHeaderImage}>

        <img src={blogImage} alt="" />
        <div className={Styles.contentAbsolute}>
          <h4><em>Blog</em></h4>
        </div>

      </div>

      {/* Breadcrumb */}
      <div className="container mt-3">
        <div className="row">
          <div>
            <Breadcrumb style={{ fontSize: "15px" }}>
              <Breadcrumb.Item href="/" >Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Blogs</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8" >
            {/* conditional rendering  */}
            {!!thisBlogs.length ?
              // create blog detail component for each blog with map loop 
              thisBlogs.map(item => <BlogDetail key={item.id} setThisBlogs={setThisBlogs} id={item.id} blogDetailData={item} />)
              :
              !!someBlogs.length && someBlogs.map(item => <Blog key={item.id} findBlog={findBlog} id={item.id} blogData={item} />)
            }

          </div>
          <div className={`${Styles.rightBox} col-lg-4`}>
            <div className="container-fluid mt-5">
              <div className="row">
                {/* search input  */}
                <div className={`${Styles.searchBox} col-12`} >
                  <div className="input-group w-100">
                    <input type="text" className="form-control" placeholder="search..." />
                    <span className="input-group-text bg-dark text-light" >
                      <FiSearch />
                    </span>
                  </div>
                </div>

                <div className={`${Styles.recentBlogs} col-12`}>
                  <h4>Recent blogs :</h4>
                  <hr />
                  <ul>
                    {!!titleArray.length && titleArray.map(item => <li key={item}><Link to='/'>{item}</Link></li>)}
                  </ul>
                </div>

                <div className={`${Styles.blogcategories} col-12`}>
                  <h4>blogs Categories :</h4>
                  <hr />
                  <ul>
                    {!!allCategories.length && allCategories.map(item => <li key={item}><Link to='/'>{item}</Link></li>)}
                  </ul>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
      {!thisBlogs.length && <button onClick={() => setBlogsCount(prevState => (prevState + 2))} className={Styles.loadmoreBlogs}>Load More...</button>}

    </>
  );
};

export default React.memo(Blogs);