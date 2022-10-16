import React, { Component } from "react";
// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
//i18n
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType,
  changePreloader,
} from "../../store/actions";
import HttpClient from "../../utils/HttpClient";

class SidebarContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mmActive : false,
       arr :[
        {mm:false},
        {mm:false},
        {mm:false},
        {mm:false}
      ],
      data: [
        {
            AppName: "appname1"
        },
        {
            AppName: "appname3"
        },
        {
            AppName: "appName4"
        },
        {
            AppName: "My360"
        }
    ]
    };
  }

  componentDidMount() {
    this.initMenu();
   
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.type !== prevProps.type) {
        this.initMenu();
      }
    }
  }
active(bool,index){
  if(bool){

    this.setState(
     this.state.arr[index].mm=true
    )
  }else{

    this.setState({mmActive:true})
  }
}
  initMenu() {
    new MetisMenu("#side-menu");

    var matchingMenuItem = null;
    var ul = document.getElementById("side-menu");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  activateParentDropdown = (item) => {
    item.classList.add("active");
    const parent = item.parentElement;

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show");

        const parent3 = parent2.parentElement;

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement;
          if (parent4) {
            parent4.classList.add("mm-active");
          }
        }
      }
      return false;
    }
    return false;
  };


  render() {
    return (
      <React.Fragment>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{this.props.t("Menu")}</li>

            <li>
              <Link to="/dashboard" className="waves-effect">
                <i className="ri-dashboard-line"></i>

                <span className="ml-1">{this.props.t("Dashboard")}</span>
              </Link>
            </li>

          {
            this.state.data.map((mp,index)=>{
              return (
                <li >
                <Link to="/#" className="has-arrow waves-effect">
                  <i className="ri-mail-send-line"></i>
                  <span className="ml-1">{mp.AppName}</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/closed-ticket">
                      {this.props.t("Closed Ticket")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/pending-ticket">
                      {this.props.t("Pending Ticket")}
                    </Link>
                  </li>
                </ul>
              </li>
              )
            })
          }
            
               
              
           


          </ul>
         
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  // return { ...state.Layout };
  return {
    layout: state.Layout,
    userData: state.Login.userData,
  };
};

export default withRouter(
  connect(mapStatetoProps, {
    changeLayout,
    changeSidebarTheme,
    changeSidebarType,
    changeLayoutWidth,
    changePreloader,
  })(withTranslation()(SidebarContent))
);
