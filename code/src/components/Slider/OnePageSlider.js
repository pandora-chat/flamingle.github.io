import React from "react";
import Slider from "react-slick";
import imgSlide1 from "../../assets/images/bg3.png";
import imgSlide2 from "../../assets/images/bg2.png";

const OnePageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
    className: "default-slider",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="home-slider" id="home">
      <Slider {...settings}>
        <div className="slide">
          <div
            className="slide-img parallax-effect"
            style={{
              background: `url(${imgSlide1}) center center / cover scroll no-repeat`,
            }}
          ></div>
          <div className="hero-text-wrap">
            <div className="hero-text fade-center-text">
              <div className="container">
                <div className="white-color text-center">
                  <h1 className="font-700 font-90px">Flamingle</h1>
                  <h4 className="text-uppercase">
                  Web3 native community app that bridges people with shared interests and values with real, safe, and deep conversations.
                  </h4>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div
            className="slide-img parallax-effect"
            style={{
              background: `url(${imgSlide2}) center center / cover scroll no-repeat`,
            }}
          ></div>
          <div className="hero-text-wrap">
            <div className="hero-text fade-center-text">
              <div className="container">
                <div className="white-color text-center">
                  <h1 className="font-700 font-90px">Our Vision</h1>
                  <h4 className="text-uppercase">
                  Provide a space for people to build connections with real value.
                  </h4>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default OnePageSlider;
