// NotFound.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 1000);

    localStorage.removeItem("authToken"); 
    return () => clearTimeout(timer);
  }, [navigate]);

  return <div>Page not found. Your Session Expired. Redirecting to Login...</div>;
};

export default NotFound;
