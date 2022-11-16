import React from 'react'
import TrainHeader from "../header1"
import TrainFooter from "../footer1"
import { Outlet } from 'react-router-dom'
function TrainLayout() {
  return (
    <>
    <TrainHeader/>
    <Outlet/>
    <TrainFooter/>
    </>
  )
}

export default TrainLayout