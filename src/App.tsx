import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import Content from './components/Content'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação em ms
      once: true, // anima apenas uma vez
    });
  }, []);
  return (
    <>
        <Content />
    </>
  )
}

export default App
