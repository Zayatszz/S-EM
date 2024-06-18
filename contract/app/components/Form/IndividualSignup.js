'use client';
import React, { useState } from 'react';

const EmployerForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const fullName = `${firstName} ${lastName}`;

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          companyName: fullName,
          email,
          phoneNumber,
          password,
          role: 'employer',
        })
      });

      if (response.status === 201) {
        alert('Signup successful!');
      } else {
        const data = await response.json();
        alert(`Signup failed: ${data.error}`);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up: ' + error.message);
    }
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
      </div>
      <button type="submit" className="btn btn-primary btn-block">Бүртгүүлэх</button>
    </form>
  );
};

export default EmployerForm;
