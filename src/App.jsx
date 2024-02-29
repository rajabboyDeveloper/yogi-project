import React from 'react'
import './App.css'
import Navbar from './components/layots/navbar/Navbar'
import Footer from './components/layots/footer/Footer'
import Home from './components/pages/home/Home'
function App() {
  return (
    <div className='wrapper'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App