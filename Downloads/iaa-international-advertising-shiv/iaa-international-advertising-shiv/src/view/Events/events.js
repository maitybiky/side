import React, { useEffect, useState } from 'react'
import o1 from "../../images/event1.png";
import o2 from "../../images/event3.png";
import HttpClient from '../../utils/HttpClient';

export default function Events() {
  const [allEvent,setAllEvent] = useState([])

  const fetchEvent =async()=>{
let result = await HttpClient.requestData("event/get-all","POST")
if(result && result.status){
  setAllEvent(result.data)
}
  }
  useEffect(()=>{
fetchEvent()
  },[])
    const loop = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43];
  return (
    <div>
      <section className="past_events_page clearfix">
  <div className="container mt-3">
    {/* <ul className="nav nav-tabs events_lsd">
      <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href="#home">
          All Events
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href="#menu1">
          Global and regional
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="tab" href="#menu2">
          Thought Leadership
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" data-toggle="tab" href="#menu3">
          Past
        </a>
      </li>
    </ul> */}
    <div className="tab-content allex-dfh">
      {/* <div id="home" className="container tab-pane fade">
        <br />
        <h3>ALL EVENTS</h3>
        <div className="allex-dfh_cadlog_all">
          <div className="allex-dfh_cadlog">
            <a className="allex-dfh_img" href="#">
              <img src={o2} />
              <div className="allex-dfh_overlay">
                <div className="allex-dfh_meta">
                  <h6>IAA GLOBAL B2B BRAND SUMMIT</h6>
                </div>
              </div>
            </a>
          </div>
          <div className="allex-dfh_cadlog">
            <a className="allex-dfh_img" href="#">
              <img src={o2}/>
              <div className="allex-dfh_overlay">
                <div className="allex-dfh_meta">
                  <h6>IAA AFRICA RISING 5 AN IAA LEADERSHIP CONFERENCE</h6>
                </div>
              </div>
            </a>
          </div>
          <div className="allex-dfh_cadlog">
            <a className="allex-dfh_img" href="#">
              <img src={o2} />
              <div className="allex-dfh_overlay">
                <div className="allex-dfh_meta">
                  <h6>
                    BACK TO HUMAN TOUCH IN COMMUNICATION CREATIVITY 4 BETTER IAA
                    GLOBAL CONFERENCE
                  </h6>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="menu1" className="container tab-pane fade">
        <br />
        <h3>GLOBAL AND REGIONAL</h3>
      </div>
      <div id="menu2" className="container tab-pane fade">
        <br />
        <h3>THOUGHT LEADERSHIP</h3>
      </div> */}
      <div id="menu3" className="container tab-pane active">
        <br />
        <h3>All Events</h3>
        <div className="allex-dfh_cadlog_all">
            {allEvent.map((item,index) =>{
                return(
                    <div className="allex-dfh_cadlog" key={item._id}>
                    <a className="allex-dfh_img" href="#">
                      <img src={item.images[0].preview} />
                      <div className="allex-dfh_overlay">
                        <div className="allex-dfh_meta">
                          <h6>{item.name}</h6>
                        </div>
                      </div>
                    </a>
                  </div>
                )
            }

            )}
     
        </div>
       
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
