import React from 'react'
import r9 from "../../images/Agile-category-HRC.jpg"
export default function train() {
    const loop=[1,2,3,4,5,6]
  return (
    <div>
      
 
  <section className="iaa-professional-training-banner">
    <div className="container">
      <div className="iaa-professional-training-banner-box">
        <p>
          <font size="+2.5" />
        </p>
        <center>
          <font size="+2.5">
            <b>
              Develop your skills and advance your career with{" "}
              <font color="purple">IAA Online Academy</font>
            </b>
          </font>
        </center>
        <p />
        <p>
          Are you looking to advance your skills, earn professional credits, or
          learn something new? Our online professional development courses and
          certificates designed by leading industry experts pair perfectly with
          a busy schedule. Courses are self-paced, accessible from anywhere and
          available on mobile. Browse content categories by clicking on the
          tiles below.
        </p>
      </div>
      <div className="clearfix" />
    </div>
  </section>

  <section className="iaa-professional-training-learning-categories">
    <div className="container">
      <div className="iaa-professional-training-learning-categories-top-box">
        <h3>Learning Categories</h3>
      </div>
      {loop.map((item,index) =>{
        return(
            <div className="row">
            <div className="col-md-4">
              <div className="iaa-professional-training-learning-categories-box">
                <h3>AARP</h3>
                <ul className="learning-category-list">
                  <li>
                    <a href="#">1 Courses</a>
                  </li>
                </ul>
                <div className="iaa-professional-training-learning-categories-img-box">
                  <img src={r9} className="img-fluid" />
                  <div className="learning-category-overlay-btn-box">
                    <a href="#" className="btn learning-category-overlay-btn">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="iaa-professional-training-learning-categories-box">
                <h3>Aglie</h3>
                <ul className="learning-category-list">
                  <li>
                    <a href="#">7 Courses</a>
                  </li>
                  <li className="learning-category-bar">
                    <a href="#">2 Certificates</a>
                  </li>
                </ul>
                <div className="iaa-professional-training-learning-categories-img-box">
                  <img src={r9} className="img-fluid" />
                  <div className="learning-category-overlay-btn-box">
                    <a href="#" className="btn learning-category-overlay-btn">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="iaa-professional-training-learning-categories-box">
                <h3>Carrer Buliding</h3>
                <ul className="learning-category-list">
                  <li>
                    <a href="#">9 Courses</a>
                  </li>
                </ul>
                <div className="iaa-professional-training-learning-categories-img-box">
                  <img
                    src={r9}
                    className="img-fluid"
                  />
                  <div className="learning-category-overlay-btn-box">
                    <a href="#" className="btn learning-category-overlay-btn">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        
      }

      )}
   
    
      
      <div className="clearfix" />
    </div>
  </section>

  
    </div>
  )
}
