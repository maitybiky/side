import React from 'react'
import chatimg from "../../images/Ellipse 1.png";
import imo1 from "../../images/emoji.png";
import imo2 from "../../images/attachment.png";
function index() {
  return (
    <section className="chat_mainpage clearfix">
      <div className="container">

        <div className="">
          <div className="chat_mainpage__tabs">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  <i className="fa fa-address-card" aria-hidden="true" />
                  <span>Session</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  <i className="fa fa-calendar-check-o" aria-hidden="true" />
                  <span>Event</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-contact-tab"
                  data-toggle="pill"
                  href="#pills-contact"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  <i className="fa fa-users" aria-hidden="true" />
                  <span>Participants</span>
                </a>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              {/*----------*/}
              <div
                className="tab-pane fade"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                .....Check....
              </div>
              {/*----------*/}
              <div
                className="tab-pane fade show active"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="d-flex justify-content-between" style={{ margin: "20px 0" }}>
                  <div className="Event_chating d-flex">
                    <div className="Event_chating-img mr-2">
                      <img src={chatimg} />
                    </div>
                    <div className="Event_chating-chat">
                      <h6>Jenny</h6>
                      <p>Hey Everyone this is jenny hope all are fine?</p>
                    </div>
                  </div>
                  <div className="Event_chating__time">
                    <span>8:30</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between" style={{ margin: "20px 0" }}>
                  <div className="Event_chating d-flex">
                    <div className={chatimg}>
                      <img src={chatimg} />
                    </div>
                    <div className="Event_chating-chat">
                      <h6>fernandez</h6>
                      <p>
                        Loerm Ipsum chatting here for ui ux guide hen ten ellectde
                        normal form of them had a very good event
                      </p>
                    </div>
                  </div>
                  <div className="Event_chating__time">
                    <span>18:58</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between" style={{ margin: "20px 0" }}>
                  <div className="Event_chating d-flex">
                    <div className="Event_chating-img mr-2">
                      <img src={chatimg} />
                    </div>
                    <div className="Event_chating-chat">
                      <h6>Roddrigez</h6>
                      <p>
                        Hey, I was wondering if james talks about the
                        happieness...
                      </p>
                    </div>
                  </div>
                  <div className="Event_chating__time">
                    <span>18:58</span>
                  </div>
                </div>
                {/*--my chat----*/}
                <div className="d-flex justify-content-between" style={{ margin: "20px 0" }}>
                  <div className="Event_chating__time">
                    <span>18:58</span>
                  </div>
                  <div className="Event_chating d-flex">
                    <div className="Event_chating-me">
                      <p>hen ten ellectde normal form of them</p>
                    </div>
                    <div className="Event_chating-img mr-2" />
                  </div>
                </div>
                <div className="d-flex justify-content-between" style={{ margin: "20px 0" }}>
                  <div className="Event_chating__time">
                    <span>18:58</span>
                  </div>
                  <div className="Event_chating d-flex">
                    <div className="Event_chating-me">
                      <p>
                        Hey, I was wondering if james talks about the
                        happieness...
                      </p>
                    </div>
                    <div className="Event_chating-img mr-2" />
                  </div>
                </div>
                {/*-*/}
                <div className="d-flex justify-content-between" style={{ margin: "20px 0" }}>
                  <div className="Event_chating d-flex">
                    <div className="Event_chating-img mr-2">
                      <img src={chatimg} />
                    </div>
                    <div className="Event_chating-chat">
                      <h6>fernandez</h6>
                      <p>
                        Loerm Ipsum chatting here for ui ux guide hen ten ellectde
                        normal form of them
                      </p>
                    </div>
                  </div>
                  <div className="Event_chating__time">
                    <span>18:58</span>
                  </div>
                </div>
                {/*--my chat----*/}
                <div className="d-flex justify-content-between" style={{ margin: "20px 0" }}>
                  <div className="Event_chating__time">
                    <span>18:58</span>
                  </div>
                  <div className="Event_chating d-flex">
                    <div className="Event_chating-me">
                      <p>
                        Hey, I was wondering if james talks about the
                        happieness...
                      </p>
                    </div>
                    <div className="Event_chating-img mr-2" />
                  </div>
                </div>
                {/*-*/}
                <div className="d-flex justify-content-between" style={{ margin: "20px 0" }}>
                  <div className="Event_chating d-flex">
                    <div className="Event_chating-img mr-2">
                      <img src={chatimg} />
                    </div>
                    <div className="Event_chating-chat">
                      <h6>fernandez</h6>
                      <p>Typing...</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*----------*/}
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                .....Check....
              </div>
              <div className="my_typeimg_section">
                <div className="my_typeimg_btn">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Discuss your thought with people"
                  />
                  {/* <a href="#" className="attachment___icon">
                    <img src={imo2} />
                  </a> */}
                  <label className="form_label gallery-input">
                    <img
                      src={imo2}
                      alt=""
                     
                    />
                    <input type="file" className="form-control" id="uploadFile"/>
                 
                    <label></label>
                  </label>
                  <a href="#" className="emoji___icon">
                    <img src={imo1} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}

export default index