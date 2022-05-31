import React from 'react';
// components 
import Sliders from "./Sliders";
import Categories from "./Categories";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Sliders />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;