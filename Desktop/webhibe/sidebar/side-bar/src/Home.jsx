import React from 'react'
import Card from './Card'

const Home = () => {
  return (
    <div style={{display:'flex',flexWrap:'wrap'}}>
        <Card cardType="platinum" price='4999'/>
        <Card cardType="golden" price='999'/>
        <Card cardType={"silver"} price={'499'}/>
        <Card cardType={"bronze"} price={'99'}/>
    </div>
  )
}

export default Home