import React from 'react'
import { Outlet } from 'react-router-dom'
import Header3 from '../Header3'
import Sidebar from './SngleEventSidebar'
import Chat from "../../view/Chat"

function index() {
  return (
<>
<Header3/>
<div style={{display:"flex" ,justifyContent:"space-between", flexWrap:"wrap"}}>
<Sidebar/>
<Outlet/>
<Chat/>
    
</div>


</>  )
}

export default index