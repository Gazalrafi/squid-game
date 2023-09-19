
import React from 'react';
import GreenLightRedLight from './GreenLightRedLight';
import {Route,Routes, } from 'react-router-dom';
import UserRegister from './UserRegister';
import Response from './Response';
import Score from './Score.js'
import Fail from './Fail';
import Rule from './Rule';

function App() {
  return (
    
  <>
  <Routes>
  <Route path="/" exact element={<UserRegister/>}/>
  <Route path="/greenred" exact element={<GreenLightRedLight/>}/>
  <Route path="/response" exact element={<Response/>}/>
  <Route path="/score" exact element={<Score/>}/>
  <Route path="/fail" exact element={<Fail/>}/>
  <Route path="/rule" exact element={<Rule/>}/>
  
  
  
  </Routes>
  
  {/* <GreenLightRedLight/> */}
  </>
  );
}

export default App;
