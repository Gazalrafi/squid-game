import React from 'react';
import classes from './Score.module.css'
import { NavLink } from 'react-router-dom';
import { useState,useLayoutEffect } from 'react';


function Score() {

     const [data,setData]=useState([]);
    

     const Api="https://returnjourneyllp-default-rtdb.firebaseio.com/countData.json";
     const  getScore = async (url)=>{
          try{
      
           const res= await fetch(url);
           const mydata=await res.json();
          //  mydata === null ? setData([]) : 
          setData(mydata);
             console.log(mydata)
          }
          catch(error){
             console.log(error)
          }
         
          }
          useLayoutEffect(()=>{
              getScore(Api)
          },[])
    

  return (
   <>
   <div className={classes.container}>
    <div className={classes.image}>
     
         {data[0]<10 ?
          (
          <img src="https://freepngimg.com/thumb/sad_emoji/36807-4-sad-emoji-clipart.png" alt="sad"></img>
          )
         :
         (<img src="https://media.istockphoto.com/id/1182465245/photo/gold-winners-trophy-champion-cup-with-falling-confetti.jpg?s=612x612&w=0&k=20&c=oL7XQ2GgDptAOYAZY_63kYjRrAnb_Zhn0GUdNLy4rpY=" alt="trophy"></img>
         )}
    </div>
    <div style={{fontSize:"45px",color:"#013220",textAlign:"center"}}>
     { data[0]<10 ? "Game Over":"You Win" }
    </div>
    <h1>Total Score:{data}</h1>
      {data[0]>9 && data<15 ? <h1>Easy Level</h1>:<h1></h1> }
      {data[0]>14 && data<26 ? <h1>Medium Level</h1>:<h1></h1> }
    <div className={classes.link}>
         <NavLink to="/greenred" style={{textDecoration:"none",color:"white", backgroundColor:"#AA336A",padding:"5px"}}>Again Start the Game </NavLink>
    </div>
   </div>
   </>
  )
}

export default Score