import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const user={
    username:name,
    email:email,
    password:password
  }

  console.log("User :",user);
  

   const handleRegister = async (e) => {

    e.preventDefault();


    navigate("/LogIn");
    try {
        const response = await fetch(`/api/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Admin registered successfully");
            navigate("/LogIn"); // here you pass the path to navigate the screen where you want .
        } else {
            console.error("Failed to register admin");
            // setError(data.message)
            console.log(data.error);
        }
    } catch (error) {
        console.log(error);
    }

};

  return (
    <div className="mt-0 w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('SignUp.png')" }}>
      <div className="flex items-center justify-center h-full">
        <div className="bg-black/60 backdrop-blur-md p-8 rounded-lg shadow-2xl max-w-md">
          <form onSubmit={handleRegister} className="space-y-6">
            <h2 className="text-center text-2xl font-bold text-white">Sign Up</h2>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white/80 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white/80 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white/80 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black/60 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
               >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
