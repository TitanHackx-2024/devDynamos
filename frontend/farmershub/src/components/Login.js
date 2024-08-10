import React, { useState } from "react";
import useUserAuthentication from './LoginAuth';
import LoginForm from "./LoginForm";
import LogoSection from "./LogoSection";

function Login() {
  const [userId, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const authenticateUser = useUserAuthentication(); // Use the custom hook

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      userId,
      passWord,
    };
    
    await authenticateUser(data, e);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <LogoSection />
        <LoginForm
          userId={userId}
          passWord={passWord}
          setEmail={setEmail}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      </div>
    </div>
  );
}

export default Login;
