import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import r9 from "../../images/top-img-watch now.jpg"

export default function Watchnow() {
    const settings = {
        
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
             
              }
            },
            {
              breakpoint: 767,
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
    const loop =[1,2,3,4,5,6,7,8]
  return (
    <div>
        <section className="series-page clearfix">
  <div className="container">
    <div className="series-content">
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="top-image">
            <img src={r9} />
          </div>
          <div className="intro">
            <a href="#">WATCH NOW</a>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="right-text">
            <h3>
              <strong>IAA GLOBAL</strong>
              <span>PRESENTS</span>
            </h3>
            <h2>IAA Academy</h2>
            <div className="text-overflow">
              <p>
                IAA Academy is a first-of-its-kind educational experience will
                bring the world’s leading advertising platforms under one
                virtual roof to help marketers build successful
                direct-to-consumer brands.
              </p>
              <p>
                Facebook, Google, TikTok, Acoustic, Bond Brand Loyalty, and
                Winterberry Group will lead marketers through 11 sessions
                developed exclusively for the IAA Academy, including The DTC
                Manual, Planning for the Future with TikTok, and Brand Purpose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*------*/}
    <div className="series-video-para">
      <div className="series-title">
        <h3>Episodes</h3>
      </div>
      <Slider {...settings}>
            {loop.map((item,index) =>{
              return(
                <div className="item">
                <div className="series-video-img">
                  <a href="#">
                    <img src={r9} />
                  </a>
                </div>
                <div className="series-overlay">
                  <h2>
                    <a href="#">Introduction to IAA Academy</a>
                  </h2>
                </div>
              </div>
              )

            }

            )
            }
  
        </Slider>
    
    </div>
    {/*------*/}
    <div className="series-video-para">
      <div className="series-title">
        <h3>Suggested Series</h3>
      </div>
      <Slider {...settings}>
            {loop.map((item,index) =>{
              return(
                <div className="item">
                <div className="series-video-img">
                  <a href="#">
                    <img src={r9} />
                  </a>
                </div>
                <div className="series-overlay">
                  <h2>
                    <a href="#">Introduction to IAA Academy</a>
                  </h2>
                </div>
              </div>
              )

            }

            )
            }
  
        </Slider>
    </div>
  </div>
</section>
    </div>
  )
}
