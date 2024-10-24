import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Booking from './pages/Booking.jsx'
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element = {<Home/>}/>
          <Route path="/book" element = {<Booking/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/signup" element = {<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
