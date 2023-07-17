import { useState } from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../src/components/SignUp/signUp'
import SignIn from '../src/components/SignUp/signIn'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/LandingPage/home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      <Home />
        {/* <button>Get Started</button> */}
      </div>
    </>
  )
}

export default App
