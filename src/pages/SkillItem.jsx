import React from 'react';

const SkillItem = ({...skill }) => {
  const { name, value } = skill;
  return (
   <>
      <div className=' col-lg-4 col-md-4 mt-4'>
        <h5  style={{fontWeight:"lighter",fontFamily:"cursive",fontSize:"18px",color:"red"}}>{name}</h5>
        <progress min="0" max="100" value={value} style={{ display: 'inline-block' }} />
        <h6 className='value'>{value}<span style={{color:"red"}}>%</span></h6>
      </div>
 
    </>
  );
};

export default SkillItem;