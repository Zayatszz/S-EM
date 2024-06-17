"use client"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import CompanySignup from "@/app/components/Form/CompanySignup";
import UserSignup from "@/app/components/Form/UserSignup";
import IndividualSignup from "@/app/components/Form/IndividualSignup";
import Link from "next/link";
const SignUp = () => {
  const [role, setRole] = useState('employee');
  const [employerType, setEmployerType] = useState('company');


  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#007bff' }}>
      <div className="card pt-5 pb-5 pl70 pr70 login_form " style={{ maxWidth: '1000px', width: '100%' }}>
        <div className="text-center mb-2">
          {/* <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
          /> */}
          <h2 className="mt-2" style={{color:"#2583EF"}}>Бүртгүүлэх</h2>
          <p>
            Аль хэдийн бүртгүүлчихсэн үү? <Link href="/login">Нэвтрэх.</Link>
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div
              className={`card p-3  ${role === 'employer' ? 'bg-light' : ''}`}
             
              onClick={() => setRole('employer')}
              style={{ cursor: 'pointer', }}
            >
          {/* background:"rgba(214,223,242,1)" */}
              <h3 className="text-center">Ажил олгогч</h3>
              {/* {role === 'employer' && ( */}
                <div className="d-flex justify-content-around mt-1">
                  <button
                    className={`btn ${employerType === 'company' ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setEmployerType('company')}
                  >
                    Компани
                  </button>
                  <button
                    className={`btn ${employerType === 'individual' ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setEmployerType('individual')}
                  >
                    Хувь хүн
                  </button>
                </div>
              {/* )} */}
            </div>
          </div>
          <div className="col-md-6">
            <div
              className={`card   ${role === 'employee' ? 'bg-light' : ''}`}
              onClick={() => setRole('employee')}
              style={{ cursor: 'pointer', padding:"38px", }}
            >
              <h3 className="text-center">Ажилтан</h3>
            </div>
          </div>
        </div>
     
          {role === 'employer' && employerType === 'company' && <CompanySignup />}
          {role === 'employer' && employerType === 'individual' && <IndividualSignup />}
              {role === 'employee' &&  <UserSignup />}
        
       
    
      </div>
    </div>
  );
};

export default SignUp;
