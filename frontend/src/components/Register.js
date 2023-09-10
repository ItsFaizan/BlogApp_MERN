import React from 'react';
import loginImg from '../assets/photo-1572976993240-ee51181680be.jpg'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Register()  {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [education, setEducation] = useState('');
  const [selectedInterests, setSelectedInterests] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        
          try {
            const response = await fetch('/backend/user_auth/user_register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                fullName: fullName,
                email: email,
                education: education,
                interests: selectedInterests,
                password: password
              }),
            });
        } catch (error) {
          console.error(error);
        }
        }

      
    const handleInterestChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedInterests.includes(selectedValue)) {
          setSelectedInterests(selectedInterests.filter((item) => item !== selectedValue));
        } else {
          setSelectedInterests([...selectedInterests, selectedValue]);
        }
      };

        return (
            <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
                <div className='hidden sm:block'>
                <img className='w-full h-[100vh] object-cover' src={loginImg} alt="login" />
                </div>

                <div className='bg-[#0c1013] flex flex-col justify-center'>
                    <form className='max-w-[400px] w-full mx-auto bg-[#14191f] p-8 px-8 rounded-lg' onSubmit={handleSubmit}>
                        
                    <h2 className="text-4xl text-white font-bold text-center">SIGN UP</h2>


                        <div className='flex flex-col text-gray-400 py-2'>
                            <label>Full Name</label>
                            <input className='rounded-lg bg-gray-700 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" placeholder="Full Name"  value={fullName} onChange={(e) => setFullName(e.target.value)} />
                        </div>
                        <div className='flex flex-col text-gray-400 py-2'>
                            <label>Email</label>
                            <input className='rounded-lg bg-gray-700 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='flex flex-col text-gray-400 py-2'>
                            <label>Education</label>
                            <input className='rounded-lg bg-gray-700 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" placeholder="education" value={education} onChange={(e) => setEducation(e.target.value)}  />
                        </div>
                        <div className='flex flex-col text-gray-400 py-2'>
                            <label>Password</label>
                            <input className='rounded-lg bg-gray-700 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='flex flex-col text-gray-400 py-2'>
      <label>Interests</label>
      <p>
        <input
          className='rounded-lg bg-gray-700 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
          type='checkbox'
          name='interests'
          value='sports'
          onChange={handleInterestChange}
          checked={selectedInterests.includes('sports')}
        />{' '}
        Sports
      </p>
      <p>
        <input
          className='rounded-lg bg-gray-700 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
          type='checkbox'
          name='interests'
          value='movies'
          onChange={handleInterestChange}
          checked={selectedInterests.includes('movies')}
        />{' '}
        Movies
      </p>
      <p>
        <input
          className='rounded-lg bg-gray-700 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
          type='checkbox'
          name='interests'
          value='education'
          onChange={handleInterestChange}
          checked={selectedInterests.includes('education')}
        />{' '}
        Education
      </p>
      <p>
        <input
          className='rounded-lg bg-gray-700 mt-1 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
          type='checkbox'
          name='interests'
          value='business'
          onChange={handleInterestChange}
          checked={selectedInterests.includes('business')}
        />{' '}
        Business
      </p>
    </div>
                        <button className='w-full my-1 py-2 bg-[#3f5c6e] hover:bg-[#FEFCFF] hover:text-[#3f5c6e] text-white font-semibold rounded-lg ' type="submit">Sign Up</button>
                        <div className='flex justify-between text-gray-400'>
                            <p className='flex items-center'>Return to Login </p>
                            <Link to="/"> <button className='w-[15vh] my-2 py-2 bg-[#3f5c6e] hover:bg-[#FEFCFF] hover:text-[#3f5c6e] text-white font-semibold rounded-lg '> Login</button></Link>
                        </div>
                    </form>
                </div>
            </div>
            
        );


    
}



export default Register;