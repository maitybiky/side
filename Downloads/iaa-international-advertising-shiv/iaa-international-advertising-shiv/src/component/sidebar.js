import React, { useEffect, useState } from 'react'
import HttpClient from '../utils/HttpClient'

export default function Sidebar({setEvent}) {
    const [AllEvents,setAllEvents] = useState([])
    useEffect(()=>{
fetchEvent()
    },[])
    const fetchEvent =async()=>{
        let result = await HttpClient.requestData("event/get-all","POST")
        console.log("e",result)
        if(result && result.status){
            setEvent(result.data)
            setAllEvents(result.data)
        }
    }
    return (
        
            <div className='col-md-3 col-12'>
                <div className='sidebar'>

                    <ul class=" side-menu-tab  mb-3" >
                        <li class="active">
                            <a>All Events</a>
                        </li>
                        <li class="">
                            <a>Registered Events</a>   
                        </li>
                        <li class="" >
                            <a>Previous Events</a>
                        </li>
                    </ul>


                </div>
            </div>
       
    )
}
