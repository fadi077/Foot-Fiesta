import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        });

        const data = await response.json();

        if (response.ok) {
            console.log("User Login successfully");
            console.log(data.token);
            localStorage.setItem('jwtToken', data.token);
            navigate("/"); // here you navigate the screen where you want .
        } else {
            console.error("Failed to login user");
            // setError(data.message) 
        }

    } catch (error) {
        console.log(error);
    }
};

  return (
    <div className="mt-0 w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('LogIn.png')" }}>
      <div className="flex items-center justify-center h-full">
        <div className="bg-black/60 backdrop-blur-lg p-8 rounded-lg shadow-2xl max-w-sm">
          <form onSubmit={handleLogin} className="space-y-6">
            <h2 className="text-center text-2xl font-bold text-white">User Login</h2>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
