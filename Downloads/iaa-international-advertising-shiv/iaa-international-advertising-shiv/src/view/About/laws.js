import React from 'react'
import iconimg from "../../images/flipboard.png";
import Upcomning from "../../component/upcomning";
import Iaanews from "../../component/iaanews";
import l2 from "../../images/lawsimg.jpg";

export default function laws() {
  return (
    <div>
        <section className="bylaws-page">
  <div className="container">
    <div className="bylaws-page-cnt">
      <div className="bylaws-page-cnt-lft">
        <h2>By Laws</h2>
      </div>
      <div className="bylaws-page-cnt-rgt">
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
    <div className="bylaws-page-img">
      <img src={l2} />
    </div>
    <div className="bylaws-page-text">
      <p>
        IAA's Bylaws serve as a roadmap for the organization's actions and also
        contain the fundamental principles of the association. The IAA's Bylaws
        govern a list of crucial topics including Purpose, Membership, Chapters,
        The Board of Directors, The Executive Committee, Elections, Duties etc.
      </p>
      <p>To view the IAA By-laws, click on the link below</p>
      <a href="#">View IAA By-Laws</a>
    </div>
    <div className="clear" />
  </div>
</section>
<Upcomning/>
<Iaanews/>
    </div>
  )
}
