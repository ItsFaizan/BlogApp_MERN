import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import landingimg from '../assets/blue-surface-with-study-tools.jpg';
import profilepic from '../assets/profile.png';

export const EditProfile = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { from } = location.state;
    const [pfullname,setpfullname] = useState(from.user.fullName);
    const [pemail, setpemail] = useState(from.user.email);
    const [peducation, setpeducation] = useState(from.user.education);
    const [pinterests, setpinterests] = useState(from.user.interests);
    const [user_id] = useState(from.user._id);
    const [cookies] = useCookies(['accessToken']);

  const validateInput = async (event) => {
    event.preventDefault();

    const fullName = pfullname;
    const email = pemail;
    const education = peducation;
    const interests = pinterests

    await fetch(`http://localhost:5000/backend/users/${user_id}`, {
      method: 'PUT',
      body: JSON.stringify({ fullName, email, education, interests }),
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${cookies.accessToken}`,
     },
      
    });

    console.log('Updated');
    navigate('/profile');
  };

  return (
    <section >
  <div
    className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-5 p-4 sm:p-8 lg:p-16"
    style={{
      backgroundImage: `url(${landingimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-5xl">
      <div className="text-center">
        <img
          src={profilepic}
          alt="avatar"
          className="rounded-circle mx-auto"
          style={{ width: '150px' }}
        />
        <h5 className="mt-3 text-gray-600 text-lg">{pfullname}</h5>
        <p className="text-gray-600 mb-2">{pemail}</p>
      </div>
      <div className="mt-8 text-center">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-2 sm:px-4 py-2 text-gray-600">Full Name</th>
                <th className="px-2 sm:px-4 py-2 text-gray-600">Email</th>
                <th className="px-2 sm:px-4 py-2 text-gray-600">Education</th>
                <th className="px-2 sm:px-4 py-2 text-gray-600">Interests</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 sm:px-4 py-2">
                <input
                          type="text"
                          value={pfullname}
                          onChange={(e) => setpfullname(e.target.value)}
                          style={{ textAlign: 'center', background: 'transparent',
                          border: '1px solid #718096', 
                          borderRadius: '0.25rem', 
                          padding: '0.25rem', }}
                        />
                </td>
                <td className="px-2 sm:px-4 py-2">
                <input
                          type="text"
                          value={pemail}
                          onChange={(e) => setpemail(e.target.value)}
                          style={{ textAlign: 'center', 
                          background: 'transparent',
                          border: '1px solid #718096', 
                          borderRadius: '0.25rem', 
                          padding: '0.25rem', }}
                        />
                </td>
                <td className="px-2 sm:px-4 py-2">
                <input
                          type="text"
                          value={peducation}
                          onChange={(e) => setpeducation(e.target.value)}
                          style={{ textAlign: 'center',
                          background: 'transparent',
                          border: '1px solid #718096', 
                          borderRadius: '0.25rem', 
                          padding: '0.25rem', }}
                        />
                </td>
                <td className="px-2 sm:px-4 py-2">
                <input
                          type="text"
                          value={pinterests}
                          onChange={(e) => setpinterests(e.target.value)}
                          style={{ textAlign: 'center',
                          background: 'transparent',
                          border: '1px solid #718096',
                          borderRadius: '0.25rem', 
                          padding: '0.25rem', }}
                        />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/profile"
            className="bg-gray-600 text-white hover:bg-white hover:text-gray-950 py-2 px-4 rounded-md mr-2"
            onClick={validateInput}
          >
            Save Changes
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
