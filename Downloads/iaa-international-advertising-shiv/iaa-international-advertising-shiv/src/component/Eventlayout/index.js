import React from 'react'
import { Outlet } from 'react-router-dom'
import Header3 from '../Header3'
export default function index() {
  return (
<div>

<Header3/>
<Outlet/>
</div>  )
}
