import { useState } from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../src/components/SignUp/signUp'
import SignIn from '../src/components/SignUp/signIn'
import Navbar from './components/LandingPage/Navbar'
import Hero from '../src/components/LandingPage/Hero'
import Footer from '../src/components/LandingPage/Footer'
import './App.css'


function App() {
  return (
    <>
      <div className="card">
      <Navbar />
      </div>
    </>
  )
}

export default App
