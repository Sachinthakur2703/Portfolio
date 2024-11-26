import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/Foot.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import AOS from "aos"
import 'aos/dist/aos.css';
const FooterComponent = () => {
  AOS.init()
  return (

    <footer className='container-fluid '>
        <div className='container ' data-aos="fade-up" data-aos-duration="2000">
          <div className='row'>
           
            <div className='col-lg-4 p-4 text-center'>
                <h3>About</h3>
                <p className='mt-4'>
                Hi, I am <span style={{color:"red"}}>Sachin Thakur</span>, a full stack developer with a
            passion for creating beautiful and functional websites. I have
            experience working with a variety of technologies, including <span style={{color:"red"}}>
            React, Redux, Node.js, Express, MongoDB, </span>and more. I am
            always looking to learn new technologies and improve my skills.
                </p>
            </div>
            <div className='col-lg-4 ref p-4 text-center'>
                <h3>Quick links </h3>
            <ul className='mt-4' style={{display:"flex",flexDirection:"column"}}>
                <li ><NavLink to="/">HOME</NavLink></li>
                <li ><NavLink to="/Skill" >SKILL</NavLink></li>
                <li ><NavLink to="/About">ABOUT</NavLink></li>
                <li ><NavLink to="/certificate" >PROJECT</NavLink></li>
              
              </ul>
            </div>
            <div className='col-lg-4  text-center p-4'>
                <h3>Contact me</h3>
                <ul  className='d-flex p-0 mt-4'>
                    <li><a  href="https://www.facebook.com/aviray.thakur"
              target="_blank" ><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="https://www.instagram.com/thakursachin._/?hl=en" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><FontAwesomeIcon icon={faWhatsapp} /></li>
                    <li><a href="https://www.linkedin.com/in/sachin-thakur-a24ab81a1/" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
                <div className='mt-4'>
                <p>+91 8219439638</p>
                <a href="/" style={{textDecoration:"none",color:"white"}}>sachinthakur2326@gmail.com</a>
               
                </div>
            </div>
          </div>
        </div>
    </footer>
    
  )
}

export default FooterComponent
