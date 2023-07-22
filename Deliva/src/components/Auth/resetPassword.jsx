


function ResetPassword () {


    return (
      <>
      <div className=''>
        <div className='bg-white py-40 px-40 flex flex-col mx-auto mt-16 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:flex lg:max-w-none'>
          <div className="mb-10">
            <h1 className="text-black text-bold mb-6">Reset Password</h1>
            <p className="text-black mb-4">Please input your new password to reset your password.<br /> enjoy our services.</p>
          </div>
          <div className="mb-10 flex flex-col">
          <label className="text-black text-left" htmlFor="">New Password</label>
          <input className='mt-2 mb-3 py-4 px-5 rounded-xl border-solid border-2 border-gray-600' type="password" name="" id="" placeholder='Enter your password.' />
          <label className="text-black text-left" htmlFor="">Confirm Password</label>
          <input className='mt-2 mb-3 py-4 px-5 rounded-xl border-solid border-2 border-gray-600' type="password" name="" id="" placeholder='Confirm your password.' />
          </div>
          <button className=" bg-black mt-35 text-2xl text-white" type="submit">Submit</button>
        </div>
      </div>
      </>
    )
  }
  
   export default ResetPassword
  