import React, { useEffect, useState } from 'react'

import gg from "../../images/Rectangle 1686.png";
import user from "../../images/Ellipse 1.png";
import Sidebar from "../../component/sidebar"
// import user from "../images/Ellipse 1.png";
import { Fragment } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moment from 'moment';
import ReadMore from "../../component/ReadMore"
import { Link } from 'react-router-dom';
var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // outerWidth:5
  };
export default function Eventsnew() {
    const [event,setEvent] = useState([])
// useEffect(()=>{
// fetchCallbackEvent()
// },[])


const fetchCallbackEvent = (data)=>{
if(data){
    setEvent(data)
}
}
    
    const loop = [1, 2, 3]
   
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <Sidebar setEvent={fetchCallbackEvent}/>
                    <div className='col-md-9 col-xs-12 col-sm-12'>
                        <div className='events1'>
                            <div>
                                <div className='drops'>
                                    <h1>Events</h1>
                                    <div className=''>
                                        <div class="dropdown" style={{ display: "inline-block" }}>
                                            <button className="btn dropdown-toggle drops-btn" type="button" data-toggle="dropdown" aria-expanded="false" style={{ color: "#fff", fontFamily: 'SF Pro Text' }}>
                                                Last month
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>

                                        </div>
                                        <div className="dropdown" style={{ display: "inline-block" }}>
                                            <button className="btn dropdown-toggle drops-btn" type="button" data-toggle="dropdown" aria-expanded="false" style={{ color: "#fff", fontFamily: 'SF Pro Text' }}>
                                                Content Type
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {event.map((item) => {
                                    return (
                                        <div className='row events1-wrap'>
                                            <div className='col-md-4 col-12'>
                                                <img src={item.images[0].preview} className="img-fluid events_img" />
                                            </div>
                                            <div className='col-md-8 col-12'>
                                                <div className='inspire-box'>
                                                    <h2>{item.name}</h2>
                                                    <Link to={'/session/' + item.id} className='register-btn'>Registered</Link>
                                                </div>

                                                <p>{item.details}.</p>
                                                <a href='#'><i className="fa fa-calendar-minus-o" aria-hidden="true"></i>{ moment(item.updated_on).format("D MMM")}  -{ moment(item.end_date).format("D MMM")}   | Hosted By <span> {item.host}</span></a>
                                                <div>
                                                    <h4>Speakers</h4>
                                                    <a className='icon-bundle'>
                                                        {/* <i className="fa fa-angle-left" aria-hidden="true"></i> */}
                                                        {/* | */}
                                                        {/* <i class="fa fa-angle-right" aria-hidden="true"></i> */}
                                                        </a>
                                                </div>
                                                {/* <div className='speaker-about-box d-flex'> */}
                                               <Slider {...settings} className='speaker-about-box d-flex' >
                                                    {item.speakers?.map((data) => {
                                                        return (

                                                            <div className='speaker-about d-flex speaker-about-detail' >
                                                                <div><a href='#'><img src={user} /></a></div>
                                                                <div>
                                                                    <h6><strong>{data.name}</strong></h6>
                                                                    <h6 className='ceo-content'><ReadMore children={data.details}/> .</h6>
                                                                </div>
                                                            </div>

                                                        )
                                                    }

                                                    )}
                                                   </Slider>
                                                  
                                                {/* </div> */}

                                            </div>
                                        </div>
                                    )
                                }

                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
