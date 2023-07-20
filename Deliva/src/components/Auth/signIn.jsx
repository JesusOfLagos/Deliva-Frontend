
// import googleLogo from './public/googleLogo'


// function SignIn () {


//   return (
//     <>
//     <div className=''>
//       <div className='bg-white py-40 px-40 flex flex-col mx-auto mt-16 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:flex lg:max-w-none'>
//         <div className="">
//           <h2 className="text-black">Sign In To Deliva</h2>
//           <p className="text-black">Sign in to get access to the beauty we have to offer!</p>
//         </div>
//         <label className="text-black" htmlFor="">Email</label>
//         <input className="border-solid border-2 border-gray-500 rounded-2xl " type="email" name="email" placeholder="Enter your email address" id="" />
//         <label className="text-black" htmlFor="">Password</label>
//         <input className="border-solid border-2 border-gray-500 rounded-2xl " type="password" name="password" placeholder="Enter your password" id="" />
//         <button className=" bg-black mt-15 text-2xl text-white" type="submit">Sign In</button>


//         <dir>
//           <img src='' alt="" />
//           <p>Sign In With Google</p>
//         </dir>
//       </div>
//     </div>
//     </>
//   )
// }

// export default SignIn

function SignIn () {


  return (
    <>
 <div className="bg-black ring-1 ring-gray-200 rounded-3xl py-1 md:py-32 sm:py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm: py-8 text-4xl">Sign In to Deliva</h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Sign in to enjoy the load of services we offer.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex flex-col">
            <label className="py-3 text-white" htmlFor="">Email</label>
            <input className='mt-4 py-2 px-5 rounded-xl border-solid border-2 border-gray-600' type="email" name="" id="" placeholder='Enter your email address.' />
            <label className="py-3 text-white" htmlFor="">Password</label>
            <input className='mt-4 p-2 rounded-xl border-solid border-2 border-gray-600' type="password" name="" id="" placeholder='Enter your password.' />
            <p className="p-5 text-white flex flex-row">Forgot password? <span className="text-red bg-red"><a href="/" className="text-red-600">Reset</a></span></p>
            <div className="mt-12">
            <button className="bg-white cursor-pointer" disabled="disabled">
              <p className="text-black">
              Sign Up
              </p>
              </button>
              </div>
            <div className="mt-10 flex items-center gap-x-4">
              
              <div className="h-15 w-20 container bg-black flex-auto bg-gray-100" >

              </div>
            </div>
          
          </div>
         
        </div>
      </div>
    </div>

    </>
  )
}

export default SignIn

