import React from 'react'
import r8 from "../images/1051_IAA_R.png"


export default function header1() {
  return (
    <div>
          <header className="iaa-professional-training-header">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          <img src={r8} width={120} />
        </a>
        <button
          className="navbar-toggler toggle1"
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Log in
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-search" aria-hidden="true" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-shopping-cart" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
    </div>
  )
}
