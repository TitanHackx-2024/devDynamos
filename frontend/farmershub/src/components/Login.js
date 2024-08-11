import React, { useState } from "react";
import useUserAuthentication from './LoginAuth';
import LoginForm from "./LoginForm";
import LogoSection from "./LogoSection";
import { MessageBar, MessageBarTitle, MessageBarBody, MessageBarIntent } from "@fluentui/react-components";

function Login() {
  const [userId, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [error, setError] = useState("");
  const authenticateUser = useUserAuthentication(); // Use the custom hook

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      userId,
      passWord,
    };
    try{
    await authenticateUser(data, e)
    }
    catch{
      setError("Invalid Login ID or Password. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center m-5 bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <LogoSection />
        {error && (
          <MessageBar key ={'error'} intent={'error'}>
            <MessageBarBody>
              <MessageBarTitle>{error}</MessageBarTitle>
            </MessageBarBody>
          </MessageBar>
        )}
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
