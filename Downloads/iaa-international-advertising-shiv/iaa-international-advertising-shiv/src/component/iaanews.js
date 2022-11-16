import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import d1 from "../images/news1.png";

export default function iaanews() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
          <section className="iaa-news">
  <div className="container">
    <div className="iaa-news-lft">
      <h3>IAA News</h3>
    </div>
    <div className="iaa-news-rgt">
      <a href="#">View All</a>
    </div>
   
    <Slider {...settings}>
    <div className="item">
        <div className="iaa-img">
          <img src={d1} />
          <div className="overlay overlaybottom">
            <div className="iaa-text">
              Jul 06,2022
              <br />
              45th IAA World Congress 2024
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="iaa-img">
          <img src={d1} />
          <div className="overlay overlaybottom">
            <div className="iaa-text">
              Jul 06,2022
              <br />
              45th IAA World Congress 2024
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="iaa-img">
          <img src={d1} />
          <div className="overlay overlaybottom">
            <div className="iaa-text">
              Jul 06,2022
              <br />
              45th IAA World Congress 2024
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="iaa-img">
          <img src={d1} />
          <div className="overlay overlaybottom">
            <div className="iaa-text">
              Jul 06,2022
              <br />
              45th IAA World Congress 2024
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="iaa-img">
          <img src={d1} />
          <div className="overlay overlaybottom">
            <div className="iaa-text">
              Jul 06,2022
              <br />
              45th IAA World Congress 2024
            </div>
          </div>
        </div>
      </div>
      </Slider>
  
  <div className="clear" />
  </div>
</section>
    </div>
  )
}
