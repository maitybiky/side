import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerimage from "../../images/nyc-new-2-1.png";

export default function network() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  const slideData = [1, 2, 3,4,5,6,7];
  return (
    <div>
      <div className="banner-sec">
        <Slider {...settings}>
          {slideData.map((item, index) => {
            return (
              <div className="items" key={index}>
                  <div class="banner-image">
                    <a href="https://www.iaaglobal.org/membership" tabindex="0">
                      <img
                        src="https://www.iaaglobal.org/storage/bulk_images/icons/nyc-new-2-1.png"
                      className="img-fluid"
                      />
                    </a>
                  </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
