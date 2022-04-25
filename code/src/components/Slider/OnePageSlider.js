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
                  <h1 className="font-700 font-90px">PANDORA.</h1>
                  <h5 className="text-uppercase">
                  An Immersive Web3 Social Chat App gated by NFTs and Cryptos<br></br> where users can interact as their own NFT avatar.
                  </h5>
                  
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
                  <h5 className="text-uppercase">
                  Connect everyone in web3.
                  </h5>
                  
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
