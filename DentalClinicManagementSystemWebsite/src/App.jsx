import { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Landing from './components/Landing.jsx'
import FAQ from './components/FAQ.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Landing/>
      <FAQ/>
      <Footer/>

    </>
  )
}

export default App
