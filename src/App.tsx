
import React from "react";
import {
  BrowserRouter as Router,
    Route, Routes, 
} from "react-router-dom";
import Signin from "./components/Sign in/Signin";
import Layout from "./Layout";
import Login from './components/Login/Login';








function App() {
  
 
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={ <Layout/> }>
    <Route path='' element={ <Signin/> }/>
    <Route path='login' element={ <Login/> }/>
  </Route>
      </Routes>
    </Router>
     
      
    </>
  )
}

export default App
