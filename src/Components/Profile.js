import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Profile = () => {

    const {id} = useParams();
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState('');
    const mockToken = "1df99a5f7b6dc373b2c7c3278b82312ac0b30a25a1d3aef06fab6d481625c700";
  
    useEffect(() => {
      const fetchProfile = async () => {
        try {
          const response = await fetch(`https://gorest.co.in/public-api/users/${id}`, {
            headers: {
              'Authorization': `Bearer ${mockToken}`,
              'Accept': 'application/json'
            }
          });
  
          const data = await response.json();
          if (data.code === 200) {
            setProfile(data.data);
          } else {
            setError(data.data.message);
          }
        } catch (error) {
          setError('Error fetching profile data');
        }
      };
  
      fetchProfile();
    }, [id]);
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        {error && <p className="text-red-500 mb-4">{error}</p>}
      
          <>
            {profile ? (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">User Profile</h3>
                <div className="mb-2">
                  <p className="text-sm font-medium text-gray-700">Name:</p>
                  <p className="text-lg font-semibold">{profile.name}</p>
                </div>
                <div className="mb-2">
                  <p className="text-sm font-medium text-gray-700">Email:</p>
                  <p className="text-lg font-semibold">{profile.email}</p>
                </div>
                <div className="mb-2">
                  <p className="text-sm font-medium text-gray-700">Gender:</p>
                  <p className="text-lg font-semibold">{profile.gender}</p>
                </div>
                <div className="mb-2">
                  <p className="text-sm font-medium text-gray-700">Status:</p>
                  <p className="text-lg font-semibold">{profile.status}</p>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">No profile data available</p>
            )}
          </>
     
      </div>
    </div>
  )
}

export default Profile
