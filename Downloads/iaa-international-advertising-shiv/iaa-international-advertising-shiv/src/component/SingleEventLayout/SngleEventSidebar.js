import React from 'react'

function Sidebar() {
  return (
   
      <div className='events-bar'>

        <div className='bar-about'>
        <button className='btn bar-about-btn'>
          <a href='#'><i class="fa fa-user-o" aria-hidden="true"></i></a>
          <p>Info</p>
          </button>
          </div>

        <div className='bar-about'>
        <button className='btn bar-about-btn'>
          <a href='#'><i class="fa fa-google-plus-square" aria-hidden="true"></i></a>
        <p>Networking</p>
        </button>
        </div>

        <div className='bar-about'>
          <button className='btn bar-about-btn'>
      <a href='#'><i class="fa fa-address-card" aria-hidden="true"></i></a>
      <p>Sessoin</p>
      </button>
      </div>

      <div className='bar-about'>
      <button className='btn bar-about-btn'>
      <a href='#'><i class="fa fa-users" aria-hidden="true"></i></a>
      <p>Participents</p>
      </button>

      </div>

      <div className='bar-about'>
      <button className='btn bar-about-btn'>
      <a href='#'><i class="fa fa-commenting-o" aria-hidden="true"></i></a>
      <p>Chat</p>
      </button>
      </div>

      <div className='bar-about'>
      <button className='btn bar-about-btn'>
      <a href='#'><i class="fa fa-meetup" aria-hidden="true"></i></a>
      <p>P-meetings</p>
      </button>
      </div>
    </div>
    
  )
}

export default Sidebar