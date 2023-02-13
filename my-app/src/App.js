import React from 'react';
import {BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import Register from './Pages/Register';
import Chat from './Pages/Chat';
import Login from './Pages/Login';
function App()
{
  return(
    <BrowserRouter>
    <Routes>
      <Route  path ='/register'  element ={<Register/>}/>
      <Route  path ='/login'  element ={<Login/>}/>
      <Route  path ='/chat'  element ={<Chat/>}/>
      <Route path='/' element={ <Navigate to="/login" replace /> }/>


    
    </Routes>
    </BrowserRouter>
  );
}
export default App;