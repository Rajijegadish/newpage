import React, { useState } from 'react';
import './Login.css'; 

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation (you can add more complex validation here)
    const { username, password } = formData;
    let errors = {};

    if (!username) {
      errors.username = 'Username is required';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // Simulating successful login
      setIsLoggedIn(true);
    }
  };

  if (isLoggedIn) {
    // Simulated user data for the dashboard
    const userData = {
      username: formData.username,
      // Other user data could be added here
    };

    return <Dashboard />;
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
const Dashboard = ({ userData }) => {
    return (
      <div className="dashboard">
        <h2>Welcome to FoodShop, {userData.username}!</h2>
        <p>Email: {userData.email}</p>
        {/* Display other user information */}
      </div>
    );
  };
export default Login;
