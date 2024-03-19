/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from "../Components/Footer"
import HeroImage from "../Components/HeroImage"
import Navbar from "../Components/Navbar"
import WorkCard from '../Components/WorkCard';
import Form from  "../Components/Form"
import List from '../Components/List';

function Home() {
  return (
    <div>
      <Navbar/>
      <HeroImage/>
      <WorkCard/>
      <List/> 
      <Footer/>
    </div>
  )
}

export default Home
