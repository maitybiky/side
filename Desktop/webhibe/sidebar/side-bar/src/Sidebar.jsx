import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const arr = [{ name: "Main",hide:false }, { name: "category",hide:false }, { name: "contact",hide:false }, { name: "about",hide:false }];
const Sidebar = () => {
  const [data,setData]=useState(arr)

  
  const addClass = (index) => {
    console.log(index);
    const newState = data.map(obj => {
        // 👇️ if id equals 2 replace object
        if (obj.name === index) {
            if(!obj.hide){
                return {name:index, hide: true};
            }else{
                return {name:index, hide: false};
            }
        }
  
        // 👇️ otherwise return object as is
        return obj;
      });
setData(newState)
    // if (hide) {
    //   setHide(false);
    // } else setHide(true);
  };
//   useEffect(() => {
//    console.log(data);
//   }, [data])
  
  return (
    <div>
      <div id="sidebar-menu">
        <ul className="metismenu list-unstyled" id="side-menu">
          <li className="menu-title">Menu</li>

          <li>
            <Link to="/dashboard" className="waves-effect">
              <i className="ri-dashboard-line"></i>

              <span className="ml-1">Dashboarf</span>
            </Link>
          </li>

         
            {data.map((item, ind) => {
              return (
                <li style={{marginTop:10}} key={ind}>
                <Link onClick={()=>addClass(item.name)} to="/#" className="has-arrow waves-effect">
                  <i className="ri-mail-send-line"></i>
                  <span className="ml-1">{item.name}</span>
                </Link>
                <ul
                  className={item.hide ? "sub-menu show" : "sub-menu hide"}
                  aria-expanded="false"
                >
                  <li>
                    <Link to="/category">hdhjs</Link>
                  </li>
                  <li>
                    <Link to="/sub-category">xnnsz sn</Link>
                  </li>
                </ul>
                </li>
              );
            })}
         
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
