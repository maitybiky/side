import React from 'react'
import footerimg from '../../images/footer-bg.jpg';

export default function footer() {
  return (

<footer className="page-footer" style={{ backgroundImage: `url('${footerimg}')`}}>
<div className="container">
    <div className="footer-part">
      <div className="col-md-4 footer-wrap">
      <p>The Global Compass Of Marketing Communication</p>
      <div className='footer-button'>
      <button  type="submit" className="footer-button-top"><i class="fa fa-map-marker" aria-hidden="true"></i>Find Your IAA Chapter</button>
      </div>
      <div className='footer-button bottom-lft'>
      <button  type="submit"><i class="fa fa-sign-in" aria-hidden="true"></i>Join IAA</button>
      <button  type="submit"><i class="fa fa-user-o" aria-hidden="true"></i>Login</button>
      </div>
      </div>

      <div className="col-md-4 footer-wrap">
        <div>
      <h3>Useful Links</h3>
      <div className="footer-list">
      <ul className="footer-list-wrap list-group">
      <li><a>About IAA</a></li>
      <li><a>Contact us</a></li>
      <li><a>News</a></li>
      <li><a>Membership</a></li>
      <li><a>Professional Development</a></li>
      </ul>
      <ul className="footer-list-wrap">
      <li><a>Advocacy</a></li>
      <li><a>Leadership Hub</a></li>
      <li><a>Events</a></li>
      <li><a>Education</a></li>
      
      </ul>
      </div>
      </div>
      </div>

      <div className=" col-md-4 footer-wrap">
        <div>
      <h3>Subscribe To Our Newsletter</h3>
      <input  type="search" placeholder="Search" className="search-input"></input>
      <button  type="submit" className="subscribe-btn">Subscribe</button>
      <h3>Let's Connect</h3>
      <ul className="footer-icon-list">
      <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
      <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
      <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
      <li><i class="fa fa-linkedin" aria-hidden="true"></i></li>
      <li><i class="fa fa-youtube-square" aria-hidden="true"></i></li>
      </ul>
      </div>
      </div>
      </div>
</div>
</footer>
)
}
