"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import React, { useState } from 'react';

const ContractSignature = () => {
    const [step, setStep] = useState(1);
  return (
    <div className="">
      
     
      <section className="our-pricing pb0 pt0 bgc-f9">
      
          
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title title pb-2">Ажил олгогч талыг төлөөлж:</h5>
              <div className="d-flex align-items-center mb-4">
                <Image
                  src="/images/user.png"
                  alt="User"
                  width={70}
                  height={70}
                  className="rounded-circle me-3"
                />
                <div>
                  <h5>Цэвээнжав овогтой Заяа</h5>
                  {/* <br /> */}
                  <span>zaya23802@gmail.com</span>
                </div>
              </div>
              <h5 className="title">Албан тушаал:</h5>
              <div className=" text-white p-3 mb-4 rounded" style={{background:"#2583EF"}}>
                Chopper компани - Захирал
              </div>
              <h5 className="title">Ажил олгогчийн мэдээлэл:</h5>
              <p>
              <span className="flaticon-location "></span>
              <span className="p-2 ">Улаанбаатар хот, Сүхбаатар дүүрэг, 4-р хороо</span>
                
              </p>
              <p>
              <span className="flaticon-phone-call"></span>
              <span className="p-2"> 88446490</span>
               
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title title pb-2">Ажилтан талыг төлөөлж:</h5>
              <div className="d-flex align-items-center mb-4">
                <Image
                  src="/images/user.png"
                  alt="User"
                  width={70}
                  height={70}
                  className="rounded-circle me-3"
                />
                <div>
                  <h5>Болд овогтой Хүслэн</h5>
                  {/* <br /> */}
                  <span>zaya23802@gmail.com</span>
                </div>
              </div>
              <h5 className="title">Албан тушаал:</h5>
              <div className=" text-white p-3 mb-4 rounded" style={{background:"#2583EF"}}>
                Chopper компани - Судалгааны ажилтан
              </div>
              <h5 className="title">Ажилтны мэдээлэл:</h5>
              <p>
              <span className="flaticon-location "></span>
              <span className="p-2 ">Улаанбаатар хот, Сүхбаатар дүүрэг, 4-р хороо</span>
                
              </p>
              <p>
              <span className="flaticon-phone-call"></span>
              <span className="p-2"> 88441299</span>
               
              </p>
            </div>
          </div>
        </div>
    
   
      </div>
           
          {/* </div> */}
        </section>
      
      
    </div>
  );
};

export default ContractSignature;
