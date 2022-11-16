import React from 'react'
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import r1 from "../../images/leadhub.jpg";
import r3 from "../../images/leadership-hub-video-img-2.jpg";
import r4 from "../../images/leadership-hub-second-banner.jpg";
import r5 from "../../images/leader-hub-blog-img-3.jpg"

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5
};

const settings1 = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};


const Leadershiphub = (props) => {
  const loop = [1, 2, 3, 4,5,6,7]
  const loop1 = [1, 2, 3]
  const [state,setDtate] = useState("")
  
  return (
    <div>
     

      <section className="iaa-leadership-hub-banner">
        <div className="iaa-leadership-hub-banner-box">
          <div className="iaa-leadership-hub-banner-img-box">
            <img src={r1} className="img-fluid" />
          </div>
          <div className="iaa-leadership-hub-banner-text">
            <div className="container">
              <div className="iaa-leadership-hub-banner-btn-box">
                <a href="#" className="btn iaa-leadership-hub-banner-btn">
                  WATCH NOW
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </section>

      <section className="iaa-leadership-hub-video-part" id="video-part">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="iaa-leadership-hub-video-title">
              <h3>Top Vedio Series</h3>
            </div>
            <div className="iaa-leadership-hub-video-category">
              <select>
                <option>Category</option>
                <option>IAA LeadersView</option>
                <option>Marketing Aide</option>
                <option>Online Conference</option>
                <option>Online Education</option>
              </select>
            </div>
          </div>
          <div className="iaa-leadership-hub-video-wrap">
          <Slider {...settings}>
            {loop.map((item,index) =>{
              return(
                <div class="item">
                <div class="leadership-hub-video-box">
                <img src={r3} height="150px"/>
                <div class="leadership-hub-video-content">
                     <h2><a href="#">IAA Africa Rising</a></h2>
                </div>
                </div>
              </div>
              )

            }

            )
            }
       

  
  
        </Slider>
          </div>
          <div className="clearfix" />
        </div>
      </section>

      <section className="iaa-leadership-hub-video-part" id="video-part">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="iaa-leadership-hub-video-title">
              <h3>Free Series</h3>
            </div>
            <div className="iaa-leadership-hub-video-category">
              <select>
                <option>Category</option>
                <option>IAA LeadersView</option>
                <option>Marketing Aide</option>
                <option>Online Conference</option>
                <option>Online Education</option>
              </select>
            </div>
          </div>
          <div className="iaa-leadership-hub-video-wrap">
          <Slider {...settings}>
            {loop.map((item,index) =>{
              return(
                <div class="item">
                <div class="leadership-hub-video-box">
                <img src={r3} height="150px"/>
                <div class="leadership-hub-video-content">
                     <h2><a href="#">IAA Africa Rising</a></h2>
                </div>
                </div>
              </div>
              )

            }

            )
            }
       

  
  
        </Slider>
          </div>
        </div>
        <div className="clearfix" />
      </section>
      <section className="iaa-leadership-hub-banner">
        <div className="iaa-leadership-hub-banner-box">
          <div className="iaa-leadership-hub-banner-img-box">
            <img src={r4} />
          </div>
          <div className="iaa-leadership-hub-banner-text">
            <div className="container">
              <div className="iaa-leadership-hub-banner-btn-box">
                <a href="#" className="btn iaa-leadership-hub-banner-btn">
                  WATCH NOW
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </section>

      <section className="iaa-leadership-hub-video-part" id="blog-whitepapers-part">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="iaa-leadership-hub-video-title">
              <h3>Free Blogs &amp; Whitepapers</h3>
            </div>
            <div className="iaa-leadership-hub-video-category">
              <select>
                <option>Category</option>
                <option>IAA LeadersView</option>
                <option>Marketing Aide</option>
                <option>Online Conference</option>
                <option>Online Education</option>
              </select>
            </div>
          </div>
          <div className="iaa-leadership-hub-video-wrap">
          <Slider {...settings}>
            {loop.map((item,index) =>{
              return(
                <div className="item">
                <div className="leadership-hub-video-box">
                  <img src={r5} height="175px" />
                  <div className="leadership-hub-video-content">
                    <h2>
                      <a href="#">
                        Digital multi-sensory consumer experience – a Zugzwang
                        strategy of the future
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
              )

            }

            )
            }
  
        </Slider>
           
          </div>
          <div className="clearfix" />
        </div>
      </section>
      <section className="iaa-leadership-hub-video-part" id="blog-whitepapers-part">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="iaa-leadership-hub-video-title">
              <h3>Top Blogs &amp; Whitepapers Current Category</h3>
            </div>
            <div className="iaa-leadership-hub-video-category">
              <select>
                <option>Category</option>
                <option>IAA LeadersView</option>
                <option>Marketing Aide</option>
                <option>Online Conference</option>
                <option>Online Education</option>
              </select>
            </div>
          </div>
          <div className="iaa-leadership-hub-video-wrap">
          <Slider {...settings}>
            {loop.map((item,index) =>{
              return(
                <div className="item">
                <div className="leadership-hub-video-box">
                  <img src={r5} height="175px" />
                  <div className="leadership-hub-video-content">
                    <h2>
                      <a href="#">
                        Digital multi-sensory consumer experience – a Zugzwang
                        strategy of the future
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
              )

            }

            )
            }
  
        </Slider>
          </div>
          <div className="clearfix" />
        </div>
      </section>

      <section className="iaa-leadership-hub-video-part" id="podcasts">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="iaa-leadership-hub-video-title">
              <h3>Free Podcasts</h3>
            </div>
            <div className="iaa-leadership-hub-video-category">
              <select>
                <option>Category</option>
                <option>IAA LeadersView</option>
                <option>Marketing Aide</option>
                <option>Online Conference</option>
                <option>Online Education</option>
              </select>
            </div>
          </div>
          <div className="iaa-leadership-hub-video-wrap">
          <Slider {...settings1}>
            {loop1.map((item,index) =>{
              return(
                <div className="item">
                <div className="leadership-hub-video-box">
                  <img src={r5} height="175px" />
                  <div className="leadership-hub-video-content">
                    <h2>
                      <a href="#">
                        Digital multi-sensory consumer experience – a Zugzwang
                        strategy of the future
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
              )

            }

            )
            }
  
        </Slider>
          </div>
          <div className="clearfix" />
        </div>
      </section>
      <section className="iaa-leadership-hub-podcasts-part" id="podcasts">
        <div className="container">
          <div className="iaa-leadership-hub-podcasts-title">
            <h3>Top Podcasts</h3>
          </div>
          <div className="iaa-leadership-hub-podcasts-category">
            <select>
              <option>Category</option>
              <option>IAA LeadersView</option>
              <option>Marketing Aide</option>
              <option>Online Conference</option>
              <option>Online Education</option>
            </select>
          </div>
          <div className="iaa-leadership-hub-podcasts-wrap">
            <div className="iaa-leadership-hub-podcasts-box">
              <img src={r5} height="150px" />
              <div className="iaa-leadership-hub-podcasts-content">
                <h2>
                  <a href="#">Advocacy in Brands</a>
                </h2>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </section>
      <section className="iaa-leadership-hub-video-part" id="e-books-part">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="iaa-leadership-hub-video-title">
              <h3>Free E-Books</h3>
            </div>
            <div className="iaa-leadership-hub-video-category">
              <select>
                <option>Category</option>
                <option>IAA LeadersView</option>
                <option>Marketing Aide</option>
                <option>Online Conference</option>
                <option>Online Education</option>
              </select>
            </div>
          </div>
          <div className="iaa-leadership-hub-video-wrap">
          <Slider {...settings}>
            {loop.map((item,index) =>{
              return(
                <div className="item">
                <div className="leadership-hub-video-box">
                  <img src={r5} height="175px" />
                  <div className="leadership-hub-video-content">
                    <h2>
                      <a href="#">
                        Digital multi-sensory consumer experience – a Zugzwang
                        strategy of the future
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
              )

            }

            )
            }
  
        </Slider>
          </div>
          <div className="clearfix" />
        </div>
      </section>
      <section className="iaa-leadership-hub-podcasts-part" id="e-books-part">
        <div className="container">
          <div className="iaa-leadership-hub-podcasts-title">
            <h3>Top E-Books</h3>
          </div>
          <div className="iaa-leadership-hub-podcasts-category">
            <select>
              <option>Category</option>
              <option>IAA LeadersView</option>
              <option>Marketing Aide</option>
              <option>Online Conference</option>
              <option>Online Education</option>
            </select>
          </div>
          <div className="iaa-leadership-hub-podcasts-wrap">
            <div className="iaa-leadership-hub-podcasts-box">
              <img src={r5} height="250px" />
              <div className="iaa-leadership-hub-podcasts-content">
                <h2>
                  <a href="#">
                    Episode 3 | Regulatory affairs in Advertising | Ghana
                  </a>
                </h2>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </section>
      <section className="iaa-leadership-hub-video-part" id="Presentations-part">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="iaa-leadership-hub-video-title">
              <h3>Free Presentations</h3>
            </div>
            <div className="iaa-leadership-hub-video-category">
              <select>
                <option>Category</option>
                <option>IAA LeadersView</option>
                <option>Marketing Aide</option>
                <option>Online Conference</option>
                <option>Online Education</option>
              </select>
            </div>
          </div>
          <div className="iaa-leadership-hub-video-wrap">
          <Slider {...settings}>
            {loop.map((item,index) =>{
              return(
                <div className="item">
                <div className="leadership-hub-video-box">
                  <img src={r5} height="175px" />
                  <div className="leadership-hub-video-content">
                    <h2>
                      <a href="#">
                        Digital multi-sensory consumer experience – a Zugzwang
                        strategy of the future
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
              )

            }

            )
            }
  
        </Slider>
          </div>
          <div className="clearfix" />
        </div>
      </section>

      <section className="iaa-leadership-hub-podcasts-part" id="Presentations-part">
        <div className="container">
          <div className="iaa-leadership-hub-podcasts-title">
            <h3>Top Presentations</h3>
          </div>
          <div className="iaa-leadership-hub-podcasts-category">
            <select>
              <option>Category</option>
              <option>IAA LeadersView</option>
              <option>Marketing Aide</option>
              <option>Online Conference</option>
              <option>Online Education</option>
            </select>
          </div>
          <div className="iaa-leadership-hub-podcasts-wrap">
            <div className="iaa-leadership-hub-podcasts-box">
              <img src={r5} height="150px" />
              <div className="iaa-leadership-hub-podcasts-content">
                <h2>
                  <a href="#">Breakthrough to Your Audience with Google</a>
                </h2>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Leadershiphub