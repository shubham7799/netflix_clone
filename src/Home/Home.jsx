import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Featured from '../components/featured/Featured'
import List from '../components/list/List'
import './home.scss'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div className='home'>
        <Navbar />
        <Featured type={"Movie"}/>
        <List listTitle={"Continue To Watch"}/>
        <List listTitle={"Best Hollywood Movies"}/>
        <Footer />
    </div>
  )
}
