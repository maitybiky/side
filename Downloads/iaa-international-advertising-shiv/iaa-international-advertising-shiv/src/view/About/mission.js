import React from 'react'
import g1 from "../../images/Creativity.jpg";
import g2 from "../../images/Collaboration.jpg";
import Iaanews from "../../component/iaanews";
import iconimg from "../../images/flipboard.png";

import Upcomning from "../../component/upcomning";
export default function mission() {
  const loop = [1,2,3,4];
  return (
    <div>
    <section className="mission-part">
    <div className="container">
      <div className="mission-cnt">
        <div className="mission-cnt-lft">
          <h2>MISSION AND VALUES</h2>
        </div>
        <div className="mission-cnt-rgt">
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
      <div className="mission-cnt-text">
        <h3>Who we are</h3>
        <p>
          The IAA is the world’s most influential network of marketing and
          marketing communications professionals. Established in 1938, the
          International Advertising Association is the only global association
          that represents all spheres of the marketing and marketing
          communications industry. For over eighty years the IAA has played a
          strong role in supporting key industry issues such as freedom of
          commercial speech, self-regulation, responsible advertising, education
          and professional development.
        </p>
        <p>
          On the ground, we have over 4,000 individual and corporate members
          spanning marketing, advertising, media, IT communications and academic
          sectors – all involved in the wide range of brand marketing and
          marketing communications disciplines. The IAA has presence in most
          markets through Chapters and education affiliates reaching across 56
          countries where we serve the collective interests of the entire
          marketing communications profession, unlike other bodies that defend
          only the interests of the sector they represent.
        </p>
        <iframe
          width="100%"
          height="500px"
          src="https://www.youtube.com/embed/es4x5R-rV9s"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen=""
        />
      </div>
      <div className="clear" />
    </div>
  </section>
  
  <section className="our-mission">
    <div className="container">
      <h3>Our Mission</h3>
      <p>
        The IAA is committed to be the Global Compass of the marketing
        communications industry.
      </p>
      <p>
        We point towards excellence in meaningful creativity that helps our
        constituents remain true to the timeless principles of building strong
        brands and forging meaningful relationships with the consumers they
        serve and the society in which we live.
      </p>
      <p>
        We use our thought leadership, initiatives in education, continuous
        development programs and world-class conferences, to help navigate
        through the ever-changing areas of regulation, technology that empowers,
        and the aspirations of increasingly confident consumers.
      </p>
      <p>
        We are a unique network of marketers, advertising agencies, media,
        tech-companies and educators who are responsibly and constantly
        evaluating what is new, while remaining rooted to our core belief that
        “what’s good, is good for business”.
      </p>
      <div className="clear" />
    </div>
  </section>
  
  <section className="our-values">
    <div className="container">
      <h2>Our Values</h2>
      {loop.map((item,index)=>{
        return(
          <div className="our-values-para">
          <div className="values-img">
            <a href="#">
              <img src={g1}/>
            </a>
          </div>
          <div className="values-img">
            <a href="#">
              <img src={g2} />
            </a>
          </div>
        </div>
        );
      }

      )}
    
      {/* <div className="our-values-para">
        <div className="values-img">
          <a href="#">
            <img src="images/education.jpg" />
          </a>
        </div>
        <div className="values-img">
          <a href="#">
            <img src="images/Collaboration.jpg" />
          </a>
        </div>
      </div>
      <div className="our-values-para">
        <div className="values-img">
          <a href="#">
            <img src="images/substan.jpg" />
          </a>
        </div>
        <div className="values-img">
          <a href="#">
            <img src="images/inclusion.jpg" />
          </a>
        </div>
      </div>
      <div className="our-values-para">
        <div className="values-img">
          <a href="#">
            <img src="images/equity.jpg" />
          </a>
        </div>
        <div className="values-img">
          <a href="#">
            <img src="images/Diversity.jpg" />
          </a>
        </div>
      </div> */}
      <div className="clear" />
    </div>
  </section>

  <Upcomning/>
<Iaanews/>

  </div>
  )
}
