import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_b from "../../assets/hero_image_b.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import {motion} from 'framer-motion'


const Hero = () => {
  const transition = {type: 'spring', duration:3}
  return (
  <div className ="hero">
    <div className="left-h">

     <Header/>
{/* the best add */}
     <div className="the-best-ad">
      <motion.div
      initial={{left: '238px'}}
    whileInView={{left: '8px'}}
    transition ={{...transition, type:'tween'}}
  ></motion.div>
      <spam>The best fitness club in the town</spam>
     </div>

     {/* Hero heading*/}
     <div className="hero-text">
      <div>
        <span className='stroke-text'> Shape</span>
        <span>Your</span>
        </div>

        <div>
          <span>Ideal body</span>
        </div>
  
     <div >
      <span>
        In here we will help you to shape and build your ideal body and live up your life to fullest
        </span>
      </div>
      </div>
   

    {/* figures*/}
<div className="figures">
  <div>
    <span>+140</span>
    <span>experts coachs</span>
    </div>
  <div>
    <span>+978</span>
    <span>members</span>
    </div>
  <div>
    <span>+50</span>
    <span>fitness program</span>
    </div>
</div>

{/* hero buttons */}
<div className="hero-buttons">
<buttons className="btn">Get Started</buttons>
<button className="btn">Learn More</button>

</div>
</div>

    <div className="right-h"> 
    <button className="btn">Join Now</button>


    <div className="heart-rate">
      <img src={Heart} alt="" />
      <span>Heart Rate</span>
      <span> 116 bpm</span>
    </div>

    {/* hero images */}
    <img src={hero_image} alt="" className='hero-image'/>
     <motion.img 
     initial={{right: '11rem'}}
     whileInView={{right: '20rem'}}
    transition ={transition}
     src={hero_image_b} alt="" className='hero-image-b'/>

     {/* Calories */}
     <motion.div
     /*initial={{right: '37rem'}}
     whileInView={{right: '28px'}}
  transition ={transition}   */
      className="calories">
      <img src= {Calories} alt="" />
      <div>
      <span>calories Burned</span>
      <span>220 Kacl</span>
      </div>
     </motion.div>
    </div>
  </div>
  )
} 

export default Hero
