import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// components 
import Product from "./Product.js";
// scss 
import "../assets/styles/components_styles/Products.scss";


const Products = () => {

  const { products, loading, error, filteredCategory,search } = useSelector(state => state.productsState)
  const [count, setCount] = useState(6);

  const shorter_products = () => {
    return products.slice(0, count);
  }



  console.log(search)
  return (
    <>
      <div className="container-fluid p-0 text-center">
        <hr className='products_hr' />
        <p className='all_products'>All PRODUCTS</p>
        <div className="row products g-4 m-0">
          {!!loading ? <p>loading...</p> :
            <>
              {!!error ? <p>{error}</p> :
                <>
                  {!!products.length &&
                    <>
                      {!!filteredCategory.length ?
                        filteredCategory.map(item => <Product key={item.id} productData={item} />)
                        :
                        !!search.length ? 
                        search.map(item => <Product key={item.id} productData={item} />)
                        :
                        shorter_products().map(item => <Product key={item.id} productData={item} />)
                      }
                    </>
                  }
                </>
              }
            </>
          }
        </div>
        <button onClick={() => setCount(prevState => prevState + 6)} className='loadMore'>load more</button>
      </div>
    </>
  );
};

export default Products;