import React, { useState } from "react";
import CustomLabel from "./CustomLabel";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call)
    console.log("Logging in with", email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <CustomLabel
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
              text="Email"
            />

            <CustomInput
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required="true"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required="true"
            />
          </div>
          <div className="flex items-center justify-between">
            <CustomButton
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 focus:outline-none focus:ring focus:border-green-300"
              text="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
