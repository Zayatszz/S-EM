'use client'
import React, { useState } from 'react';

const Form = () => {
  // States for each form field
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Function to handle form submission
  const handleSignup = async (e) => {
    
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
        {/* End .col */}

      
        {/* End .col */}

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
        {/* End .col */}

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
      <button type="submit" className="btn btn-primary btn-block mt-4">Бүртгүүлэх</button>
    </form>
  );
};

export default Form;
