import { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Footer/>
    </>
  )
}

export default App
