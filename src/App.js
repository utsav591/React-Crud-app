import './App.css';
import React, { useState, useEffect } from "react";
import Home from './Components/Home';
import AddUser from './Components/AddUser';
import {BrowserRouter as Router, Route ,Routes  } from 'react-router-dom';
import EditUser from './Components/EditUser';


function App() {
 const [Users , setUserData] = useState("/");
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setUserData(data.Users));
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/create"  element={<AddUser />}/>
        <Route path="/edit"  element={<EditUser />}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
