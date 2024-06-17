'use client'
import HeaderUser from "@/app/components/common/HeaderUser";
import ContractSignature from "@/app/components/common/ContractSignature";
import SignForm from "@/app/components/common/SignForm";
import React, { useState } from 'react';
import Image from "next/image";


const ListingV1 = () => {
    const [step, setStep] = useState(1);
  return (
    <div className="wrapper">
      <HeaderUser />
      <div className="">
        <section className=" pt10 bgc-f9">
          <div className="container">
          <section className="our-pricing pb0 pt20 bgc-f9">
          <div className="container">
            <div className="new_property_form">
              <div className="progress" style={{ height: "20px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${step === 1 ? 50  : 100}%`, background:"#2583EF" }}
                  aria-valuenow={step === 1 ? 50  : 100}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </section>
        <section className="our-pricing pb10 pt0 bgc-f9">
          <div className="container">
            <div className="row">
            {step === 1 && <ContractSignature/>}
            {step === 2 && <SignForm/>}
                
                <div className="d-flex justify-content-between">
                <div className="col-lg-12">
                    <div className="row">
                    {step==2 ? (
                    <>
                        <div className="col-sm-2" >
                        <div className="mb20">
                        {/* <button className="btn-next position-relative mr10 p-3" onClick={() => setStep(2)}>Өмнөх</button> */}
                        <button className="btn-cancel position-relative p-3"  onClick={() => setStep(step === 1 ? 1 : step - 1)}>Өмнөх</button>
                        </div>
                        
                    </div>
                    <div className="col-sm-8"></div>
                    
                        <div className="col-sm-2">
                            <div className="mb20">
                            {/* <button className="btn-next position-relative mr10 p-3">Дараах</button> */}
                            <button className="btn-next position-relative mr10 p-3" onClick={() => setStep(step === 2 ? 2 : step + 1)}>Баталгаажуулах</button>
                            </div>
                        </div>
                    </>
                ) : 
                <>
                    <div className="col-sm-2" >
                        
                    </div>
                    <div className="col-sm-8"></div>
                    
                    <div className="col-sm-2">
                        <div className="mb20">
                        {/* <button className="btn-next position-relative mr10 p-3">Дараах</button> */}
                        <button className="btn-next position-relative mr10 p-3" onClick={() => setStep(step === 2 ? 2 : step + 1)}>Дараах</button>
                        </div>
                    </div>
                    </>
                }
                    
                    
                    </div>
                </div>
                </div>
            </div>
           </div>
        </section>
          
          </div>
        </section>
      </div>
    </div>
  );
};

export default ListingV1;
