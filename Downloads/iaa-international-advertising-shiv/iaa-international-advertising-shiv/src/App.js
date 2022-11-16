import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import Mission from "./view/About/mission";
import Heritage from "./view/About/heritage";
import Operate from "./view/About/operate";
import Leaderteam from "./view/About/leaderteam";
import Chapters from "./view/About/chapters";
import Start from "./view/About/start";
import Awards from "./view/About/awards";
import Education from "./view/Education/education";
import Nomination from "./view/About/nomination";
import Laws from "./view/About/laws";
import Events from "./view/Events/events";
import Come from "./view/Advocacy/come";
import Young from "./view/Proffessional/young";
import Brands from "./view/Advocacy/brands";
import Obba from "./view/Advocacy/obba";
import Sustainability from "./view/Advocacy/sustainability";
import Growth from "./view/Advocacy/growth";
import Leadersview from "./view/Advocacy/leadersview";
import Membership from "./view/Membership/membership";
import Whyjoin from "./view/Membership/whyjoin";
import Header from "./view/Header/header";
import Footer from "./view/Footer/footer";
import Leadershiphub from "./view/Leadership-hub/index";
import News from "./view/News/news";
import Train from "./view/Proffessional/train";
import Header1 from "./component/header1"
import Footer1 from "./component/footer1"
import HomeLayout from "./component/Layout/HomeLayout";
import TrainLayout from "./component/Layout/TrainLayout";
import Shiplayout from "./component/Layout/shiplayout";
import Watchnow from "./view/Leadership-hub/Watchnow";
import Watchnow2 from "./view/Leadership-hub/Watchnow2";
import Logopg from "./view/Advocacy/Logopg";
import Loginform from "./view/Authentication/Loginform";
import Joinpage from "./view/Join";
import Subscribe from "./view/Subscribe";
import { useSelector,useDispatch } from "react-redux";
import { setuser } from "./Redux/reducer/User";
import { reactLocalStorage } from "reactjs-localstorage";
import SearchNews from "./view/SearchNews";
import Header3 from "../src/component/Header3";
import Eventsnew from "../src/view/Events/Eventsnew";
import Eventlayout from "../src/component/Eventlayout"
import SingleEventLayout from "../src/component/SingleEventLayout"
import EventInfo from "./view/Events/EventInfo";
import Eventprivatenext from "./view/Events/Eventprivatenext";
import Eventcreate from "./view/Events/Eventcreate";
import Engage from "./view/Events/Engage";
import Session from "../src/view/Events/Session"
import Eventsinnerform from "./view/Events/Eventsinnerform";


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
checKLogin()
  },[])

  const checKLogin = ()=>{
let user = reactLocalStorage.getObject("userData")
console.log("redux",user)
if(user.token){
  dispatch(setuser(user))
}
  }
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
            {/* About */}
            <Route path="/about">
              <Route path="mission-and-values" element={<Mission />} />
              <Route path="our-heritage" element={<Heritage />} />
              <Route path="how-we-operate" element={<Operate />} />
              <Route path="our-leadership-team" element={<Leaderteam />} />
              <Route path="chapters" element={<Chapters />} />
              <Route path="start-a-chapter" element={<Start />} />
              <Route path="by-laws" element={<Laws />} />
            </Route>
            <Route path="/event">
              <Route index element={<Events />} />
              <Route path="past" element={<Events />} />
            </Route>


            <Route path="/iaa-awards" element={<Awards />} />
            <Route path="/nomination" element={<Nomination />} />
            <Route path="/education" element={<Education />} />
            <Route path="/events" element={<Events />} />
            <Route path="/de&i" element={<Come />} />
            <Route path="/young" element={<Young />} />
            <Route path="/whybrandsmatter" element={<Brands />} />
            <Route path="/obba" element={<Obba />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/growth" element={<Growth />} />
            <Route path="/leadersview" element={<Leadersview />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/whyjoin" element={<Whyjoin />} />
            <Route path="/news" element={<News />} />
            <Route path="/watchnow" element={<Watchnow />} />
            <Route path="/watchnow2" element={<Watchnow2 />} />
            <Route path="/logopg" element={<Logopg />} />
            <Route path="/login-form" element={<Loginform />} />
            <Route path="/join" element={<Joinpage />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/searched-news" element={<SearchNews />} />
          </Route>

          <Route element={<TrainLayout />}>
            <Route path="/train" element={<Train />} />
          </Route>

          <Route element={<Shiplayout />}>
            <Route path="/leadership-hub" element={<Leadershiphub />} />
          </Route>

          <Route element={<Eventlayout />}>
          <Route path="/events-new" element={<Eventsnew />} />
          <Route path="/event-create" element={<Eventcreate />} />
          <Route path="/session/:id" element={<Session />} />
          <Route path="/event-inner-form" element={<Eventsinnerform />} />
         
          </Route>

          <Route element={<SingleEventLayout/>}>
          <Route path="/event-info" element={<EventInfo />} />
          <Route path="/event-privatenext" element={<Eventprivatenext />} />
          <Route path="/engage" element={<Engage/>} />
          
          </Route>

        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
