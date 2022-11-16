import React, { useEffect,useState } from 'react'
import HttpClient from '../utils/HttpClient'
import globalimg from "../images/global1.jpeg"
import moment from 'moment';
import flo from "../images/flo-logo.png";
import { Link } from 'react-router-dom'

export default function Global() {
  const [globalNews, setGlobalNews] = useState([])

  const fetchGlobalNews = async () => {
    let result = await HttpClient.requestData("news", "GET")
    console.log("Global", result)
    if (result && result.status) {
      setGlobalNews(result.data)
    }
  }
  useEffect(()=>{
    fetchGlobalNews()
  },[])
    const loop = [1,2,3,4];
  return (
    <div>
        <section className="news-sec">
        <div className="container">
          <div class="top-heading-sec">
            <div class="sec-title">
              <h2 class="title-heading">Global Industry News<span className="heading-wrap">Powered By </span><img src={flo}/></h2>
            </div>
            <div class="view-all">
              <Link to="/news">View All</Link>
            </div>
          </div>
          <div className="news-wrap">
          {globalNews.slice(-4).map((item,index)=>{
            return(
              <div className=" news-part global-cnt">
                <div style={{overflow:"hidden"}}>
              <a href="#"><img src={item.img[0].preview} className="img-fluid transform"></img>
              <div class="c-tile__content  global-wrap">
                <div class="c-tile__meta">
                  <time class="c-tile__date">{moment(item.created_on).format("MMM Do YYYY")}</time>
                </div>
                <h3 class="c-tile__headline">{item.title}</h3>
            </div>
              </a>
              </div>
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
