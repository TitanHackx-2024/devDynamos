import React, { useState } from "react";
import CustomLabel from "./CustomLabel";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { loginUrl } from "../constants/Constants";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    try {
      const response = await fetch(loginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // const result = await response.json();
        // console.log("Success:", result);

        navigate("/");
      } else {
        // console.error("Error:", response.statusText);
        navigate("/login");
      }
    } catch (error) {
      // console.error("Error:", error);
    }
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
          <div className="w-full px-2 flex items-center justify-center">
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
