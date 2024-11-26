import React, { useEffect } from 'react';
import "../styles/Home.css"
import me from "../assets/me.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDownload} from "@fortawesome/free-solid-svg-icons"
import Skill from './Skill';
import About from './About';
import Certificate from './Certificate';
import AOS from "aos"
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className='container'>
    <div className='container home  '>
      <div className='row' >
        <div className='col-lg-8 col-md-6 col-12 mt-4' data-aos="slide-right" data-aos-duration="2000">
          <h1 >Sachin Thakur</h1>
          <h2 style={{color:"red"}}>Full Stack Developer</h2>
          
          <p className='mt-4' style={{textAlign:"left",fontWeight:"lighter",fontFamily:"cursive",fontSize:"18px"}}>Hi, I am <span style={{color:"red"}}>Sachin Thakur</span>, a full stack developer with a
            passion for creating beautiful and functional websites. I have
            experience working with a variety of technologies, including <span style={{color:"red"}}>
            React, Redux, Node.js, Express, MongoDB, </span>and more. I am
            always looking to learn new technologies and improve my skills.
            </p>
            <button title='Resume' className='Resume'><a href="https://drive.google.com/file/d/1Fpdbj3GE5wW1Adf5VedOpAPe30LerItA/view?usp=sharing" download target='blank' style={{textDecoration:"none",color:"black"}}>Resume</a><FontAwesomeIcon icon={faDownload}/></button>
           
        </div>
        <div className='col-lg-4 col-md-6 col-12 mt-4 mb-4 profile  ' data-aos="flip-left" data-aos-duration="2000">
         <img src={me} className="rounded-circle " alt="img" />
         </div>
      </div>
    </div>
    <section  data-aos="fade-up" data-aos-duration="2000">
   <h1 className='head' style={{marginTop:"80px"}}>PROJECT & EXPERIENCE</h1>
    <Certificate/>
   </section>
    <section  data-aos="fade-up" data-aos-duration="2000">
      <Skill/>
    </section>
   <section  data-aos="fade-up" data-aos-duration="2000">
   <h1 className='head' style={{marginTop:"64px"}}>About</h1>
    <About/>
   </section>
   
   </div>
 
  )
  
}

export default Home