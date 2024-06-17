'use client'
import React, { useState } from 'react';

const Form = () => {
  // States for each form field
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState("");

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
            <label className="form-label">Овог</label>
            <input
              type="text"
              className="form-control"
              placeholder="Овог"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        {/* End .col */}
        <div className="col-lg-6">
          <div className="form-group">
            <label className="form-label">Нэр</label>
            <input
              type="text"
              className="form-control"
              placeholder="Нэр"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        {/* End .col */}

       

        <div className="col-lg-6">
          <div className="form-group">
            <label className="form-label">И-мэйл</label>
            <input
              type="email"
              className="form-control"
              placeholder="И-мэйл хаягаа оруулна уу."
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <label className="form-label">Утасны дугаар</label>
            <input
              type="text"
              className="form-control"
              placeholder="Утасны дугаараа оруулна уу."
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-6">
          <div className="form-group mb20">
            <label className="form-label">Нууц үг</label>
            <input
              type="password"
              className="form-control"
              placeholder="Нууц үг"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-6">
          <div className="form-group mb20">
            <label className="form-label">Нууц үгээ давтан оруулна уу.</label>
            <input
              type="password"
              className="form-control"
              placeholder="Нууц үг"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
      <button type="submit" className="btn btn-primary btn-block ">Бүртгүүлэх</button>
    </form>
  );
};

export default Form;
