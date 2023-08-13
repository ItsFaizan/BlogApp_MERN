import React from 'react';
import loginImg from '../assets/login.jpg'
function Register()  {

        return (
            <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
                <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImg} alt="login" />
                </div>

                <div className='bg-gray-800 flex flex-col justify-center'>
                    <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                        
                    <h2 className="text-4xl text-white font-bold text-center">SIGN UP</h2>


                        <div className='flex flex-col text-gray-400 py-2'>
                            <label>Full Name</label>
                            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" placeholder="User Name" />
                        </div>
                        <div className='flex flex-col text-gray-400 py-2'>
                            <label>Email</label>
                            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" placeholder="Email" />
                        </div>
                        <div className='flex flex-col text-gray-400 py-2'>
                            <label>Education</label>
                            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" placeholder="education" />
                        </div>
                        <div className='flex flex-col text-gray-400 py-2'>
                            <label>Password</label>
                            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" placeholder="Password" />
                        </div>
                        <div className='flex flex-col text-gray-400 py-2'>
                            <label>Interests</label>
  <p>
    <input
      className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
      type="checkbox"
      name="interests"
      value="sports"
    /> Sports
  </p>
  <p>
    <input
      className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
      type="checkbox"
      name="interests"
      value="movies"
    /> Movies
  </p>
  <p>
    <input
      className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
      type="checkbox"
      name="interests"
      value="education"
    /> Education
  </p>
  <p>
    <input
      className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
      type="checkbox"
      name="interests"
      value="business"
    /> Business
  </p>
</div>

                        <button className='w-full my-5 py-2 bg-teal-500 shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg ' type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        );
    
}

export default Register;