import { faClipboardCheck, faFaceRollingEyes, faFaceSmileWink, faTimes, faUniversity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Certificate = () => {
  return (
    <div className=' container d-flex justify-content-center mt-5'>
        <div>
        <div>
            <h1 style={{color:"red"}}>Project:</h1>
            <p style={{color:"white",fontSize:"23px",fontStyle:"italic"}}>
<a href='https://shop-nest-green.vercel.app/login' target='_blank' style={{textDecoration:"none",color:"blue"}}><FontAwesomeIcon icon={faUniversity} /> visit here...</a>
<div className='mt-3'>Project Name: <span style={{color:"red"}}><b>SHOPNEST</b></span></div>

<div>Technologies Used: MongoDB, Express, React, Node.</div>
<div>	Description: The application features robust authorization and authentication mechanisms implemented through Passport.js, ensuring secure user access. Additionally, it includes an integrated email functionality powered by Nodemailer, allowing customers to receive their order receipts via email.</div>
</p>
            
           
        </div>
        <div className='mt-5'>
            <h1 style={{color:"red"}}>Certificate:</h1>
            <p style={{color:"white",fontSize:"23px",fontStyle:"italic"}}>JavaScript completion certificate from Scaler Topics.</p>
            <p style={{color:"white",fontSize:"23px",fontStyle:"italic"}}>React completion certificate from Scaler Topics.</p>
           
        </div>

         <div>
            <h1 style={{color:"red"}}>Experience:</h1>
            <p style={{color:"white",fontSize:"23px",fontFamily:"sans-serif",fontStyle:"italic"}}>During my 6-month industrial training at Excellence Technology in Mohali, I gained hands-on experience in MERN (MongoDB, Express.js, React, and Node.js) stack development. The training provided me with in-depth exposure to building full-stack applications, where I learned both front-end and back-end technologies. On the front-end, I mastered React, creating dynamic and responsive user interfaces, while on the back-end, I worked with Node.js and Express.js to develop RESTful APIs. I also learned how to interact with databases using MongoDB, ensuring smooth data management and storage.</p>
            
           
        </div>
        </div>
        
    </div>
  )
}

export default Certificate
