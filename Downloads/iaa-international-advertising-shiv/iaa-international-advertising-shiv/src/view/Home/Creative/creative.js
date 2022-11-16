import React from "react";
import creativeimg from "../../../images/creative-banner.jpg";
import videoimg from "../../../images/iaa-video.png";
export default function creative() {
  return (
    <section
      className="creative-abt"
      style={{ backgroundImage: `url('${creativeimg}')`, position: "relative" }}
    >
      <div className="container">
        <div className="creative-cnt">
          <div className="creative-lft">
            <a href="">
              <img src={videoimg} width={506} height={416} className="img-fluid" />
            </a>
          </div>
          <div className="creative-rgt text-white">
            <h2 className="title-heading">About IAA Global</h2>
            <p>
              As the Global Compass for the Marketing and Advertising industry,
              IAA's mission is to serve as the gateway for brands and marketers
              seeking customers and growth across borders and to guide our
              members through the transformations taking place in our industry.
            </p>
            <p>
              As the most influential network of industry leaders with a broad
              spectrum of expertise, we help brands grow, strengthen, and forge
              new paths around the world through meaningful relationships with
              consumers.
            </p>
            <p>
              We use our thought leadership, initiatives in education and
              development, and world-class events to help our members navigate
              through the ever-changing worlds of business and technology.
            </p>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </section>
  );
}
