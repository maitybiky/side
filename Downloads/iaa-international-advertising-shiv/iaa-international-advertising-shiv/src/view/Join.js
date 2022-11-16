import React from 'react'
import { Link } from "react-router-dom";
import Logopg from './Advocacy/Logopg'

export default function Join() {
    const loop = [1, 2, 3];
    return (
        <div>
            <section className='join-page'>
                <div className='container'>
                <h1>SELECT AN OPTION</h1>
                    <div className='row'>
                        
                        {loop.map((item) => {
                            return (
                                <div className='col-md-4 option-box'>
                                    <div className='option-part'>
                                        <h1>Monthly Content Subscription</h1>
                                        <div className='option-inner'>
                                        <div className='option-wrap'>
                                            <ul>
                                                <li>Access to latest Global Marcom content hub</li>
                                                <li>Access to original content from IAA's Global events</li>
                                                <li>Alerts on latest updates from Marcom industry</li>
                                            </ul>
                                        </div>
                                        <div className='dues-part'>
                                            <h3>Dues</h3>
                                            <p>US$5.00 Monthly</p>
                                        </div>
                                       <Link to="/subscribe"><button className='btn'>Subscribe</button></Link> 
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        )};


                    </div>
                </div>
            </section>
        </div>
    )
}
