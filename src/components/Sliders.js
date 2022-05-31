import React from 'react';
// sliders images 
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";
// scss
import "../assets/styles/components_styles/slider.scss";
// react-responsive-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Sliders = () => {

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row m-0 ">
          <div className='slider p-0'>
            {/* start Carousel  */}
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              interval={6000}
              transitionTime={1000}
              stopOnHover={false}
              showArrows={false}
              showIndicators={false}
              showThumbs={false}
            >

              <div>
              {/* slider1start slider1  */}
                <img src={slider1} alt="slider1" />
                <div className='content'>
                  <h5>Exclusive<span> Collection</span></h5>
                  <h5>Made Only For <span>Women</span></h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ad neque sit magni sapiente dolorem!</p>
                </div>
              </div>
              <div>
              {/* slider1start slider2  */}
                <img src={slider2} alt="slider2" />
                {/* <p className="legend d-inline-block">men</p> */}
                <div className='content'>
                  <h5>Exclusive<span> Collection</span></h5>
                  <h5>Made Only For <span>Men</span></h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ad neque sit magni sapiente dolorem!</p>
                </div>
              </div>

            </Carousel>

            {/* <Slider {...settings}>
              <div>
                <img draggable="false" src={slider1} className="d-block w-100" alt="slider1" />
                <div className='content'>
                  <h5>Exclusive<span> Collection</span></h5>
                  <h5>Made Only For <span>Women</span></h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ad neque sit magni sapiente dolorem!</p>
                </div>
              </div>
              <div>
                <img draggable="false" src={slider2} className="d-block w-100" alt="slider2" />
                <div className='content'>
                  <h5>Exclusive<span> Collection</span></h5>
                  <h5>Made Only For <span>Men</span></h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ad neque sit magni sapiente dolorem!</p>
                </div>
              </div>
            </Slider> */}

            {/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">

                <div className="carousel-item active">
                  <img draggable="false" src={slider1} className="d-block w-100" alt="..." />
                  <div className='content'>
                    <h5>Exclusive<span> Collection</span></h5>
                    <h5>Made Only For <span>Women</span></h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ad neque sit magni sapiente dolorem!</p>
                  </div>
                </div>

                <div className="carousel-item">
                  <img draggable="false" src={slider2} className="d-block w-100" alt="..." />
                  <div className='content'>
                    <h5>Exclusive<span> Collection</span></h5>
                    <h5>Made Only For <span>Men</span></h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ad neque sit magni sapiente dolorem!</p>
                  </div>
                </div>
              </div>
            </div> */}


          </div>
        </div>
      </div>
    </>
  );
};

export default Sliders;