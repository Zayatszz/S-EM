'use client';
import React, { useState } from 'react';

const CompanyForm = () => {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          companyName,
          email,
          phoneNumber,
          password,
          role: 'company',
        })
      });

      if (response.status === 201) {
        alert("Signup successful!");
      } else {
        alert("Signup failed!");
      }

    } catch (error) {
      console.error("Error signing up:", error);
      alert("Error signing up: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <div className="row">
        <div className="col-lg-12">
          <div className="form-group">
            <label className="form-label">Компаний нэр</label>
            <input
              type="text"
              className="form-control"
              placeholder="Компаний нэрээ оруулна уу."
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="form-group">
            <label className="form-label">И-мэйл хаяг</label>
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

export default CompanyForm;
