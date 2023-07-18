import { useState } from 'react'
import { Link } from 'react-router-dom'
import SignUp from './components/Auth/signUp'
import SignIn from './components/Auth/signIn'
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
