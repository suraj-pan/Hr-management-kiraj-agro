import React, { useState } from 'react'

const Adminpage = () => {
    const [success, setSuccess] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState('');


   
    
    const mockToken = "1df99a5f7b6dc373b2c7c3278b82312ac0b30a25a1d3aef06fab6d481625c700";

    const handleCreateUser = async (event) => {
        event.preventDefault();
    
        const newUser = {
          name,
          email,
          gender,
          status,
     
        };
    
        try {
          const response = await fetch('https://gorest.co.in/public-api/users', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${mockToken}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(newUser)
          });
    
          const data = await response.json();
          if (data.code === 201) {
      
            setSuccess('User created successfully');
            setName('');
            setEmail('');
            setGender('');
            setStatus('');
          } else {
            setError('Failed to create user');
          }
        } catch (error) {
          setError('Error creating user');
        }
      };
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Admin Panel</h2>
        <h3 className="text-lg font-semibold mb-2">Create New User</h3>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {success && <p className="text-green-500 mb-2">{success}</p>}
        <form onSubmit={handleCreateUser} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring  focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring  focus:ring-opacity-50"
            />
          </div>
       
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender:</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring  focus:ring-opacity-50"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Status:</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Create User
          </button>
        </form>
      </div>
    </div>
  )
}

export default Adminpage
