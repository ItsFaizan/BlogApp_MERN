import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import landingimg from '../assets/blue-surface-with-study-tools.jpg'
import profilepic from '../assets/profile.png'
import { useCookies } from 'react-cookie';
export const Profile = () => {

  const [customerinfo, setCustomerinfo] = useState(null);
  const [cookies] = useCookies(['accessToken']);
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('/backend/users/get_user_info', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${cookies.accessToken}`,
          },
        });
        const data = await response.json();
        setCustomerinfo(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserInfo();
  }, [cookies.accessToken]);

  return (
    <div>
    {customerinfo === null ? (
      <p>Loading...</p>
    ) : (

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
    <div className="p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-3xl">
      <div className="text-center">
        <img
          src={profilepic}
          alt="avatar"
          className="rounded-circle mx-auto"
          style={{ width: '150px' }}
        />
        <h5 className="mt-3 text-gray-600 text-lg">{customerinfo.user.fullName}</h5>
        <p className="text-gray-600 mb-2">{customerinfo.user.email}</p>
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
                <td className="px-2 sm:px-4 py-2">{customerinfo.user.fullName}</td>
                <td className="px-2 sm:px-4 py-2">{customerinfo.user.email}</td>
                <td className="px-2 sm:px-4 py-2">{customerinfo.user.education}</td>
                <td className="px-2 sm:px-4 py-2">{customerinfo.user.interests}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/editprofile"
            className="bg-gray-600 text-white hover:bg-white hover:text-gray-950 py-2 px-4 rounded-md mr-2"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

      
    )}
    </div>
  
  )
}
