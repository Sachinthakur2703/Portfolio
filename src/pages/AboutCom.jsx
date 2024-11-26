import React from 'react'

const AboutCom = ({...detail}) => {
    const { standard, school,cgpa } = detail;
  return (
    <>
                    <tr>
                        <td>{standard}</td>
                        <td>{school}</td>
                        <td>{cgpa}</td>
                    </tr> 
    </>
  )
}

export default AboutCom
