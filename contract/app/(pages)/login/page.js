"use client"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from "next/link";
const SignIn = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#007bff' }}>
      <div className="card p-5 login_form" style={{ maxWidth: '800px', width: '100%' }}>
        <div className="row no-gutters">
        <div className="col-md-5 ">
       
        </div>
        <div className="col-md-7 text-center ">
        <h4 className="mt-2" style={{color:"#2583EF"}}>Нэвтрэх</h4>
   
        </div>
        
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <Image
              src="/images/contract.jpg"
              className='rounded'
              alt="Contract"
              width={270}
              height={320}
            />
            
         
                    
                  
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <div className="text-center mb-4">
             
                <Image
                  src="/images/user.png"
                  alt="User Icon"
                  width={100}
                  height={90}
                />
                
              </div>
              <form >
                <div className="mb-2 mr-sm-2">
                
                    <label className="form-label">И-мэйл хаяг</label>
                    <input
                    type="email" 
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
      {/* End div */}

                <div className="form-group mb5">
                    <label className="form-label">Нууц үг *</label>
                    <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
                <p>
                  Бүртгэлгүй бол бүртгүүлнэ үү. <Link href="/signup">Бүртгүүлэх.</Link> 
                </p>
      {/* End div */}

      {/* <div className="custom-control custom-checkbox mb3">
        <input
          type="checkbox"
          className="custom-control-input"
          id="exampleCheck3"
        />
        <label className="custom-control-label" htmlFor="exampleCheck3">
          Remember me
        </label>
        
        <a className="btn-fpswd float-end" href="/reset-password"> 
          Lost your password?
        </a>
      </div> */}
      {/* End div */}

    
    </form>
            </div>
          </div>

          <div className="col-md-5 ">
       
        </div>
        <div className="col-md-7 text-center">
            <div className='ml100 mr100'>

                <button type="submit" className="btn-next position-relative  p-2" style={{color:"white"}}>
                Нэвтрэх
            </button>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
