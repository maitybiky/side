import React from 'react'
import events1 from "../images/a1.jpg";
import events2 from "../images/b1.jpg";

export default function upcomning() {
  return (
    <div>
        <section className="upcoming-events">
    <div className="container">
      <div className="upcoming-cnt">
        <div className="upcoming-cnt-lft">
          <h2>Upcoming Events</h2>
        </div>
        <div className="upcoming-cnt-rgt">
          <a href="#">View All</a>
        </div>
        <div className="upcoming-cadlog">
          <div className="upcoming-img">
            <a href="#">
              <img src={events1} />
              <div className="upcoming-img-overlay" />
              <div className="upcoming-img-text">
                <h3>
                  BACK TO HUMAN TOUCH IN COMMUNICATION
                  <br /> CREATIVITY 4 BETTER IAA GLOBAL CONFERENCE
                </h3>
              </div>
            </a>
          </div>
          <div className="upcoming-img">
            <a href="#">
              <img src={events2} />
              <div className="upcoming-img-overlay" />
              <div className="upcoming-img-text">
                <h3>
                  IAA AFRICA RISING5 AN IAA LEADERSHIP
                  <br /> CONFERENCE
                </h3>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="clear"/>
    </div>
  </section>
    </div>
  )
}
