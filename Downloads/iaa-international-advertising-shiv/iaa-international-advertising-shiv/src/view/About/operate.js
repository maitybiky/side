import React from 'react'
import  Upcomning from "../../component/upcomning";
import Iaanews from "../../component/iaanews";
import iconimg from "../../images/flipboard.png";
import h1 from "../../images/ope-banner.jpg";
export default function operate() {
  return (
    <div>
        <section className="how-we-operate">
  <div className="container">
    <div className="we-operate-cnt">
      <div className="we-operate-cnt-lft">
        <h2>HOW WE OPERATE</h2>
      </div>
      <div className="we-operate-cnt-rgt">
        <div className="share">
          <label className="share_label">Share:</label>
          <a href="#">
            <i className="fa fa-facebook-official" aria-hidden="true" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>
          <a href="#">
            <i className="fa fa-linkedin" aria-hidden="true" />
          </a>
          <a href="#">
          <img src={iconimg}/>
          </a>
        </div>
      </div>
    </div>
    <div className="we-operate-img">
      <img src={h1} />
    </div>
    <div className="we-operate-text">
      <p>
        The IAA operates at three levels: central, regional and
        national/local.In addition, we have a number of worldwide officers,
        which are crucial to the running of the IAA. Being a non-profit making
        association, the majority of our management are association members who
        work on a voluntary basis, regardless of the level.
      </p>
      <h4>Worldwide officers</h4>
      <p>
        We have three important bodies that are crucial to the running of the
        organization. These are:
      </p>
      <ul>
        <li>The Board of Directors</li>
        <li>The Executive Committee</li>
        <li>Vice-Presidents.</li>
      </ul>
      <h4>The IAA Board of Directors</h4>
      <p>
        The IAA Board of Directors is the IAA’s main governing body, making
        major decisions on the strategy and future direction of the Association.
        The Senior Vice President, the Secretary and Treasurer are elected by
        the IAA World Board, representing the worldwide membership, every two
        years, when the current Senior Vice President succeeds as Chairman and
        World President. The Board meets at least one time a year. To view our
        current Board of Directors directory,{" "}
        <strong>
          <a href="#" style={{ color: "black" }}>
            Click Here
          </a>
        </strong>
      </p>
      <h4>The IAA Executive Committee</h4>
      <p>
        The IAA Executive Committee is a body that presents major strategic
        recommendations for the Board’s approval. The Executive Committee meets
        quarterly in the name of the Board of Directors. To view our current
        Executive Committee officers directory,{" "}
        <strong>
          <a href="#" style={{ color: "black" }}>
            Click Here
          </a>
        </strong>
      </p>
      <h4>Vice Presidents</h4>
      <p>
        In addition to the officers on the Executive Committee and the Board of
        Directors, the Chairman and World President also appoint a number of
        Vice-Presidents who are responsible for a variety of portfolios. To view
        our current Vice Presidents' directory,{" "}
        <strong>
          <a href="#" style={{ color: "black" }}>
            Click Here
          </a>
        </strong>
      </p>
      <h4>Regional level</h4>
      <p>
        The Association is split into five worldwide regions, with an elected
        Vice President/Area Director (VP/AD) in each. The Vice President/Area
        Director is a key role; it is the catalyst for the region. VP/ADs work
        closely with the Presidents of the local Chapters, their officers and
        committees through regular contact and visits, stimulating
        local/national events and activities and coordinating regional events in
        line with the IAA's mission. To view our current Vice President/Area
        Directors' directory,{" "}
        <strong>
          <a href="#" style={{ color: "black" }}>
            Click Here
          </a>
        </strong>
      </p>
      <p>
        <strong>
          To view the list of our past Presidents, Chairmen, Conferences etc.,{" "}
          <a href="#" style={{ color: "black" }}>
            Click Here
          </a>
        </strong>
      </p>
    </div>
    <div className="clear" />
  </div>
</section>
<Upcomning/>
<Iaanews/>
    </div>
  )
}
