
import googleLogo from '../../assets/googleLogo.png'


function SignIn () {


  return (
    <>
    <div className=''>
      <div className='bg-white py-40 px-40 flex flex-col mx-auto mt-16 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:flex lg:max-w-none'>
        <div className="mb-10">
          <h1 className="text-black text-bold mb-6">Deliva Pro</h1>
          <p className="text-black mb-4">Please input your email to login or sign up into your account to <br /> enjoy our services.</p>
        </div>
        <div className="mb-10 flex flex-col">
        <p className="pt-2 pl-[28rem] text-black">Don't have an account? <span className="bg-red"><a href="/" className="text-green-600 text-right">Sign Up</a></span></p>
        <label className="text-black text-left" htmlFor="">Email</label>
        <input className='mt-2 mb-3 py-4 px-5 rounded-xl border-solid border-2 border-gray-600' type="email" name="" id="" placeholder='Enter your email address.' />
        <label className="text-black text-left" htmlFor="">Password</label>
        <input className='mt-2 mb-3 py-4 px-5 rounded-xl border-solid border-2 border-gray-600' type="password" name="" id="" placeholder='Enter your password.' />
        <p className="pt-2 pl-[28rem] text-black">Forgot password? <span className="bg-red"><a href="/" className="text-red-600 text-right">Reset</a></span></p>
        </div>
        <button className=" bg-black mt-35 text-2xl text-white" type="submit">Sign In</button>


        <div className="flex flex-row pb-10 mt-20 justify-center">
          <hr className="w-20 mt-3 border-solid mr-5 border-2 border-gray-600" />
          <p className="pb-6 ">OR</p>
          <hr className="w-20 mt-3 border-solid border-2 border-gray-600 ml-5" />
        </div>


        <div className='align-center'>
          <button className='flex border-solid border-2 border-gray-600 flex-row justify-center ml-56 rounded-3xl bg-white'>
          <img className='h-6 w-5 rounded-3xl mr-5' src={googleLogo} alt="" />
          <p className='text-black'>Sign In With Google</p>
          </button>
        </div>
      <p className='text-black mt-20'>For further support, you may visit the Help Center or contact <br /> our customer service.</p>
      </div>
    </div>
    </>
  )
}

 export default SignIn

// function SignIn () {


//   return (
//     <>
//  <div className="bg-black ring-1 ring-gray-200 rounded-3xl py-1 md:py-32 sm:py-5">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl sm:text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-white sm: py-8 text-4xl">Sign In to Deliva</h2>
//           <p className="mt-6 text-lg leading-8 text-white">
//             Sign in to enjoy the load of services we offer.
//           </p>
//         </div>
//         <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
//           <div className="p-8 sm:p-10 lg:flex flex-col">
//             <label className="py-3 text-white" htmlFor="">Email</label>
//             <input className='mt-4 py-2 px-5 rounded-xl border-solid border-2 border-gray-600' type="email" name="" id="" placeholder='Enter your email address.' />
//             <label className="py-3 text-white" htmlFor="">Password</label>
//             <input className='mt-4 p-2 rounded-xl border-solid border-2 border-gray-600' type="password" name="" id="" placeholder='Enter your password.' />
//             <p className="p-5 text-white flex flex-row">Forgot password? <span className="text-red bg-red"><a href="/" className="text-red-600">Reset</a></span></p>
//             <div className="mt-12">
//             <button className="bg-white cursor-pointer" disabled="disabled">
//               <p className="text-black">
//               Sign Up
//               </p>
//               </button>
//               </div>
//             <div className="mt-10 flex items-center gap-x-4">
              
//               <div className="h-15 w-20 container bg-black flex-auto bg-gray-100" >

//               </div>
//             </div>
          
//           </div>
         
//         </div>
//       </div>
//     </div>

//     </>
//   )
// }

// export default SignIn
