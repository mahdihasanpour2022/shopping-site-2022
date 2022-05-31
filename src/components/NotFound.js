import React from 'react';
import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* start not found page  */}
          <div className='text-center my-5'>
            <h4 className='text-secondary mb-2'> Page Not Found<span className='align-middle fs-6'>(404 error)</span></h4>
            <hr className='w-50 m-auto' />
            <Link className='text-info fs-6' to="/">&laquo;&laquo; Go Back to Home</Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default NotFound;