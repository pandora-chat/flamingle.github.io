import React from "react";
import Slider from "react-slick";
import imgBg from "../../assets/images/bg4.png";

const TestimonialTwo = ({ data, title }) => {
  const settings = {
    className: "testimonial",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
  };
  return (
    <section
      className="parallax-bg fixed-bg"
      data-stellar-background-ratio="0"
      style={{ backgroundImage: `url(${imgBg})` }}
    >
      <div className="row">
          <div className="col-sm-8 section-heading">
            <h2 style={{ color: 'white' }}>{title}</h2>
            <hr className="white-bg" />
          </div>
      </div>
      <div className="parallax-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Slider {...settings}>
              {data.map((testimonial) => (
                <div className="testimonial-item" key={testimonial.id}>
                  <div className="testimonial-content">
                    <h5>{testimonial.title}</h5>
                    <h4>{testimonial.text}</h4>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialTwo;
