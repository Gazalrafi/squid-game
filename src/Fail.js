import React from 'react';
import classes from './Fail.module.css';


function Fail(props) {
  return (
   <>
   <div className={classes.container}>

   <div className={classes.image}>
   <img src="https://freepngimg.com/thumb/sad_emoji/36807-4-sad-emoji-clipart.png" alt="sad" />
   </div>

   <div className={classes.headers}>
    <div className={classes.header_one}>
        <h1>Oops....Game Over!!!!!!</h1>
   </div>
   <div className={classes.header_two}>
        <h1>Your Score:{props.score}</h1>
    </div>
   </div>

   </div>
   </>
  )
}

export default Fail