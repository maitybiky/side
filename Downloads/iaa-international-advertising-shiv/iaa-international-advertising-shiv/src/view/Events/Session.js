import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gg from "../../images/Rectangle 1686.png";
import user from "../../images/Ellipse 1.png";
import user2 from "../../images/Ellipse 291.png";
import Engageimg from "../../component/Engageimg";
import Engageimg2 from "../../component/Engageimg2";
import { useParams } from "react-router-dom";
import momentT from 'moment-timezone';
import HttpClient from "../../utils/HttpClient";
export default function Session() {
  const { id } = useParams();
  const [eventData, seteEventData] = useState({});
  const [session, seteSession] = useState([]);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const loop = [1, 2, 3];
  const loop1 = [1, 2];
  const loop2 = [1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    fetchSingleEvent();
  }, []);

  const fetchSingleEvent = () => {
    let result = HttpClient.requestData("event/single", "POST", {
      id: id,
    }).then((res) => {
      seteEventData(res.data);
      seteSession(res.data.sessions);

      console.log(res);
      console.log(res.data.sessions);
    });
  };
  return (
    <>
      <div className="session-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12 session-wrap">
              <img src={gg} className="img-fluid" />
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    data-target="#driver"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Overview
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    data-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Sessions
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="contact-tab"
                    data-toggle="tab"
                    data-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Host & Speakers
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="contact-tab"
                    data-toggle="tab"
                    data-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Sponsors
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="diver"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <h3>About this event</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>

                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32.
                  </p>

                  <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                    also reproduced in their exact original form, accompanied by
                    English versions from the 1914 translation by H. Rackham.
                  </p>
                  <hr></hr>
                  <div
                    className="session-upcomning-part d-flex"
                    style={{ margin: "20px 0" }}
                  >
                    <div className="session-heading">Sessions</div>
                    <div class="dropdown">
                      <button
                        class="btn  dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Up coming
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                    <div className="feb-month-wrap d-flex">
                      <div className="feb-month feb-month-sideborder">
                        <p>12</p>
                        <h6>Feb</h6>
                        <span className="feb-month-sideborder"></span>
                      </div>
                      <div className="feb-month feb-month-sideborder">
                        <p>12</p>
                        <h6>Feb</h6>
                      </div>
                      <div className="feb-month feb-month-sideborder">
                        <p>12</p>
                        <h6>Feb</h6>
                      </div>
                      <div className="feb-month feb-month-sideborder">
                        <a className="btn">
                          <p>12</p>
                          <h6>Feb</h6>
                        </a>
                      </div>
                      <div className="feb-month feb-month-sideborder">
                        <p>12</p>
                        <h6>Feb</h6>
                      </div>
                      <div className="feb-month">
                        <p>12</p>
                        <h6>Feb</h6>
                      </div>
                    </div>
                  </div>
                  {session?.map((item) => {
                    return (
                      <div className="row events1-wrap">
                        <div className="col-md-4 col-12">
                          <img
                            src={item.images[0].preview}
                            className="img-fluid events_img"
                          />
                          <div
                            className="speaker-about-box d-flex"
                            style={{ marginTop: "20px" }}
                          >
                            <div className="speaker-about d-flex speaker-about-detail">
                              <div>
                                <h6 className="ceo-content">Start Time</h6>
                                <h6>
                                  <strong>
                        {momentT(eventData.end_date).tz(eventData.time_formate.utc[0]).format('MMM Do')}
{"   "}
                                    {item.start_time}
                                    </strong>
                                </h6>
                              </div>
                            </div> 
                            <div className="speaker-about d-flex speaker-about-detail">
                              <div>
                                <h6 className="ceo-content">End Time</h6>
                                <h6>
                                  <strong>{item.end_date}</strong>
                                </h6>
                              </div>
                            </div>
                            {/* {loop1.map((item) => {
                                                            return (
        
                                                                <div className='speaker-about d-flex speaker-about-detail'>
        
                                                                    <div>
                                                                        <h6 className='ceo-content'>Start Time</h6>
                                                                        <h6><strong>{item.start_time}</strong></h6>
        
                                                                    </div>
                                                                </div>
        
                                                            )
                                                        }
        
                                                        )}; */}
                          </div>
                        </div>
                        <div className="col-md-8 col-12">
                          <div className="inspire-box">
                            <h4>{item.name}</h4>
                            <a href="#" className="register-btn">
                              Upcomning
                            </a>
                          </div>

                          <a href="#" className="james">
                            <i
                              className="fa fa-calendar-minus-o"
                              aria-hidden="true"
                            ></i>
                            28 Oct - 2 Nov | Hosted By{" "}
                            <span> James Dentley</span>
                          </a>
                          <div>
                            <h4>Speakers</h4>
                            <a className="icon-bundle">
                              <i
                                className="fa fa-angle-left"
                                aria-hidden="true"
                              ></i>
                              |
                              <i
                                class="fa fa-angle-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                          <div className="speaker-about-box d-flex">
                            {item.speakers.map((item) => {
                              return (
                                <div className="speaker-about d-flex speaker-about-detail">
                                  <div>
                                    <a href="#">
                                      <img src={item.images[0].preview
} />
                                    </a>
                                  </div>
                                  <div>
                                    <h6>
                                      <strong>{item.name}</strong>
                                    </h6>
                                    <h6 className="ceo-content">
                                      CEO, OLX Org.
                                    </h6>
                                  </div>
                                </div>
                              );
                            })}
                            ;
                          </div>
                          <div>
                            <h4>Sponsors</h4>
                          </div>
                          <div className="speaker-about-box2 d-flex">
                            {loop.map((item) => {
                              return (
                                <div className="speaker-about-repeat d-flex speaker-about-detail">
                                  <div>
                                    <a href="#">
                                      <img src={user2} />
                                    </a>
                                  </div>
                                </div>
                              );
                            })}
                            ;
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <h2 style={{ margin: "20px 0" }}>Host & Speakers</h2>
                  <Slider {...settings}>
                    {loop2.map((item) => {
                      return <Engageimg />;
                    })}
                  </Slider>
                  <h2 style={{ margin: "20px 0" }}>Sponsors</h2>
                  <Slider {...settings}>
                    {loop2.map((item) => {
                      return <Engageimg2 />;
                    })}
                  </Slider>
                </div>
                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
