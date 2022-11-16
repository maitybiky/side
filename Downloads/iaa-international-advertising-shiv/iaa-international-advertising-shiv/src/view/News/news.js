import React, { useEffect, useState } from 'react'
import r6 from "../../images/_xlarge.jpeg"
import r7 from "../../images/new-news.jpeg";
import HttpClient from '../../utils/HttpClient';
import Pagination from '../../component/Pagination';
import moment from "moment"

export default function News() {
  const loop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,]
  const loop1 = [1, 2, 3, 4, 5, 6, 7, 8]
  const [globalNews, setGlobalNews] = useState([])
  const [localNews,setLocalNews] = useState([])
  const [CurrentPage, setCurrentPage] = useState(1)
  const [PostParPage, setPostParPage] = useState(4)

  const fetchGlobalNews = async () => {
    let result = await HttpClient.requestData("news", "GET")
    console.log("Global", result)
    if (result && result.status) {
      setGlobalNews(result.data)
    }
  }
  const fetchLocalNews = async () => {
    let result = await HttpClient.requestData("news/local-news", "POST")
    console.log("local", result)
    if (result && result.status) {
      setLocalNews(result.data)
    }
  }

  const IndexOfLastPost = CurrentPage * PostParPage
  const IndexOfFristPost = IndexOfLastPost - PostParPage
  const CurrentPosts = globalNews.slice(IndexOfFristPost, IndexOfLastPost)


  function Paginate(number) {
    setCurrentPage(number)
}
  useEffect(() => {
    fetchGlobalNews()
    fetchLocalNews()
  }, [])

const newsPagination =()=>{
  // alert("bkjhb")
}
  return (
    <div>
      <section className="iaa-news-part">
        <div className="container-fluid">
          <div className="iaa-news-wrap-mita">
            <div className="row">
              <div className="col-md-8 col-12" id="line-bar">
                <div className="global-industry-news-top-box">
                  <h2>
                    GLOBAL INDUSTRY NEWS
                    <a
                      href="https://flipboard.com/"
                      target="_blank"
                      className="c-section-header__sponsor"
                    >
                      <span className="c-section-header__sponsor-text">
                        Powered by
                      </span>
                      <span className="c-section-header__sponsor-logo">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 507.2 100"
                        >
                          <defs>
                            <style
                              dangerouslySetInnerHTML={{
                                __html:
                                  "\n                            .cls-1 {\n                              fill: #f52828;\n                            }\n                          "
                              }}
                            />
                          </defs>
                          <title>Asset 7</title>
                          <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                              <path d="M129.95,20h34.83V31.56H143.72V45.31h17.46v10.9H143.71V80H129.94Z" />
                              <path d="M169.63,20H183.4V68.44h19.67V80H169.63Z" />
                              <path d="M208.24,20H222V80H208.24Z" />
                              <path d="M228.83,20H246c14.83,0,23.11,7.7,23.11,20.41,0,13.11-8.28,21.15-23.11,21.15H242.6V80H228.83ZM242.6,30.9V50.57h2.7c6.64,0,10-3.28,10-9.92,0-6.39-3.36-9.75-10-9.75Z" />
                              <path d="M273.92,20h19.75c13.53,0,20.08,5.82,20.08,15.65,0,5.66-2.78,10.74-9.75,12.46,7.53,1.32,11.53,7.13,11.53,14.1,0,10.25-7.21,17.79-20.73,17.79H273.9Zm13.77,10.9v13h3.84c5.74,0,8.36-2.46,8.36-6.8,0-3.85-2.46-6.23-8.11-6.23Zm0,23.36V69.11h5.16c6,0,8.93-2.79,8.93-7.63,0-4.67-3.27-7.21-8.85-7.21Z" />
                              <path d="M342.29,19C356.71,19,365,29.59,365,50s-8.28,31-22.71,31-22.7-10.57-22.7-31S327.86,19,342.29,19Zm0,50.17c5.49,0,8.93-5.66,8.93-19.18s-3.44-19.18-8.93-19.18-8.86,5.65-8.86,19.18S336.79,69.18,342.29,69.18Z" />
                              <path d="M380.38,20h17.46l15.08,60H398.53L396,68H381.37l-2.63,12H364.89Zm8.28,13-5,23.94h10.25L389,33Z" />
                              <path d="M416.46,20h17.21c15,0,23,6.31,23,19,0,8.2-3.69,14.27-10.57,17.38L458.72,80H443.83L433.59,58.68h-3.36V80H416.46Zm13.77,10.9V48h3.44c6.31,0,9.18-3,9.18-8.85,0-5.58-2.87-8.28-9.18-8.28Z" />
                              <path d="M463.84,20h17.3c17.79,0,26.06,12.54,26.06,30,0,17.21-8.28,30-26.06,30h-17.3Zm13.77,11.56V68.44h3.28c9,0,12.21-8.61,12.21-18.44,0-10.41-3.19-18.44-12.21-18.44Z" />
                              <path
                                className="cls-1"
                                d="M0,0V100H100V0ZM80,40H60V60H40V80H20V20H80Z"
                              />
                            </g>
                          </g>
                        </svg>
                      </span>
                    </a>
                  </h2>
                </div>
                <div className=" global-industry-news-box" style={{overflow:"scroll",height:"550px"}}>
                  {globalNews.map((item, index) => {
                    return (

                      <div className=" global-industry-news-devide-box-1" style={{ backgroundImage: `url('${item.img[0].preview}')` }}>

                        <div className="global-industry-news-devide-box-content">
                          <h6>{moment(item.created_on).format("MMM Do YYYY")}</h6>
                          <h3>
                            {item.title}
                            <span className="c-tile__icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={8}
                                viewBox="0 0 9 8"
                              >
                                <g
                                  fill="#88837E"
                                  fillRule="evenodd"
                                  transform="translate(.563)"
                                >
                                  <path d="M0,7.875 L0,0.246421875 L2.858625,0.246421875 L2.858625,1.19207812 L0.953859375,1.19207812 L0.953859375,6.92278125 L6.67996875,6.92278125 L6.67996875,5.01965625 L7.63120313,5.01965625 L7.63120313,7.875 L0,7.875" />
                                  <path d="M5.37895313,1.60125 C4.92351563,1.14646875 4.47792188,0.701203125 4.02346875,0.247078125 L7.630875,0.247078125 L7.630875,3.84529688 C7.18101563,3.39510938 6.73509375,2.94885938 6.29048438,2.50425 C5.60765625,3.18740625 4.93171875,3.86334375 4.26103125,4.53403125 C3.95226563,4.22526563 3.65334375,3.92634375 3.35376563,3.62676563 C4.0228125,2.95771875 4.69875,2.28178125 5.37895313,1.60125" />
                                </g>
                              </svg>
                            </span>
                          </h3>
                        </div>
                      </div>


                    )
                  }

                  )}

                </div>
                <div style={{textAlign:"center"}}>
                {/* <Pagination PostParPage={PostParPage} totalPost={globalNews.length} Paginate={Paginate} CurrentPage={CurrentPage} /> */}

                </div>

                <div className="global-industry-news-form-box">
                  <form>
                    <h3>Expand your Global Horizon</h3>
                    <p>Become an IAA subscriber</p>
                    <div className="form-group">
                      <input type="email" placeholder="Email" />
                      <div className="clear" />
                    </div>
                    <div className="form-group">
                      <input type="submit" defaultValue="Sign Up" />
                      <div className="clear" />
                    </div>
                    <span className="news-form-disclamer">
                      <a href="#" style={{ textDecoration: "none" }} target="_blank">
                        Disclaimer
                      </a>
                    </span>
                  </form>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="iaa-news-box">
                  <div className="iaa-news-top-box">
                    <h2>IAA NEWS</h2>
                  </div>
                  {localNews.map((item, index) => {
                    return (
                      <div className="iaa-news-devide-box">
                        <a href="#">
                          <img src={item.img[0].preview} className="img-fluid" />
                        </a>
                        <div className="iaa-news-devide-content">
                          <h6>{moment(item.created_on).format("MMM Do YYYY")}</h6>
                          <p>{item.title}</p>
                        </div>
                      </div>
                    )
                  }

                  )}


                </div>
              </div>
            </div>

            <div className="clearfix" />
          </div>
        </div>
      </section>

    </div>
  )
}
