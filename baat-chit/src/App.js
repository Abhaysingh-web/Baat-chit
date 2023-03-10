import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./style.scss";
import { AuthContext } from './context/AuthContext';
import {Navigate} from "react-router-dom"


const App = () => {

  const {currentUser} = useContext(AuthContext)
  console.log(currentUser) 

const ProtectedRoute = ({children}) =>{
  if(!currentUser){
    return <Navigate to="/login"/>
    
  }
  return children
}



  return (
   <div>
   <BrowserRouter>
   <Routes >
    <Route path="/">
       <Route  index element={<ProtectedRoute><Home/></ProtectedRoute> }/>
     <Route path="login" element={<Login/>}/>
       <Route path="register" element={<Register/>}/>
     </Route>
   </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App;