import React from "react";
import l3 from "../../images/award_banner.jpg";
import compassimg from "../../images/compass_award_img.jpg";

export default function iaaawards() {
  return (
    <div>
      <section className="iaa-award-banner">
        <img src={l3} alt="Award Banner" />
      </section>
      <section className="iaa-award-people-compas">
        <div className="container">
          <div className="iaa-award-people-compas-box">
            <p>
              The IAA is primarily a people organisation, and the IAA Compass
              Awards were created to celebrate the high achievers within our
              establishment. Those who have inspired, led by example, and served
              both the IAA and the global marketing communications industry with
              vision, passion, energy and committed action.
            </p>
            <p>
              The IAA is primarily a people organisation, and the IAA Compass
              Awards were created to celebrate the high achievers within our
              establishment. Those who have inspired, led by example, and served
              both the IAA and the global marketing communications industry with
              vision, passion, energy and committed action.
            </p>
          </div>
          <div className="clearfix" />
        </div>
      </section>
      <section className="iaa-award-compas-award">
        <img src={compassimg} alt="Compass Awards" className="img-fluid"/>
      </section>
      <section className="iaa-award-people-compas-second">
        <div className="container">
          <div className="iaa-award-people-compas-second-box">
            <p>
              <strong>
                The seven IAA Compass Award categories acknowledging our
                outstanding leaders and members are:
              </strong>
            </p>
            <ul>
              <li>IAA Golden Compass Award</li>
              <li>IAA Champion Award</li>
              <li>IAA Young Leader Award</li>
              <li>IAA Honorary Life Member</li>
              <li>IAA Chapter Excellence Award</li>
              <li>IAA Young Professionals Chapter Excellence Award</li>
              <li>IAA Executive Director Award</li>
            </ul>
            <p>
              The IAA Compass Awards are usually presented at the IAA World
              Congress or at an IAA global flagship event held annually and
              biennially.
            </p>
            <h5>How To Nominate</h5>
            <p>
              Nominating for each Award is a simple and easy to follow process.
              Each Award occupies its own website page which contains the Award
              brief and criteria, with guidelines for completing nominations for
              that particular award.
            </p>
            <h5>Judging Procedures</h5>
            <p>
              Judging Councils comprising representatives from each IAA region
              evaluate each candidate’s nominations for specific awards,
              individually scoring each submission according to the criteria as
              listed on the nomination forms.
            </p>
            <p>
              Scores are aggregated with the top scoring nominees selected to be
              recipients of each respective award. Award candidates are approved
              by the IAA Executive Committee prior to the recipients being
              finalized.
            </p>
            <p>
              The Judges' decisions are final, and the IAA Global Vice President
              of IAA Compass Awards will advise the honorees selected for each
              award.
            </p>
          </div>
          <div className="clearfix" />
        </div>
      </section>
    </div>
  );
}
