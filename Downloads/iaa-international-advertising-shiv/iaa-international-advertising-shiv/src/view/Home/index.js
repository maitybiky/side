import React ,{useState,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Creative from "../../view/Home/Creative/creative";
import Homelogo from "../../view/Home/homelogo";
import Network from "../../view/Home/network";
import Leadership from "../../component/leadership";
import Global from "../../component/global";
import events1 from "../../images/a1.jpg";
import events2 from "../../images/b1.jpg";
import memberimg from "../../images/joiniaa.png";
import d1 from "../../images/news1.png";
import HttpClient from "../../utils/HttpClient";
import { Link } from "react-router-dom";
import moment from "moment";
import { useSelector } from "react-redux";
export default function Index() {
  const login_status = useSelector((state)=>state.User.login_status)
  const [events, setEvents] = useState([])
  const [localNews,setLocalNews] = useState([])
  const fetchEvent = async () => {
    let result = await HttpClient.requestData("event/get-all", "POST")
    console.log("eventFetch", result)
    if (result && result.status) {
      setEvents(result.data)
    }
  }
  useEffect(() => {
    fetchEvent()
    fetchLoacalNews()

  }, [])
  const fetchLoacalNews =async()=>{
    let result = await HttpClient.requestData("news/local-news","POST")
    if(result && result.status){
      setLocalNews(result.data)
    }
  }
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  const loop = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      <Network />
      <section className="event-sec">
        <div className="container">
          <div class="top-heading-sec">
            <div class="sec-title">
              <h2 class="title-heading">The Events</h2>
            </div>
            <div class="view-all">
              <Link to="/events">View All</Link>
            </div>
          </div>
          <div className="row slick-event">
            {events.slice(-2).map((item) => {
              return <div class="col-md-6 btm-event-lft events event_box" key={item._id}>
                <a href="">
                  <img
                    src={item.images[0].preview}
                    width="680"
                    height="378"
                    className="img-fluid"
                  ></img>
                  <div class="btm-event-txt">
                    <h3>
                      <span>-</span>{item.name}
                    </h3>
                  </div>
                </a>
              </div>
            })}


            {/* <div class="col-md-6 btm-event-lft events">
              <a href="">
                <img
                  src={events1}
                  width="680"
                  height="378"
                  className="img-fluid"
                ></img>
                <div class="btm-event-txt">
                  <h3>
                    <span>-</span>IAA AFRICA RISING 5 AN IAA LEADERSHIP
                    CONFERENCE
                  </h3>
                </div>
              </a>
            </div> */}
          </div>
        </div>
      </section>
      <Creative />

      <Global />
      <Leadership />
      <section
        className="iaa-join-member img-fluid"
        style={{ backgroundImage: `url('${memberimg}')`, position: "relative" }}
      >
        <div className="join-member-cnt">
          <div className="container">
            <div className="join-text">
              <h2 className="title-heading">
                Join the Most Influential Global Marcom Network
              </h2>
              <p>
                Connect with representatives/ companies from a broad global
                spectrum consisting of Brands, Advertising Agencies, Tech
                Platforms, Media, PR, Marketing Research and Analytics etc.
              </p>
              <div className="join-member-btn">
                <a href="">Join IAA</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {login_status && <section className="news-sec">
        <div className="container">
          <div class="top-heading-sec">
            <div class="sec-title">
              <h2 class="title-heading">IAA News</h2>
            </div>
            <div class="view-all">
              <Link to="/news">View All</Link>
            </div>
          </div>
          {/* <div className="news-wrap"> */}
            <Slider {...settings} className="news-wrap">
           {localNews.map((item) => {
                return (
                  <div className="news-part">
                    <a href="#"><img src={item.img[0].preview} className="img-fluid"></img>
                      <div class="c-tile__content">
                        <div class="c-tile__meta">
                          <time class="c-tile__date">{moment(item.created_on).format("MMM Do YYYY")}</time>
                        </div>
                        <h3 class="c-tile__headline">{item.title}</h3>
                      </div>
                    </a>
                  </div>
                );
              }

              )}
            </Slider>


          {/* </div> */}
        </div>
      </section>}
      <Homelogo />
    </div>
  );
}
