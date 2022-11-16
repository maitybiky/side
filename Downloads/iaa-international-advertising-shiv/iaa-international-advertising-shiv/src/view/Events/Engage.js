import React from 'react'
import gg from "../../images/Rectangle 1686.png";

import Engageimg from '../../component/Engageimg';
import Engageimg2 from '../../component/Engageimg2';


export default function Engage() {
    const loop = [1, 2, 3, 4, 5, 6, 7, 8];
    const loop1 = [1, 2, 3, 4, 5, 6];

    return (
        <>
            <section className='engage'>
                <div className='container'>

                    <div className='col-md-12 col-12'>
                        <img src={gg} className="img-fluid"/>
                        <div><a href='#'><i class="fa fa-calendar-minus-o" aria-hidden="true"></i>28 Oct - 2 Nov | Hosted By <span> James Dentley</span></a></div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered.</p>

                        <h2>Host & Speakers</h2>
                        <div className='row'>
                        
                            {loop.map((item) => {
                                return (
                                    <div className='col-md-3'>
                                <Engageimg/>
                                </div>
                                )
                            }

                            )}

                        </div>

                        <h2>Sponsors</h2>
                        <div className='row'>
                            {loop1.map((item) => {
                                return (
                                    <div className='col-md-4'>
                                       <Engageimg2/>
                                    </div>

                                )
                            }

                            )}

                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
