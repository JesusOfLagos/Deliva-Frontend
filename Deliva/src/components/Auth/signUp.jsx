
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';





import googleLogo from '../../assets/googleLogo.png'
import { Link } from "react-router-dom"
// import Select from './select'



const handleButtonClick = () => {
  toast.success('This is a success toast!', {
    position: 'top-right', // You can customize the position here if needed
  });
};



function SignUp () {

  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
const value = "Option 1";

  return (
    <>
    <div className=''>
      <div className='bg-white py-40 px-40 flex flex-col mx-auto mt-16 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:flex lg:max-w-none'>
        <div className="mb-10">
          <h1 className="text-black text-bold mb-6">Deliva Pro</h1>
          <p className="text-black mb-4">Please input your email to login or sign up into your account to <br /> enjoy our services.</p>
        </div>
        <div className="mb-10 flex flex-col">
        {/* <p className="pt-2 pl-[28rem] text-black">Don't have an account? <span className="bg-red"><a href="/" className="text-green-600 text-right">Sign Up</a></span></p> */}
        <label className="text-black text-left" htmlFor="">Email</label>
        <input className='mt-2 mb-3 py-4 px-5 rounded-xl border-solid border-2 border-gray-600' type="email" name="" id="" placeholder='Enter your email address.' />
        <label className="text-black text-left" htmlFor="">Location</label>
        {/* <select
      className={select}
      value={value}
      onChange={handleChange}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select> */}
    <select className="mt-2 mb-3 py-4 px-5 bg-white border-2 border-solid border-gray-600 text-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4">
  <option className='text-gray-600' selected>Choose An Option</option>
  <option className='text-gray-600' value="Option 1">Option 1</option>
  <option className='text-gray-600' value="Option 2">Option 2</option>
  <option className='text-gray-600' value="Option 3">Option 3</option>
  <option className='text-gray-600' value="Option 4">Option 4</option>
  <option className='text-gray-600' value="Option 5">Option 5</option>
</select>
        <label className="text-black text-left" htmlFor="">Password</label>
        <input className='mt-2 mb-3 py-4 px-5 rounded-xl border-solid border-2 border-gray-600' type="password" name="" id="" placeholder='Enter your password.' />
        <label className="text-black text-left" htmlFor="">Verify Password</label>
        <input className='mt-2 mb-3 py-4 px-5 rounded-xl border-solid border-2 border-gray-600' type="password" name="" id="" placeholder='Verify your password.' />
        <p className="pt-2 pl-[28rem] text-black">Have an account? <span className="bg-red"><Link to="/sign-in" className="text-red-600 text-right">Login</Link></span></p>
        </div>
        <button onClick={handleButtonClick} className=" bg-black mt-35 text-2xl text-white" type="submit">Sign Up</button>


        <div className="flex flex-row pb-10 mt-20 justify-center">
          <hr className="w-20 mt-3 border-solid mr-5 border-2 border-gray-600" />
          <p className="pb-6 ">OR</p>
          <hr className="w-20 mt-3 border-solid border-2 border-gray-600 ml-5" />
        </div>


        <div className='align-center'>
          <button className='flex border-solid border-2 border-gray-600 flex-row justify-center ml-56 rounded-3xl bg-white'>
          <img className='h-6 w-5 rounded-3xl mr-5' src={googleLogo} alt="" />
          <p className='text-black'>Sign Up With Google</p>
          </button>
        </div>
      <p className='text-black mt-20'>For further support, you may visit the Help Center or contact <br /> our customer service.</p>
      </div>
      <ToastContainer position="top-right" />
    </div>
    </>
  )
}

 export default SignUp