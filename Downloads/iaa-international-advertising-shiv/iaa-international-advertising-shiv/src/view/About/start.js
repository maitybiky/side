import React from 'react'
import Upcomning from "../../component/upcomning";
import Iaanews from "../../component/iaanews";
import l1 from "../../images/start-banner.jpg";
import iconimg from "../../images/flipboard.png";

export default function start() {
  return (
    <div>
        <section className="start-chapter">
  <div className="container">
    <div className="start-chapter-cnt">
      <div className="start-chapter-cnt-lft">
        <h2>START A CHAPTER</h2>
      </div>
      <div className="start-chapter-cnt-rgt">
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
    <div className="start-chapter-img">
      <img src={l1} />
    </div>
    <div className="start-chapter-text">
      <p>
        The IAA encourages the establishing of new Chapters, because they
        strengthen the position of the marketing communications business in the
        market place and increase the momentum to carry out the mission of the
        Association. Every situation is different, but most often the push to
        form a new Chapter comes from one or two people in a city or country,
        who see a need (the IAA refers to such individuals as ‘Champions’). That
        need could be a number of things, including a requirement to resolve
        professional and regulatory issues or networking with other
        professionals in the industry to share best practice. The first
        advantage of forming an IAA Chapter is the fact that the IAA is a
        partnership, supported by the broad membership of advertisers,
        advertising agencies, the media and related services and educators and
        students. It is broad-based and can therefore speak for the marketing
        communications industry as a whole. The second advantage is that the IAA
        is a global partnership enabling the Chapter to instantly become a part
        of the IAA's international network. This means that within its own
        country, the Chapter is not only a national institution, but also
        represents a global perspective and a global resource. This lends added
        weight and effectiveness to advocacy with government and authorities.
      </p>
      <h5>The Basics</h5>
      <p>
        The first requirement is 15 IAA members in good standing who agree to
        the desirability of forming a Chapter. If the membership in your area is
        less than 15 you should first recruit additional members with a
        legitimate interest in the communications field related to advertising
        and marketing. Prospects should be committed to brand building, and
        value commercial communications as vital to the success of their
        business and can be recruited from all sectors of the communications
        field including advertisers, advertising agencies, media companies,
        corporate communications, marketing research companies, package/label
        design studios, sales promotion, public relations, interactive marketers
        and agencies or direct marketers. There should be balanced
        representation. Once a Chapter is well established and active, some
        additional members may be added from educational institutions or service
        companies associated with advertising, but it is recommended that this
        “other” member category be kept to a minimum and no more than 10% of
        members. The IAA Global Office will supply you with literature including
        the Chapter President Toolbox, application forms and Chapter Trademark
        Agreement. Names of IAA members in your area are shown in your
        Membership Directory and included on the IAA website. The Global Office
        can supply names of any additional members newly admitted.
      </p>
      <h5>Petition</h5>
      <p>
        Obtain the long hand signatures of 15 members on the petition form
        (request one from the Global Office. Your petition should be sent to the
        Global Office to be submitted to the IAA Board of Directors for approval
        at its next meeting. Your petition should be accompanied by a letter
        delineating the territory to be served by proposed Chapter, if it is not
        implicit in the name. The Chapter name may take the adjective form (e.g.
        Swiss, Japanese) or the noun form (New York, United Kingdom).
      </p>
      <h5>Organizational Meeting of Chapter</h5>
      <p>
        After notification of approval, you should hold an organization meeting,
        adopt By-Laws, elect officers, establish committees, establish a mission
        statement and set up a schedule of meeting and events. Some of these
        steps may be taken in anticipation of approval, if you wish to save
        time. The Global Office will furnish specimen By-Laws on request. These
        may be adapted to your needs and local legal requirements. Local laws,
        for example, may determine whether or not your Chapter can or should be
        locally incorporated. A draft of your proposed By-Laws must be sent to
        the Global Office for review, to ensure that they are in harmony with
        IAA By-Laws. They will then be submitted to the Board of Directors for
        final approval. Your By-Laws, of course, need not be in English, but a
        translation of the draft will be needed for review purposes.
      </p>
      <h5>Finances</h5>
      <p>
        The Chapter decides what funds are necessary for local operations. Local
        dues, in addition to each member’s international dues, may be levied in
        any amount agreed upon without consulting the Global Office. Further
        information on financing will be available to officers and directors
        after the Chapter is formed.
      </p>
      <h5>IAA Official Logo and Design System</h5>
      <p>
        To inquire/ to use the IAA logo, typeface and design system, please
        contact the IAA Global Office
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
