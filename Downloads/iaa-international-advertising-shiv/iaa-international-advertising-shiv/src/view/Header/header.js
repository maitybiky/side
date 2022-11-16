import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { reactLocalStorage } from "reactjs-localstorage";
import { logout } from "../../Redux/reducer/User";
import HttpClient from "../../utils/HttpClient";
export default function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const login_status =  useSelector((state)=>state.User.login_status)
  const [news,setNews] = useState([])
  const LogoutHandle = ()=>{
    dispatch(logout())
    reactLocalStorage.remove("userData")
    reactLocalStorage.remove("loginStatus")
    reactLocalStorage.remove("token")

  }
  const SearchHandle =(val)=>{
    if(val !=""){
      // console.log(val)
let filterSearch = news.filter((item)=> item.title.toLowerCase().includes(val.toLowerCase()))
if(filterSearch.length>0){
  navigate("/searched-news",{state:filterSearch})
}
// console.log("search",filterSearch)
    }
  }

const fetchNews = async ()=>{
  let result = await HttpClient.requestData("news", "GET")
    if(result && result.status){
      setNews(result.data)
    }
}
    useEffect(()=>{
      fetchNews()
    },[])
  
  return (
    <header className="page-header">
      <div className="container">
        <div className="top-header">
          <div className=" top-header-lft">
            <i className="fa fa-map-marker" aria-hidden="true"></i><span className="line">Find Your IAA Chapter</span>
            
          </div>
          <div className="top-header-rgt">
            <ul className="icon-list">
              <li>
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-youtube-square" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
        </div>

        <div className=" bottom-header">
          <div className=" bottom-header-lft"> 
            <span onClick={()=>navigate("/")}>IAA</span>
          </div>
          <div className="bottom-header-middle">
            <a href="#" className="hedaer-search_icon"><i class="fa fa-search" aria-hidden="true"></i></a>
            <input type="search"  onChange={(val)=>SearchHandle(val.target.value)} placeholder="Search"></input>
          </div>
         {login_status 
         ?<div className="bottom-header-right">
            <button type="submit" className="bottom-header-border" onClick={LogoutHandle}>
              <i className="fa fa-sign-in" aria-hidden="true"></i>Log out
            </button>
           
          </div>
         : <div className="bottom-header-right">
            <Link to="/join"><button type="submit" className="bottom-header-border">
              <i className="fa fa-sign-in" aria-hidden="true"></i>Join IAA
            </button></Link>
            <Link to="/login-form"><button type="submit" className="bottom-header-border">
              <i class="fa fa-user-o" aria-hidden="true"></i>Login
            </button></Link>
          </div>
          }
          <button
            className="navbar-toggler navbar-light"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
     

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  About IAA 
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/about/mission-and-values" className="dropdown-item" >
                    Mission & Values
                  </Link>
                  <Link to ="/about/our-heritage" className="dropdown-item">
                    Our Heritage
                  </Link>
                  <Link to="about/how-we-operate" className="dropdown-item" >
                    How We Operate
                  </Link>
                  <Link to="/about/our-leadership-team" className="dropdown-item" >
                    Our Leadership Team
                  </Link>
                  <Link to="/about/chapters" className="dropdown-item" >
                    IAA Chapters
                  </Link>
                  <Link to="/about/start-a-chapter" className="dropdown-item" >
                    Start A chapter
                  </Link>
                  <Link to="/about/by-laws" className="dropdown-item" >
                    Bylaws
                  </Link>
                  <a className="dropdown-item nav-link dropdown-toggle awards-btn" href="#"  role="button" data-toggle="dropdown" aria-expanded="false">
                    Awards
                    <div className="dropdown-menu multiple-dropdown" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    IAA Awards
                  </a>
                  <a className="dropdown-item" href="#">
                    IAA Nomination
                  </a>
                </div>
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <Link to='/leadership-hub' className="nav-link" >
                  Leadership Hub
                </Link>
              </li>
             {login_status && <li className="nav-item dropdown">
                <Link to="/events-new" className="nav-link dropdown" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  Events
                </Link>
                {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/event/past" className="dropdown-item" >
                    Past Events
                  </Link>
                </div> */}
              </li>}
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/education"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Education
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">Proffessional Development</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                  Proffessional Training
                  </a>
                  <Link to="/young" className="dropdown-item" >
                    Young Proffessionals
                  </Link>
               
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">Advocacy</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/whybrandsmatter">
                    Why Brands Matter
                  </Link>
                  <Link className="dropdown-item" to="/de&i">
                  DE&I
                  </Link>
                  <Link className="dropdown-item" to="/leadersview">
                    Leaders View
                  </Link>
                  <Link className="dropdown-item" to="/obba">
                    OBAA
                  </Link>
                  <Link className="dropdown-item" to="/sustainability">
                  Sustainability
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/news" className="nav-link ">News</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">Membership</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/whyjoin">
                    Why Join
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="clearfix"></div>
      </div>
    </header>
  );
}
