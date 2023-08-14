import React from 'react';
import loginImg from '../assets/login.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login()  {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
     try{
          const res = await fetch("/backend/user_auth/user_login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
                
              },
              body: JSON.stringify({ email, password })
            });
  
        const data = await res.json();
        if (data.error) {
            alert(data.error);
        }
        else
        {
          navigate('/landingpage');
        }
  
      } catch (err) {
        console.log(err);
      }
    };

        return (
            <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
                <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={loginImg} alt="login" />
                </div>

                <div className='bg-gray-800 flex flex-col justify-center'>
                    <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg' onSubmit={handleSubmit}>
                        
                    <h2 className="text-4xl text-white font-bold text-center">SIGN IN</h2>


                        <div className='flex flex-col text-gray-400 py-2'>
                            <label>Email</label>
                            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='flex flex-col text-gray-400 py-2'>
                            <label>Password</label>
                            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className='w-full my-5 py-2 bg-teal-500 shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg ' type="submit">Sign In</button>
                        <div className='flex justify-between text-gray-400 py-2'>
                            <p className='flex items-center'>Don't have an account?</p>
                            <button className='w-[15vh] my-5 py-2 bg-teal-500 shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg '> <Link to="/register">Sign Up</Link></button>
                        </div>
                    </form>
                </div>
            </div>
        );
    
}

export default Login;