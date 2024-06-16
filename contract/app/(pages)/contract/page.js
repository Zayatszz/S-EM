'use client'
import DefaultHeader from "@/app/components/common/Header";
import React, { useState } from 'react';
import Image from "next/image";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

const ListingV1 = () => {
  const [step, setStep] = useState(1);
  const [dates, setDates] = useState([]);
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  console.log(dates);
  const handleStartTimeChange = (time) => {
    setStartTime(time);
  };

  const handleEndTimeChange = (time) => {
    setEndTime(time);
  };

  const time = 
    {
      label: "Төрөл",
      name: "condition",
      type: "select",
      options: ["Цагаар", "Өдрөөр", "Сараар"],
    }
  
  const renderStep1 = () => (
    <div >
      <h2 className="main-title mb-8">Та ямар төрлийн ажлын гэрээ байгуулах вэ?</h2>
      <div className="d-flex justify-content-around mb-4">
        <div className="card text-center p-4 col-sm-6 col-md-3 ui_kit_select_search add_new_property mb20" style={{background:"rgba(214,223,242,1)"}}>
          <div className="card-body">
            <Image width={100} height={45} className="logo2 img-fluid" src="/images/fulltime.png" alt="Full Time" />
            <h5 className="card-title mt8">Бүтэн цаг</h5>
          </div>
        </div>
        <div className="card text-center p-4 col-sm-6 col-md-3 ui_kit_select_search add_new_property mb20" style={{background:"rgba(214,223,242,1)"}}>
          <div className="card-body">
            <Image width={100} height={45} className="logo2 img-fluid" src="/images/halftime.png" alt="Part Time" />
            <h5 className="card-title mt8">Хагас цаг</h5>
          </div>
        </div>
        <div className="card text-center p-4 col-sm-6 col-md-3 ui_kit_select_search add_new_property mb20" style={{background:"rgba(214,223,242,1)"}}>
          <div className="card-body">
            <Image width={100} height={45} className="logo2 img-fluid" src="/images/gereet.png" alt="Contract" />
            <h5 className="card-title mt8">Гэрээт</h5>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div>
      <h2 className="main-title mb-8">Ажлын байршилаа оруулна уу.</h2>
      <div className="d-flex justify-content-around mb-4 m50">
        <div className="col-sm-12">
          <div className="form-group">
            <label className="form-label">Байршил</label>
            <textarea
              style={{background:"rgba(214,223,242,1)"}}
              name="form_message"
              className="form-control"
              rows={6}
              placeholder="Байршилаа оруулна уу."
              required
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div>
      <h2 className="main-title mb-8">Ажилчны дугаарыг оруулна уу.</h2>
      <div className="mb-4 m50">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Утасны дугаар</label>
            <input
              className="form-control"
              type="text"
              placeholder="Дугаар"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
  const renderStep4 = () => (
    <div>
      <h2 className="main-title mb-8">Ажилчны албан тушаалыг оруулна уу.</h2>
      <div className="mb-4 m50">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Албан тушаал</label>
            <input
              className="form-control"
              type="text"
              placeholder="Албан тушаал"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
  const renderStep5 = () => (
    <div>
      <h2 className="main-title mb-8">Ажиллах хугацаагаа оруулна уу.</h2>
    
      <div className="mb-4 m50 mr70">
        <div className="col-lg-12">
            <div className="row">
            <div className="col-md-6">
              <div className="form-group">
              <label className="form-label">Эхлэх хугацаа</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
              <label className="form-label">Дуусах хугацаа</label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 ml10 ">
          <div className="form-group">
            <div className="row ">
              <RangePicker
                className="p15"
                onChange={(values) => {
                  setDates(
                    values.map((item) => {
                      return item.format("YYYY-DD-MM");
                    })
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const renderStep6 = () => (
    <div>
      <h2 className="main-title mb-8">Ажиллах цагаа тодорхой оруулна уу.</h2>
    
      <div className="mb-4 m50 ">
        <div className="col-lg-12">
            <div className="row">
            <div className="col-md-6">
              <div className="form-group">
              <label className="form-label">Эхлэх цаг</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
              <label className="form-label">Дуусах цаг</label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
            <div className="row">
            <div className="col-lg-6">
                 
                    <input
                      className="form-control form_control"
                      type="time"
                      value={startTime}
                      onChange={(e) => handleStartTimeChange(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-6">
                    {/* <span className="form-label">Дуусах цаг</span> */}
                    <input
                      className="form-control form_control"
                      type="time"
                      value={endTime}
                      onChange={(e) => handleEndTimeChange(e.target.value)}
                    />
                  </div>
          </div>
        </div>
      
      </div>
    </div>
  );
  const renderStep7 = () => (
    <div>
         <div className="col-lg-12">
            <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <h2 className="main-title mb-8">Ажилчны цалин ямар байх вэ?</h2>
                <div className="ml50">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Цалин</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Цалин"
                            required
                          />
                        </div>
                      </div>
                    <div className="col-sm-6 col-md-4" >
                      <div className="ui_kit_select_search add_new_property ">
                        <label className="form-label">{time.label}</label>
                        <select className="form-select">
                        
                          {time.options.map((option) => (
                            <option key={option} data-tokens={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <h2 className="main-title mb-8">Цалингаа хэдэн өдөрт авах вэ?</h2>
               
                <div className="mr50">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label">Албан тушаал</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Албан тушаал"
                      required
                    />
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
     
      
  
    </div>
  );

  const renderStep8 = () => (
    <div>
      <h2 className="main-title mb-8">Ажлаас гарахаасаа хэдэн хоногийн өмнө мэдэгдэх вэ?</h2>
      <div className="mb-4 m50">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Хугацаа</label>
            <input
              className="form-control"
              type="text"
              placeholder="Хугацаа"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
  const renderStep9 = () => (
    <div>
      <h2 className="main-title mb-8">Та нэмэлт мэдээлэл оруулахыг хүсч байна уу?.</h2>
      <div className="d-flex justify-content-around mb-4 m50">
        <div className="col-sm-12">
          <div className="form-group">
            <label className="form-label">Нэмэлт мэдээлэл</label>
            <textarea
              style={{background:"rgba(214,223,242,1)"}}
              name="form_message"
              className="form-control"
              rows={6}
              placeholder="Нэмэлт мэдээлэл"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
  const renderStep10 = () => (
    <div>
      <h2 className="main-title mb-8">Гэрээ</h2>
    </div>
  );

  return (
    <div className="wrapper">
      <DefaultHeader />
      <div className="">
        <section className="our-pricing pb10 pt20 bgc-f9">
          <div className="container">
            <div className="new_property_form">
              <div className="progress" style={{ height: "20px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${step === 1 ? 0 : step === 2 ? 10 : step === 3 ? 20 : step === 4 ? 30 : step === 5 ? 40 : step === 6 ? 50 : step === 7 ? 60 : step === 8 ? 70 : step === 9 ? 80 : step === 10 ? 90   : 100}%`, background:"#2583EF" }}
                  aria-valuenow={step === 1 ? 0 : step === 2 ? 10 : step === 3 ? 20 : step === 4 ? 30 : step === 5 ? 40 : step === 6 ? 50 : step === 7 ? 60 : step === 8 ? 70 : step === 9 ? 80 : step === 10 ? 90   : 100}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </section>


        <section className="our-pricing pb90 pt0 bgc-f9 ">
      <div className="container">
        <div className="new_property_form">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}
        {step === 5 && renderStep5()}
        {step === 6 && renderStep6()}
        {step === 7 && renderStep7()}
        {step === 8 && renderStep8()}
        {step === 9 && renderStep9()}
        {step === 10 && renderStep10()}
          <div className="row mr40 ml40 mt40">
            <div className="col-lg-12">
              <div className="row">
              {step!=1 ? (
                <>
                 <div className="col-sm-2" >
                  <div className="mb20">
                    {/* <button className="btn-next position-relative mr10 p-3" onClick={() => setStep(2)}>Өмнөх</button> */}
                    <button className="btn-next position-relative p-3"  onClick={() => setStep(step === 1 ? 1 : step - 1)}>Өмнөх</button>
                  </div>
                </div>
              </>
            ) : 
            <>
                <div className="col-sm-2" >
                  
                </div>
              </>
           }
                
                <div className="col-sm-6"></div>
                <div className="col-sm-2">
                  <div className="mb20">
                    {/* <button className="btn-cancel position-relative p-3">Алгасах</button> */}
                    <button className="btn-cancel position-relative p-3" onClick={() => setStep(step === 10 ? 10 : step + 1)}>Алгасах</button>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="mb20">
                    {/* <button className="btn-next position-relative mr10 p-3">Дараах</button> */}
                    <button className="btn-next position-relative mr10 p-3" onClick={() => setStep(step === 10 ? 10 : step + 1)}>Дараах</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
    </div>
  );
};

export default ListingV1;
