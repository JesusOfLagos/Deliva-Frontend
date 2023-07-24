// import { useState } from 'react'
// import { Link } from 'react-router-dom'
import SignUp from './components/Auth/signUp'
import SignIn from './components/Auth/signIn'
import ResetPassword from './components/Auth/resetPassword'
import ForgotPassword from './components/Auth/forgotPassword'
import Navbar from './components/LandingPage/Navbar'
// import Hero from '../src/components/LandingPage/Hero'
// import Footer from '../src/components/LandingPage/Footer'
import './App.css'


// function App() {
  // return (
    // <>
      {/* <div className="card"> */}
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <Footer /> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <ResetPassword /> */}
      {/* <ForgotPassword /> */}
      {/* </div> */}
    {/* </> */}
  // )
// }





function App() {
  return (
    <>
     <Routes>
      <Route>
        <Route path ="/sign-in" element = {<SignIn />} />
        <Route path ="/sign-up" element = {<SignUp />} />
        <Route path ="/sign-in" element = {<ResetPassword />} />
        <Route path ="/sign-in" element = {<ForgotPassword />} />
        <Route path ="/sign-in" element = {<Navbar />} />
      </Route>
     </Routes>
    </>
  )
}

export default App