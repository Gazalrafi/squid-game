import React from 'react'

const Rule = () => {
  return (
   <>
   <div style={{color:"maroon",padding:"5px",fontSize:"20px"}}>Game Rules:-</div>
   <div style={{color:"#363636",padding:"5px"}}>
    <ol  style={{backgroundColor:"burlywood"}}>
        <li >When the Game is started You will see a box with changing color, Red and Green.</li>
        <li >Click On Green to Increase Your Score.</li>
        <li>If You Click On Red Then Game is Over.</li>
        <li>If Your Score Will be 10 You Will Win by passing Easy Level.</li>
        <li>If Your Score Will be 15 You Will Win by passing Medium Level.</li>
        <li>If Your Score Will be 25 You Will Win by passing Easy Level.</li>
    </ol>
   </div>
   </>
  )
}

export default Rule