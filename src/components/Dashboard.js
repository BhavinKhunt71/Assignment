// src/components/Dashboard.js
import React from 'react';

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token on logout
    window.location.href = '/'; // Redirect to login
  };

  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
