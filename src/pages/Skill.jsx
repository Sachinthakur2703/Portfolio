import React from 'react'
import "../styles/Skill.css"

import SkillItem from './SkillItem';

const Skill = () => {
  
    const skills = [
        { name: 'Html', value: 70 },
        { name: 'CSS', value: 70 },
        { name: 'BootStrap', value: 65 },
        { name: 'Tailwind', value: 65 },
        { name: 'React Js', value: 63 },
        { name: 'Node Js', value: 63 },
        { name: 'MongoDB', value: 75 },
        { name: 'Express', value: 80 },
      ];
      
      return (
        <>
        <div className='container qualities '>
        <h1 className='head '>Skills</h1>
        <div className='container qualities1'>
          
           
          <div className='row bars '>
            {skills.map((skill, index) => (
              <SkillItem key={index} {...skill} />
            ))}
          </div>
        </div>
        </div>
        </>
      );
  
}

export default Skill
