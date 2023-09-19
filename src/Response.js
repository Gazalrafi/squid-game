import React from 'react'
import { NavLink } from 'react-router-dom'

function Response() {
  return (
    <>
   <div style={{maxWidth:"1920px",maxHeight:"100vh" ,textAlign:"center",margin:"10px"}}>
   <h1>You Registered Succesfully</h1>
   <p style={{fontSize:"20px",color:"black"}}>Please Click On Home To Start Your Game </p>
        <NavLink to='/greenred' style={{fontSize:"20px",color:"green"}}>
             Home
        </NavLink><br/>
    <div style={{ marginTop:"25px"}}>
        <NavLink to='/rule' style={{
          fontSize:"20px",
          color:"purple",
          textDecoration:"none",
          border:"1px solid transparent",
          backgroundColor:"burlywood",
         
          }}>
               Click Me To Read The Game Rules
        </NavLink>
    </div>
    </div>
   </>
  )
}

export default Response