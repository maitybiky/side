import React from 'react'
import d1 from "../images/news1.png";

export default function leadership() {
  const loop = [1,2,3,4];
  return (
    <div>
        <section className="news-sec">
        <div className="container">
          <div class="top-heading-sec">
            <div class="sec-title">
              <h2 class="title-heading">Leadership HUb</h2>
            </div>
            <div class="view-all">
              <a href="">View All</a>
            </div>
          </div>
          <div className="news-wrap">
          {loop.map((item,index)=>{
            return(
              <div className="news-part">
              <a href="#"><img src={d1} className="img-fluid"></img>
              <div class="c-tile__content lead-wrap">
                <div class="c-tile__meta">
                  <time class="c-tile__date">Jul 06, 2022</time>
                </div>
                <h3 class="c-tile__headline">45th IAA World Congress 2024</h3>
            </div>
              </a>
                      </div>
            );
          }

          )}
       
       </div>
        </div>
      </section>
    </div>
  )
}
