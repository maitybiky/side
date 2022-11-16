import React from 'react'
import r2 from "../images/iaa-leadership-capture.jfif";
export default function header2() {
  return (
    <div>
         <header className="iaa-leadership-hub-header">
        <div className="container-fliud">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
              <img src={r2} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="leader-logo-nav">
                  <a className="nav-link" href="#">
                    Leadership Hub<span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#video-part">
                    Video Series
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#podcasts">
                    Podcasts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#blog-whitepapers-part">
                    Blogs &amp; Whitepapers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#e-books-part">
                    E-Books
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Presentations-part">
                    Presentations
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About IAA
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="clearfix" />
        </div>
      </header>
    </div>
  )
}
