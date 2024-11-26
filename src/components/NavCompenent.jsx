import React, { useState,useEffect } from 'react';
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";
import AOS from "aos"
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBarsStaggered} from "@fortawesome/free-solid-svg-icons"
const NavComponent = () => {
  const [toggle, setToggle] = useState(false);
  const [date, setDate] = useState(new Date());
  const handleToggle = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    AOS.init();
    
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000); 
    return () => clearInterval(intervalId);
  }, []);
  

  const formattedDate = () => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    const seconds = date.getSeconds();
    return (`${hours}:${minutes}:${seconds}`);
  }
  return (
    <React.Fragment>
      <div className='container-fluid main'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 ' data-aos="flip-left" data-aos-duration="2000">
            <h1 style={{ color: "whitesmoke" }}><span style={{ color: "red", fontWeight: "bolder" }} >Web</span><span>Dev</span></h1>
          </div>

          <div className='col-lg-4 col-md-4 col-12  '>
            <button style={{width:"30px",backgroundColor:"red",border:"none"}} className="d-lg-none d-md-none float-end" onClick={handleToggle}>
               {!toggle? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faBarsStaggered} /> 
                }</button>

            {toggle && (
              <ul className="d-lg-none d-md-none ">
                <li ><NavLink className="light "to="/">HOME</NavLink></li>
                <li ><NavLink className="light " to="/Skill" >SKILL</NavLink></li>
                <li ><NavLink className="light " to="/About">ABOUT</NavLink></li>
                <li ><NavLink className="light " to="/certificates" >PROJECT</NavLink></li>
              
              </ul>
            )}

            <div className="d-lg-flex d-md-flex justify-content-between large">
              <NavLink to="/" className="light nav-link">HOME</NavLink>
              <NavLink to="/Skill" className="light nav-link">SKILL</NavLink>
              <NavLink to="/About" className="light nav-link">ABOUT</NavLink>
              <NavLink to="/certificate" className="light nav-link">PROJECT</NavLink>
            </div>
            </div>

            <div className="col-lg-2 col-md-2 time">Time:{formattedDate()}</div>
        </div>
      </div>
    
    </React.Fragment>
  )
}

export default NavComponent;