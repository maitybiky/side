import React from 'react'
import { Link } from 'react-router-dom'

const Bar = () => {
  return (
    <div>
          <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">Menu</li>

            <li>
              <Link to="/dashboard" className="waves-effect">
                <i className="ri-dashboard-line"></i>

                <span className="ml-1">Dashboard</span>
              </Link>
            </li>

              <li>
                <Link to="/#" className="has-arrow waves-effect">
                  <i className="ri-mail-send-line"></i>
                  <span className="ml-1">App A</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <Link to="/category">
                     Manage
                    </Link>
                  </li>
                  <li>
                    <Link to="/sub-category">
                     category
                    </Link>
                  </li>

                  <li>
                    <Link to="/product-add">
                     product
                    </Link>
                  </li>

                  <li>
                    <Link to="/order">
                     history
                    </Link>
                  </li>
                  <li>
                    <Link to="/add-banner">
                     Books
                    </Link>
                  </li>
                </ul>
              </li>
           
              
                <li>
                  <Link to="/#" className="has-arrow waves-effect">
                    <i className="ri-mail-send-line"></i>
                    <span className="ml-1">App b</span>
                  </Link>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <Link to="/closed-ticket">
                       closed
                      </Link>
                    </li>
                    <li>
                      <Link to="/pending-ticket">
                       pending
                      </Link>
                    </li>
                  </ul>
                </li>
              


          </ul>
        </div>
    </div>
  )
}

export default Bar