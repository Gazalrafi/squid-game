import React from 'react'
import classes from './UserRegister.module.css';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

function UserRegister() {
  
  const [userData,setUserData]=useState({
    name:"",
    email:"",
    mobile:""
  });
    const navigate=useNavigate();
    
    let name,value;

    const postUserData=(event)=>{

       name=event.target.name;
       value=event.target.value;
       setUserData({...userData,[name]:value});
      
     
    }

    const submitHandler = async(event)=>{

      event.preventDefault();
      const { name,email, mobile}=userData;
    try{
     if(name && email && mobile){
     const res= await fetch("https://returnjourneyllp-default-rtdb.firebaseio.com/userData.json",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            name,
            email,
            mobile
        })
     });
     if(res){
        setUserData({ name:"",
        email:"",
        mobile:""});
        navigate("/response")
     }
     else {
        alert("Please Fill the Form")
     }
    
    }
    else{
      alert("please Fill the Required Details")
    }
  }
    catch(error){
       console.log(error)
    }
   
    }

  return (
   <>

   <div className={classes.formBody}>
   <h1> Welcome To Our Squid Game Zone</h1>
   <form className={classes.form} onSubmit={submitHandler}>
   <div className={classes.control}>
          <label htmlFor='text'>Your Name</label>
          <input type='text' id='email' name="name"  value={userData.name} onChange={postUserData} />
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' name="email" value={userData.email} onChange={postUserData}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='number'>Your Mobile Number</label>
          <input type='number' id='number' name="mobile"  value={userData.mobile} onChange={postUserData}/>
        </div>
     
          <button >
            Please register yourself
          </button>
     
      </form>
      </div>
   </>
  )
}

export default UserRegister