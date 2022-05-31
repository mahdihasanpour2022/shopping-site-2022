// import React, { lazy, Suspense } from 'react';
import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
// react-redux 
import { Provider } from 'react-redux';
import Store from "./redux/Store";
// components 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import ProductDetail from "./components/ProductDetail";


import UserAccount from "./components/UserAccount";
import ContactUs from "./components/ContactUs.js";
import Blogs from "./components/Blogs.js";
// import BlogDetail from "./components/BlogDetail";

// const LazyuserAccount = lazy(() => import("./components/UserAccount"))
// const LazyContactUs = lazy(() => import("./components/ContactUs.js"))
// const LazyBlogs = lazy(() => import("./components/Blogs.js"))

// css 
import "./assets/styles/components_styles/App.scss";
// aos 
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const App = () => {
  
  return (
    <div>
      <Provider store={Store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useraccount" element={<UserAccount />} />
          {/* <Route path="/useraccount" element={
            <Suspense fallback={<p>userAccount loading...</p>}>
              <LazyuserAccount />
            </Suspense>
          } /> */}
          <Route path="/contactus" element={<ContactUs />} />
          {/* <Route path="/contactus" element={
            <Suspense fallback={<p>ContactUs loading...</p>}>
              <LazyContactUs />
            </Suspense>
          } /> */}
          <Route path="/blogs" element={<Blogs />} />
          {/* <Route path="/blogs" element={
            <Suspense fallback={<p>Blogs loading...</p>}>
              <LazyBlogs />
            </Suspense>
          } /> */}
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<Navigate to="/notfound" />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
};

export default App;