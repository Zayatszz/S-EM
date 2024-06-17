'use client'
import React, { useState } from 'react';

const Form = () => {
  // States for each form field
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle form submission
  const handleSignup = async (e) => {
   
  
    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return; // Stop the signup process if passwords don't match
    }
    const fullName = `${firstName} ${lastName}`;


  };  
  return (
    <form onSubmit={handleSignup}>
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-6">
          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-12">
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-6">
          <div className="form-group mb20">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-6">
          <div className="form-group mb20">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
      <button type="submit" className="btn btn-primary btn-block mt-4">Бүртгүүлэх</button>
    </form>
  );
};

export default Form;
