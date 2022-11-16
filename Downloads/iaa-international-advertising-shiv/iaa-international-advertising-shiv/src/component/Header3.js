import React from 'react'
import user from "../images/Ellipse 1.png";
import gg from "../images/Rectangle 1686.png";
import Logopg from '../view/Advocacy/Logopg';



export default function Header3() {
    const loop = [1, 2, 3]

    return (
        <>
            <section className='events-header'>
                <div className='container'>
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand" href="#" style={{ width: "100px" }}>IAA</a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <div class="bottom-header-middle">
                                <a href="#" class="hedaer-search_icon"><i class="fa fa-search" aria-hidden="true"></i></a>
                                <input type="search" placeholder="Search" />
                            </div>
                            <ul class="navbar-nav m-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">All shows</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Movies</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                        Series
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">TV</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">Events</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link">P.Meeting</a>
                                </li>
                            </ul>
                            <a href='#'><img src={user} /></a>
                            <div class="dropdown">
                                <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false" style={{ color: "#fff", fontFamily: 'SF Pro Text' }}>
                                    My Account
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>

                        </div>
                    </nav>
                </div>
            </section>

            {/* <div className='col-md-9'>
                <div className='events1'>
                    <div>
                        <div className='drops'>
                            <h1>Events</h1>
                            <div className=''>
                                <div class="dropdown" style={{ display: "inline-block" }}>
                                    <button class="btn dropdown-toggle drops-btn" type="button" data-toggle="dropdown" aria-expanded="false" style={{ color: "#fff", fontFamily: 'SF Pro Text' }}>
                                        Last month
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>

                                </div>
                                <div class="dropdown" style={{ display: "inline-block" }}>
                                    <button class="btn dropdown-toggle drops-btn" type="button" data-toggle="dropdown" aria-expanded="false" style={{ color: "#fff", fontFamily: 'SF Pro Text' }}>
                                        Content Type
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {loop.map((item) => {
                            return (
                                <div className='row events1-wrap'>
                                    <div className='col-md-4 col-12'>
                                        <img src={gg} className="img-fluid events_img" />
                                    </div>
                                    <div className='col-md-8 col-12'>
                                        <div className='inspire-box'>
                                            <h2>Engage excite inspire</h2>
                                            <a href='#' className='register-btn'>Registered</a>
                                        </div>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum ac diam at convallis. Nulla diam libero, maximus sed justo et, convallis tempus dolor. Etiam non magna vel felis.</p>
                                        <a href='#'><i class="fa fa-calendar-minus-o" aria-hidden="true"></i>28 Oct - 2 Nov | Hosted By <span> James Dentley</span></a>
                                        <div>
                                            <h4>Speakers</h4>
                                            <a className='icon-bundle'><i class="fa fa-angle-left" aria-hidden="true"></i>|<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                                        </div>
                                        <div className='speaker-about-box d-flex'>
                                            {loop.map((item) => {
                                                return (
                                                    <div className=''>
                                                        <div className='speaker-about d-flex speaker-about-detail'>
                                                            <div><a href='#'><img src={user} /></a></div>
                                                            <div>
                                                                <h6><strong>Davis Philips</strong></h6>
                                                                <h6 className='ceo-content'>CEO, OLX Org.</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }

                                            )};
                                        </div>

                                    </div>
                                </div>
                            )
                        }

                        )}

                    </div>
                </div>
            </div> */}
</>
    )
}
