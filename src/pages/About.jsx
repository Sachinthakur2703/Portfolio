import React from 'react';
import AboutCom from './AboutCom';
import "../styles/About.css";

const About = () => {
    const aboutData = [
        {
            standard: 10,
            school: "Aryan International school",
            cgpa: 9.3
        },
        {
            standard: 12,
            school: "Aryan International school",
            cgpa: 7.8
        },
        {
            standard: "Bsc",
            school: "Himachal Pradesh University",
            cgpa: 7.1
        },
        {
            standard: "MCA",
            school: "Himachal Pradesh Technical University",
            cgpa: 8.14
        }
    ];

    return (
        <div className='container' id="about-section" style={{marginTop:"64px"}}>
      
            
             <div className='container about p-0 ' >
            <div className='row detail m-0'>
                <div className='col-lg-4 col-md-4  detailcontent '>
                    <h1 className='mt-4' style={{fontWeight:"lighter",fontFamily:"cursive"}}>ABOUT</h1>
                    <p className='mt-4' style={{fontWeight:"lighter",fontFamily:"cursive",fontSize:"18px"}}>Hi, I am <span style={{color:"red"}}>Sachin Thakur</span>, a full stack developer with a
            passion for creating beautiful and functional websites. I have
            experience working with a variety of technologies, including <span style={{color:"red"}}>
            React, Redux, Node.js, Express, MongoDB, </span>and more. I am
            always looking to learn new technologies and improve my skills.
            </p>
                </div>
                <div className='col-lg-8 col-md-8 p-4 line'>
                    <h3 style={{fontStyle:"italic"}}>ACADEMIC:</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>EDUCATION</th>
                                <th>SCHOOL/UNIVERSITY</th>
                                <th>CGPA</th>
                            </tr>
                        </thead>
                        <tbody>
                            {aboutData.map((detail, index) => (
                                <AboutCom key={index} {...detail} />
                            ))}
                        </tbody>
                    </table>
                    <h3  className="mt-4"style={{fontStyle:"italic"}}>CERTIFICATE:</h3>
                    <ul style={{listStyle:"disc",display:"inline-block",fontWeight:"lighter",fontFamily:"cursive",fontSize:"18px"}}>
                        <li>JavaScript Course Certificate from Scaler Topics.</li>
                        <li>React Course Certificate from Scaler Topics.</li>
                        <li>DBMS Course Certificate from Scaler Topics.</li>
                    </ul>
                    <h3  className="mt-4"style={{fontStyle:"italic"}}>EXPERIENCE:</h3>
                    <ul style={{listStyle:"disc",display:"inline-block",fontWeight:"lighter",fontFamily:"cursive",fontSize:"18px"}}>
                        <li>Internship cum Training in Excellence Technology, Mohali [Duration: 6 months]</li>
                       
                    </ul>

                </div>
                </div>
          
        </div>
       
        </div>
    );
};

export default About;