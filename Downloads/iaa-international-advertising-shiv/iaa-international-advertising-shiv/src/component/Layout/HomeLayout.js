import React from 'react'
import { Outlet } from 'react-router-dom'
import HomeHeader from "../../view/Header/header"
import HomeFooter from "../../view/Footer/footer"

function HomeLayout() {
  return (
    <>
    <HomeHeader/>
    <Outlet/>
    <HomeFooter/>
    </>
  )
}

export default HomeLayout