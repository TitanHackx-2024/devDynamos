import React, { useState } from "react";
import CustomLabel from "./CustomLabel";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { loginUrl } from "../constants/Constants";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import ImageLink from "./menubar/ImageLink";
import corplogoPath from '../img/crop.png'
import namelogoPath from '../img/name.png';

function Login() {
  const [userId, setEmail] = useState("");
  const [passWord, setPassword] = useState("");

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      userId,
      passWord,
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
        const result = await response.json();
        // console.log("Success:", result);
        const token = result.message;

        localStorage.setItem("authToken", token);
        login(token);
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '60px' }}>
          <ImageLink
            src={corplogoPath}
            alt="FarmHub Logo"
            width={180}
            height={90}
          />
          <ImageLink
            src={namelogoPath}
            alt="FarmHub Logo"
            width={300}
            height={52}
          />
      </div>

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
              value={passWord}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required="true"
            />
          </div>
          <div className="w-full px-2 flex items-center justify-center">
            <CustomButton
              type="submit"
              className="bg-blue-500 text-white px-40 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring"
              text="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
