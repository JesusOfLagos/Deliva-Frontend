import { useState } from 'react'
import { Link } from 'react-router-dom'
import signUp from '../src/components/SignUp/signUp'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

    <signUp/>
      <div className="card">
        <button>Get Started</button>
      </div>
    </>
  )
}

export default App
