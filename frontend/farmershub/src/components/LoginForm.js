// src/components/LoginForm.js
import React from 'react';
import { Link } from '@fluentui/react'; // Import the Link component
import CustomLabel from './CustomLabel';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

function LoginForm({ userId, passWord, setEmail, setPassword, handleLogin }) {
  return (
    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <CustomLabel
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
          text="Email"
        />
        <CustomInput
          type="text"
          id="email"
          value={userId}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-6">
        <CustomLabel
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
          text="Password"
        />
        <CustomInput
          type="password"
          id="password"
          value={passWord}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
      </div>
      
      <div className="w-full px-2 flex items-center justify-center">
        <CustomButton
          type="submit"
          className="bg-blue-500 text-white px-40 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring"
          text="Login"
        />
      </div>
      
      <div className="mt-4 text-center">
        <Link href="/signup" className="text-blue-500 hover:underline">
          Didn’t have an account? Sign up
        </Link>
      </div>

      <div className="mt-2 text-center">
        <Link href="/forgot-password" className="text-blue-500 hover:underline">
          Forgot password?
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
