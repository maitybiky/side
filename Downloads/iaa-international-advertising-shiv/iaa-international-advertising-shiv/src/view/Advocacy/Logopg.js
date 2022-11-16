import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import r10 from "../../images/slider_two.webp";
import r11 from "../../images/latest_ads1.webp";
import r13 from "../../images/B.webp";
import dd from "../../images/andy.webp";
import db from "../../images/dd.webp";
import dc from "../../images/latest_awardvideo.webp";
import de from "../../images/video_icons.svg";
import df from "../../images/forum1.webp";
import dg from "../../images/checkout.jpg"

export default function Logopg() {
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
  const loop = [1, 2, 3, 4, 5, 6, 7, 8]
  const settings1 = {

    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
  var settings2 = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const slideData = [1, 2];
  return (
    <div>
      <div className="slider__Back pb-2">
        <Slider {...settings}>
          {loop.map((item, index) => {
            return (
              <div className="element element-1">
                <div className="video__Slider">
                  <h2 className="slider__Title">TURBO-charged small agencies </h2>
                  <div className="video__SLiderInner">
                    <a href="">
                      <img src={r10} className="img-fluid" />
                      <div className="icons__Video" onclick="start()">
                        <img src="./assets/image/video_icons.svg" alt="" className="img-fluid" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            )

          }

          )
          }

        </Slider>

      </div>
      {/* Slider End */}
      {/* Filter Section Start */}
      <div className="filter__Section">
        <div className="container">
          <h1 className="world__aroundtext">
            200 000+ Ad campaigns &amp; case studies from around the world.
          </h1>
          <div className="row">
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 offset-lg-1 column__Filter">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Brand" />
                <span className="bi bi-search search_icons" />
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 column__Filter">
              <div className="form-group">
                <div className="dropdown">
                  <button
                    className="form-control d-flex align-items-center justify-content-between"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="tag__Name">Media</span>
                    <i className="bi bi-caret-down-fill dropdown_Icons" />
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      Test
                    </a>
                    <a className="dropdown-item" href="#">
                      Test
                    </a>
                    <a className="dropdown-item" href="#">
                      Test
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 column__Filter">
              <div className="form-group">
                <div className="dropdown">
                  <button
                    className="form-control d-flex align-items-center justify-content-between"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="tag__Name">Country</span>
                    <i className="bi bi-caret-down-fill dropdown_Icons" />
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      Test
                    </a>
                    <a className="dropdown-item" href="#">
                      Test
                    </a>
                    <a className="dropdown-item" href="#">
                      Test
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 column__Filter">
              <div className="form-group">
                <div className="dropdown">
                  <button
                    className="form-control d-flex align-items-center justify-content-between"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="tag__Name">Business Sector</span>
                    <i className="bi bi-caret-down-fill dropdown_Icons" />
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      Test
                    </a>
                    <a className="dropdown-item" href="#">
                      Test
                    </a>
                    <a className="dropdown-item" href="#">
                      Test
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-4 col-sm-6 col-12  column__Filterbtn">
              <div className="form-group">
                <button className="btn btn__Search">Search</button>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 offset-lg-1 column__Filter">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Agency Name"
                />
                <span className="bi bi-search search_icons" />
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 column__Filter">
              <div className="form-group">
                <div className="dropdown">
                  <button
                    className="form-control d-flex align-items-center justify-content-between"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="tag__Name">Awards</span>
                    <i className="bi bi-caret-down-fill dropdown_Icons" />
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      Test
                    </a>
                    <a className="dropdown-item" href="#">
                      Test
                    </a>
                    <a className="dropdown-item" href="#">
                      Test
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 column__Filter">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Production Companies"
                />
                <span className="bi bi-search search_icons" />
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 column__Filter">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="People Credits"
                />
                <span className="bi bi-search search_icons" />
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 offset-lg-1 column__Filter">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Advertiser"
                />
                <span className="bi bi-search search_icons" />
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 column__Filter">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ad Title"
                />
                <span className="bi bi-search search_icons" />
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 column__Filter">
              <div className="form-group">
                <div className="dropdown">
                  <button
                    className="form-control d-flex align-items-center justify-content-between"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="tag__Name">Year</span>
                    <i className="bi bi-caret-down-fill dropdown_Icons" />
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      Test
                    </a>
                    <a className="dropdown-item" href="#">
                      Test
                    </a>
                    <a className="dropdown-item" href="#">
                      Test
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 column__Filter">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Keyword" />
                <span className="bi bi-search search_icons" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <a href="/info/pricing/creative-library" className="link-add-agency">
                <i className="fa fa-lg fa-arrow-right" /> Subscribe to Creative
                Library
              </a>
              <a href="/public/uploader" className="link-add-agency ml-sm-4">
                <i className="fa fa-lg fa-arrow-right" /> Submit an Ad
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Filter Section ENd */}
      {/* Latest Ads Start */}
      <div className="latest__Ads">
        <h2 className="b-popular-title text-center">Latest Ads</h2>
        <div className="container">
          <Slider {...settings}>
            {loop.map((item, index) => {
              return (
                <div className="element element-1">
                  <div className="img___Ads">
                    <a href="">
                      <img
                        src={r11}
                        alt="logopg1"
                        className="img-fluid"
                      />
                      <div className="video_icons__ads">
                        <img
                          src="./assets/image/video_icons.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="caption__element">
                    <h3>
                      <a href="">Usher x 1738 AI Powered Limited Edition Bottle</a>
                    </h3>
                    <div className="brand__text">
                      <span>Brand:</span>
                      <a href="/creative-work/search?brand=Heinz" rel="">
                        Remy Martin
                      </a>
                    </div>
                    <div className="agency__text">
                      <span>Agency:</span>
                      FRED &amp; FARID New York
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
      {/* Latest Ads End */}
      {/* Latest Award Winners Start */}
      <div className="container" style={{marginTop:"40px",marginBottom:"40px"}}>
        <div className="row">
          <div className="col-md-12 col-lg-8 col-xl-8 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="latest_Awardwinners">
                  <div className="d-block d-sm-flex d_flex align-items-center justify-content-between mb-3">
                    <h3>Latest Award Winners</h3>
                    <a href="">
                      See More <span className="fa fa-long-arrow-right" />
                    </a>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-6 mb-3 mb-md-0 px-2">
                      <div className="card award__column">
                        <div className="card-body p-0">
                          <div className="media">
                            <img
                              src={dd}
                              alt="Award Image"
                              className="img-fluid awards_image"
                            />
                            <div className="media-body ml-2">
                              <a href="">D&amp;AD Awards</a>
                            </div>
                          </div>
                          <div className="column__count">
                            <div className="column_countInner">
                              <a href="">
                                <img
                                  src={dc}
                                  alt="Award Video"
                                  className="img-fluid"
                                />
                                <div className="column_countInnercaption">
                                  <img
                                    src={de}
                                    alt="Award Video"
                                    className="img-fluid"
                                  />
                                </div>
                              </a>
                            </div>
                            <div className="caption__columncount">
                              <a href="">A letter to myself</a>
                              <div className="brand__text">
                                <span>Brand:</span>
                                <a href="/creative-work/search?brand=Heinz" rel="">
                                  Santé publique France
                                </a>
                              </div>
                              <div className="agency__text">
                                <span>Agency:</span>
                                <a href="">FRED &amp; FARID New York</a>
                              </div>
                              <button className="btn btn-block see__More_winnerbtn">
                                See more winners
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6 mb-3 mb-md-0 px-2">
                      <div className="card award__column">
                        <div className="card-body p-0">
                          <div className="media">
                            <img
                              src={db}
                              alt="Award Image"
                              className="img-fluid awards_image"
                            />
                            <div className="media-body">
                              <a href="">D&amp;AD Awards</a>
                            </div>
                          </div>
                          <div className="column__count">
                            <div className="column_countInner">
                              <a href="">
                                <img
                                  src={dc}
                                  alt="Award Video"
                                  className="img-fluid"
                                />
                                <div className="column_countInnercaption">
                                  <img
                                    src={de}
                                    alt="Award Video"
                                    className="img-fluid"
                                  />
                                </div>
                              </a>
                            </div>
                            <div className="caption__columncount">
                              <a href="">A letter to myself</a>
                              <div className="brand__text">
                                <span>Brand:</span>
                                <a href="/creative-work/search?brand=Heinz" rel="">
                                  Remy Martin
                                </a>
                              </div>
                              <div className="agency__text">
                                <span>Agency:</span>
                                <a href="">FRED &amp; FARID New York</a>
                              </div>
                              <button className="btn see__More_winnerbtn">
                                See more winners
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4 col-xl-4 mb-3 p-xl-0">
            <div className="Best__ADFORuM">
              <div className="Best__ADFORuM_Inner">
                <h2>BEST OF...</h2>
                <a href="">AdForum Cannes Predictions Reel 2022</a>
              </div>
              <div className="Best__ADFORuM_Inner_caption">
                <Slider {...settings2}>
                  {slideData.map((item, index) => {
                    return (
                      <div className="element element-1" style={{margin:"0 10px"}}>
                        <div className="forum__sliderinner">
                          <img
                            src={df}
                            alt="Ads"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    );
                  })}
                </Slider>
               
                <div className="button_Seemore">
                  <button className="btn btn-block">See more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Latest Award Winners ENd */}
      {/* Featured Profiles Start */}
      <div className="featured__Profiles  mb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex d-xl-flex flex-wrap align-items-center justify-content-between">
                    <div className="mb-3">
                      <h2 className="m-0">Featured Profiles</h2>
                    </div>
                    <div className="mb-3">
                      <ul
                        className="nav first_nav nav-tabs"
                        id="myTabone"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="agenttabcontent"
                            data-toggle="tab"
                            href="#agenycontent"
                            role="tab"
                            aria-controls="agenycontent"
                            aria-selected="true"
                          >
                            Agency
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="production__company"
                            data-toggle="tab"
                            href="#production_com"
                            role="tab"
                            aria-controls="production_com"
                            aria-selected="false"
                          >
                            Production Company
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mb-3">
                      <a href="" className="seemoreanchor">
                        See more profiles{" "}
                        <span className="fa fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="tab-content px-sm-3 px-0" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="agenycontent"
                      role="tabpanel"
                      aria-labelledby="agenttabcontent"
                    >
                      <div className="">
                        <ul
                          className="nav sec__nav nav-tabs"
                          id="myTab1"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="allcontent"
                              data-toggle="tab"
                              href="#allcontenttab"
                              role="tab"
                              aria-controls="allcontenttab"
                              aria-selected="true"
                            >
                              All
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="recentlyupdated"
                              data-toggle="tab"
                              href="#recentlyupdatedtab"
                              role="tab"
                              aria-controls="recentlyupdatedtab"
                              aria-selected="false"
                            >
                              Recently updated
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content" id="myTabContent_Two">
                          <div
                            className="tab-pane fade show active tab___Slider"
                            id="allcontenttab"
                            role="tabpanel"
                            aria-labelledby="allcontent"
                          >
                            <Slider {...settings1}>
                              {loop.map((item, index) => {
                                return (
                                  <div className="item">
                                    <div className="card">
                                      <div className="card-body p-0">
                                        <div className="d-flex align-items-center justify-content-center m-0">
                                          <div className="brand__img d-flex align-items-center justify-content-center m-0">
                                            <img
                                              src={r13}
                                              alt=""
                                              className="img-fluid"
                                            />
                                          </div>
                                        </div>
                                        <div className="caption__Brand">
                                          <a href="" className="brand__title">
                                            Ogilvy South Africa
                                          </a>
                                          <h5>New York, United States</h5>
                                          <a href="" className="brand__Service">
                                            Full Service
                                          </a>
                                        </div>
                                        <button
                                          type="button"
                                          className="btn btn-follow btn-block btn-xs js-follow-button"
                                        >
                                          Follow
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                )

                              }

                              )
                              }

                            </Slider>
                            
                          </div>
                          <div
                            className="tab-pane"
                            id="recentlyupdatedtab"
                            role="tabpanel"
                            aria-labelledby="recentlyupdated"
                          >
                            <div
                              className="owl-carousel tab___Slider owl-theme"
                              id="owl__Carouseltwo"
                            >
                              <div className="item">
                                <div className="card">
                                  <div className="card-body p-0">
                                    <div className="d-flex align-items-center justify-content-center m-0">
                                      <div className="brand__img d-flex align-items-center justify-content-center m-0">
                                        <img
                                          src="./assets/image/paris.webp"
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                    </div>
                                    <div className="caption__Brand">
                                      <a href="" className="brand__title">
                                        Ogilvy South Africa
                                      </a>
                                      <h5>New York, United States</h5>
                                      <a href="" className="brand__Service">
                                        Full Service
                                      </a>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-follow btn-block btn-xs js-follow-button"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                <div className="card">
                                  <div className="card-body p-0">
                                    <div className="d-flex align-items-center justify-content-center m-0">
                                      <div className="brand__img d-flex align-items-center justify-content-center m-0">
                                        <img
                                          src="./assets/image/mullen.webp"
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                    </div>
                                    <div className="caption__Brand">
                                      <a href="" className="brand__title">
                                        Ogilvy South Africa
                                      </a>
                                      <h5>New York, United States</h5>
                                      <a href="" className="brand__Service">
                                        Full Service
                                      </a>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-follow btn-block btn-xs js-follow-button"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                <div className="card">
                                  <div className="card-body p-0">
                                    <div className="d-flex align-items-center justify-content-center m-0">
                                      <div className="brand__img d-flex align-items-center justify-content-center m-0">
                                        <img
                                          src="./assets/image/B.webp"
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                    </div>
                                    <div className="caption__Brand">
                                      <a href="" className="brand__title">
                                        Ogilvy South Africa
                                      </a>
                                      <h5>New York, United States</h5>
                                      <a href="" className="brand__Service">
                                        Full Service
                                      </a>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-follow btn-block btn-xs js-follow-button"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                <div className="card">
                                  <div className="card-body p-0">
                                    <div className="d-flex align-items-center justify-content-center m-0">
                                      <div className="brand__img d-flex align-items-center justify-content-center m-0">
                                        <img
                                          src="./assets/image/B.webp"
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                    </div>
                                    <div className="caption__Brand">
                                      <a href="" className="brand__title">
                                        Ogilvy South Africa
                                      </a>
                                      <h5>New York, United States</h5>
                                      <a href="" className="brand__Service">
                                        Full Service
                                      </a>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-follow btn-block btn-xs js-follow-button"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                <div className="card">
                                  <div className="card-body p-0">
                                    <div className="d-flex align-items-center justify-content-center m-0">
                                      <div className="brand__img d-flex align-items-center justify-content-center m-0">
                                        <img
                                          src="./assets/image/B.webp"
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                    </div>
                                    <div className="caption__Brand">
                                      <a href="" className="brand__title">
                                        Ogilvy South Africa
                                      </a>
                                      <h5>New York, United States</h5>
                                      <a href="" className="brand__Service">
                                        Full Service
                                      </a>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-follow btn-block btn-xs js-follow-button"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane"
                      id="production_com"
                      role="tabpanel"
                      aria-labelledby="production__company"
                    >
                      <div className="">
                        <ul
                          className="nav sec__nav nav-tabs"
                          id="myTabtwo"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="allcontenttwo"
                              data-toggle="tab"
                              href="#allcontenttabtwo"
                              role="tab"
                              aria-controls="allcontenttabtwo"
                              aria-selected="true"
                            >
                              All
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="recentlyupdatedtwo"
                              data-toggle="tab"
                              href="#recentlyupdatedtabtwo"
                              role="tab"
                              aria-controls="recentlyupdatedtabtwo"
                              aria-selected="false"
                            >
                              Recently updated
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content" id="myTabContent_Two">
                          <div
                            className="tab-pane fade show active"
                            id="allcontenttabtwo"
                            role="tabpanel"
                            aria-labelledby="allcontenttwo"
                          >
                            <div
                              className="owl-carousel tab___Slider owl-theme"
                              id="owl__Carouselthree"
                            >
                              <div className="item">
                                <div className="card">
                                  <div className="card-body p-0">
                                    <div className="d-flex align-items-center justify-content-center m-0">
                                      <div className="brand__img d-flex align-items-center justify-content-center m-0">
                                        <img
                                          src="./assets/image/brain.webp"
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                    </div>
                                    <div className="caption__Brand">
                                      <a href="" className="brand__title">
                                        Ogilvy South Africa
                                      </a>
                                      <h5>New York, United States</h5>
                                      <a href="" className="brand__Service">
                                        Full Service
                                      </a>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-follow btn-block btn-xs js-follow-button"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                <div className="card">
                                  <div className="card-body p-0">
                                    <div className="d-flex align-items-center justify-content-center m-0">
                                      <div className="brand__img d-flex align-items-center justify-content-center m-0">
                                        <img
                                          src="./assets/image/vccp.webp"
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                    </div>
                                    <div className="caption__Brand">
                                      <a href="" className="brand__title">
                                        Ogilvy South Africa
                                      </a>
                                      <h5>New York, United States</h5>
                                      <a href="" className="brand__Service">
                                        Full Service
                                      </a>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-follow btn-block btn-xs js-follow-button"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                <div className="card">
                                  <div className="card-body p-0">
                                    <div className="d-flex align-items-center justify-content-center m-0">
                                      <div className="brand__img d-flex align-items-center justify-content-center m-0">
                                        <img
                                          src="./assets/image/B.webp"
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                    </div>
                                    <div className="caption__Brand">
                                      <a href="" className="brand__title">
                                        Ogilvy South Africa
                                      </a>
                                      <h5>New York, United States</h5>
                                      <a href="" className="brand__Service">
                                        Full Service
                                      </a>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-follow btn-block btn-xs js-follow-button"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                <div className="card">
                                  <div className="card-body p-0">
                                    <div className="d-flex align-items-center justify-content-center m-0">
                                      <div className="brand__img d-flex align-items-center justify-content-center m-0">
                                        <img
                                          src="./assets/image/B.webp"
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                    </div>
                                    <div className="caption__Brand">
                                      <a href="" className="brand__title">
                                        Ogilvy South Africa
                                      </a>
                                      <h5>New York, United States</h5>
                                      <a href="" className="brand__Service">
                                        Full Service
                                      </a>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-follow btn-block btn-xs js-follow-button"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                <div className="card">
                                  <div className="card-body p-0">
                                    <div className="d-flex align-items-center justify-content-center m-0">
                                      <div className="brand__img d-flex align-items-center justify-content-center m-0">
                                        <img
                                          src="./assets/image/B.webp"
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                    </div>
                                    <div className="caption__Brand">
                                      <a href="" className="brand__title">
                                        Ogilvy South Africa
                                      </a>
                                      <h5>New York, United States</h5>
                                      <a href="" className="brand__Service">
                                        Full Service
                                      </a>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-follow btn-block btn-xs js-follow-button"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane"
                            id="recentlyupdatedtabtwo"
                            role="tabpanel"
                            aria-labelledby="recentlyupdatedtwo"
                          >
                            <div
                              className="owl-carousel tab___Slider owl-theme"
                              id="owl__Carouselfour"
                            >
                              <div className="item">
                                <div className="card">
                                  <div className="card-body p-0">
                                    <div className="d-flex align-items-center justify-content-center m-0">
                                      <div className="brand__img d-flex align-items-center justify-content-center m-0">
                                        <img
                                          src="./assets/image/ff.webp"
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                    </div>
                                    <div className="caption__Brand">
                                      <a href="" className="brand__title">
                                        Ogilvy South Africa
                                      </a>
                                      <h5>New York, United States</h5>
                                      <a href="" className="brand__Service">
                                        Full Service
                                      </a>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-follow btn-block btn-xs js-follow-button"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                <div className="card">
                                  <div className="card-body p-0">
                                    <div className="d-flex align-items-center justify-content-center m-0">
                                      <div className="brand__img d-flex align-items-center justify-content-center m-0">
                                        <img
                                          src="./assets/image/partnership.webp"
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                    </div>
                                    <div className="caption__Brand">
                                      <a href="" className="brand__title">
                                        Ogilvy South Africa
                                      </a>
                                      <h5>New York, United States</h5>
                                      <a href="" className="brand__Service">
                                        Full Service
                                      </a>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-follow btn-block btn-xs js-follow-button"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                <div className="card">
                                  <div className="card-body p-0">
                                    <div className="d-flex align-items-center justify-content-center m-0">
                                      <div className="brand__img d-flex align-items-center justify-content-center m-0">
                                        <img
                                          src="./assets/image/B.webp"
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                    </div>
                                    <div className="caption__Brand">
                                      <a href="" className="brand__title">
                                        Ogilvy South Africa
                                      </a>
                                      <h5>New York, United States</h5>
                                      <a href="" className="brand__Service">
                                        Full Service
                                      </a>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-follow btn-block btn-xs js-follow-button"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                <div className="card">
                                  <div className="card-body p-0">
                                    <div className="d-flex align-items-center justify-content-center m-0">
                                      <div className="brand__img d-flex align-items-center justify-content-center m-0">
                                        <img
                                          src="./assets/image/B.webp"
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                    </div>
                                    <div className="caption__Brand">
                                      <a href="" className="brand__title">
                                        Ogilvy South Africa
                                      </a>
                                      <h5>New York, United States</h5>
                                      <a href="" className="brand__Service">
                                        Full Service
                                      </a>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-follow btn-block btn-xs js-follow-button"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                <div className="card">
                                  <div className="card-body p-0">
                                    <div className="d-flex align-items-center justify-content-center m-0">
                                      <div className="brand__img d-flex align-items-center justify-content-center m-0">
                                        <img
                                          src="./assets/image/B.webp"
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                    </div>
                                    <div className="caption__Brand">
                                      <a href="" className="brand__title">
                                        Ogilvy South Africa
                                      </a>
                                      <h5>New York, United States</h5>
                                      <a href="" className="brand__Service">
                                        Full Service
                                      </a>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-follow btn-block btn-xs js-follow-button"
                                    >
                                      Follow
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 col-xl-4 mb-3 p-xl-0">
              <img
                src={dg}
                className="img-fluid checkout__IMage"
              />
              <a href="">
                <img
                  src={dg}
                  className="img-fluid checkout__IMage"
                />
              </a>
              <a href="">
                <img
                  src={dg}
                  className="img-fluid checkout__IMage"
                />
              </a>
              <a href="">
                <img
                  src={dg}
                  className="img-fluid checkout__IMage"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Profiles End */}
      {/* Most Popular Start */}
      <div className="container" style={{marginTop:"40px", marginBottom:"40px"}}>
        <h2 className="b-popular-title text-center" style={{marginBottom:"20px"}}>Most Popular</h2>
        <Slider {...settings}>
          {loop.map((item, index) => {
            return (
              <div className="element element-1" >
                <div className="img___Ads">
                  <a href="">
                    <img
                      src={r11}
                      alt="logopg1"
                      className="img-fluid"
                    />
                    <div className="video_icons__ads">
                      <img
                        src="./assets/image/video_icons.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </a>
                </div>
                <div className="caption__element">
                  <h3>
                    <a href="">Usher x 1738 AI Powered Limited Edition Bottle</a>
                  </h3>
                  <div className="brand__text">
                    <span>Brand:</span>
                    <a href="/creative-work/search?brand=Heinz" rel="">
                      Remy Martin
                    </a>
                  </div>
                  <div className="agency__text">
                    <span>Agency:</span>
                    FRED &amp; FARID New York
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
  )
}
