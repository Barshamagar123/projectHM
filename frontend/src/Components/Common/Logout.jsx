import React, { useEffect } from 'react';
import { useAuth } from '../../Utils/useAuth.jsx';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    // Optionally, you can add a delay before redirecting
  }, [logout]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">You have been logged out.</h2>
      <button
        onClick={() => navigate('/login')}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Go to Login
      </button>
    </div>
  );
};

export default Logout; 