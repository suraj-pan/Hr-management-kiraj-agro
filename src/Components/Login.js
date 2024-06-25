import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Assume password is required
  const navigate = useNavigate();

  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const mockToken = "1df99a5f7b6dc373b2c7c3278b82312ac0b30a25a1d3aef06fab6d481625c700";

      // Static admin credentials (for demo purposes)
      
      const adminPassword = 'admin/admin';

  

    try {
      

      // Fetch user profile using the token
      const response = await fetch('https://gorest.co.in/public-api/users', {
        headers: {
          'Authorization': `Bearer ${mockToken}`,
          'Accept': 'application/json'
        }
      });
    
      const data = await response.json();
      const users = data.data;

      const user =users.find(user =>user.email == email);
      console.log(email,users)
      if ( user && password === adminPassword){
        navigate("/admin")
        return
      }
      if (user) {
        // Navigate to the profile page with the user ID
        navigate(`/profile/${user.id}`);
      } else {
        setError('User not found');
      }

    
    } catch (error) {
      setError(error ||'Error fetching profile data');
    }
};

  return (
  <div className='flex w-full items-center justify-center min-h-screen bg-gray-100'>

      <div className="bg-white max-w-md py-8 rounded-md px-6 shadow-lg" >
      <h2 className='text-2xl font-bold text-center mb-6  text-gray-800'>Login</h2>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div>
          <label className='block text-sm font-medium  text-gray-700 '>Email:</label>
          <input className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-opacity-50 ' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label className='block text-sm font-medium  text-gray-700 '>Password:</label>
          <input className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-opacity-50 ' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none  focus:ring-indigo-500 focus:ring-opacity-50" type="submit">Login</button>
      </form>
      {error && <p className='mt-4 text-red-600'>{error}</p>}
 
    </div>
  </div>
  );
};



export default Login;
