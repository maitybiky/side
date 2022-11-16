import React from 'react'
import { Outlet } from 'react-router-dom'
import HomeFooter from "../../view/Footer/footer"
import Header2 from "../header2"
export default function shiplayout() {
  return (
    <div>
        <Header2/>
        <Outlet/>
        <HomeFooter/>
    </div>
  )
}
