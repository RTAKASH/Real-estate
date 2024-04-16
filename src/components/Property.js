import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import "../css/property.css";
import Details from "./Details"

import {slides} from "../data/Data.json";
const Property = () => {
  return (
  <>
  <div className='header'>
  <Nav/>
  <div className='header-content'>
  <div className='header-content1'>
  <h1>Modern House</h1>
  <p>3002 Foster Ave, Brooklyn, NY 11210, USA</p>
  </div>
  <div className='header-content2'>
  <h1>$450,000</h1>
  <p>$2,800/sq ft</p>
  </div>
  </div>

   <Details/>
  
   <Footer />
   
   </div>

   </>
  )
}

export default Property