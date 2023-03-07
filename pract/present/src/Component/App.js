import React from "react";
import "./App.css";
import AProps from "./AProps";
import Welcome from "./Welcome";
import Hooks from "./Hooks";
import Message from "./Message";
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import Tick from "./Tick";

function App() {
  return (
    <div className="App">
      
      <Router>
        <li><Link to="/greet">Properties</Link></li>
        <li><Link to="/welcome">Welcome</Link></li>
        <li><Link to="/function">Hooks</Link></li>
        <li><Link to="/messa">Message</Link></li>
        <li><Link to="/tik">Clock</Link></li>


        <Routes>
          <Route path="/greet" element={<AProps name="Company" tagname="ZasmLabs"/>}></Route>
          <Route path="/welcome" element={<Welcome/>}></Route>
          <Route path="/function" element={<Hooks/>}></Route>
          <Route path="/messa" element={<Message/>}></Route>
          <Route path="/tik" element={<Tick/>}></Route>
        </Routes>
      </Router>
      
      {/*  <AProps name="Company" tagname="ZasmLabs"/>
        <Welcome/> 
       <Message/> 
       <Hooks/>  */} 

          </div>
        );
      }
      export default App;
