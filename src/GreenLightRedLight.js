import React, { useState,useEffect } from 'react';
import classes from './GreenLightRedLight.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const colors=["#008000","#FF0000"];

function GreenLightRedLight() {

  const [value,setValue]=useState(0);
  const [count,setCount]=useState(0);
  const [time,setTime]=useState(40);
  const [view,setView]=useState(false);

  const navigate=useNavigate();

  
  
const startHandle=()=>{


  const interval1=setInterval(()=>{
   
   setTime((t)=>{
  
      if(t>0){
      
         return t-1;  
      }  
    
      navigate('/score')
   
     })
       
   },1000)
   
  
    const interval2=setInterval(()=>{
         setValue((v)=>{
          return v===1? 0:v+1;
         })
    },1000)

       return()=>

       clearInterval(interval1,interval2)

    
}
  
const clickHandler=()=>{

  if(value===0 ){
    setCount((c)=>{
     
      return c+1

    })
   
  }
     if(value===1){
      navigate('/fail')
    } 

  }
  useEffect(() => {
    const addingItems = async () => {
     
      try {
        const response = await axios.put(
          "https://returnjourneyllp-default-rtdb.firebaseio.com/countData.json",
          [count]
        );
      } catch (error) {
        console.log(error);
      }
    };

    addingItems();
    
  }, [count]);



    const handleClick=()=>{
      setView(curr=>!curr)
    }

    const handleBothClick=()=>{
     
      startHandle();
      handleClick();
  
    
    }

   

  return (
<>
<div className={classes.box_container}>
  <div className={classes.headers}>

     <h1>Your Score:{count}</h1>
      <h1> Time Left:{time} </h1>
     

  </div>
  <div className={classes.box_area}>
     {view &&<div  className={classes.box} style={{
         backgroundColor:colors[value]
      }} onClick={()=>clickHandler()}></div>}
   </div>
   <div className={classes.click}>
   <button onClick={handleBothClick}>Start the Game</button>
  </div>

 
</div>

</>
  )
}

export default GreenLightRedLight