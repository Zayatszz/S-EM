'use client'
import DefaultHeader from "@/app/components/common/Header";
import React, { useState } from 'react';
import Image from "next/image";

const ListingV1 = () => {
  const [step, setStep] = useState(1);

  const renderStep1 = () => (
    // <section className="our-pricing pb90 pt0 bgc-f9">
    //   <div className="container">
    //     <div className="new_property_form">
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
            {/* <div className="row mr40 ml40 mt40">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-sm-8"></div>
                  <div className="col-sm-2">
                    <div className="mb20">
                      <button className="btn-cancel position-relative p-3">Алгасах</button>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="mb20">
                      <button className="btn-next position-relative mr10 p-3" onClick={() => setStep(2)}>Дараах</button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
    //     </div>
    //   </div>
    // </section>
  );

  const renderStep2 = () => (
    // <section className="our-pricing pb90 pt0 bgc-f9">
    //   <div className="container">
    //     <div className="new_property_form">
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
            {/* <div className="row mr40 ml40 mt40">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-sm-2">
                    <div className="mb20">
                      <button className="btn-next position-relative mr10 p-3" onClick={() => setStep(1)}>Өмнөх</button>
                    </div>
                  </div>
                  <div className="col-sm-6"></div>
                  <div className="col-sm-2">
                    <div className="mb20">
                      <button className="btn-cancel position-relative p-3" onClick={() => setStep(3)}>Алгасах</button>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="mb20">
                      <button className="btn-next position-relative mr10 p-3" onClick={() => setStep(3)}>Дараах</button>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
    //     </div>
    //   </div>
    // </section>
  );

  const renderStep3 = () => (
    // <section className="our-pricing pb90 pt0 bgc-f9">
    //   <div className="container">
    //     <div className="new_property_form">
          <div>

          <h2 className="main-title mb-8">Ажилчны дугаарыг оруулна уу.</h2>
          <div className="mb-4 m50">
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input
                className="form-control"
                type="text"
                placeholder="Message"
                required
              />
            </div>
          </div>
          </div>
          {/* <div className="row mr40 ml40 mt40">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-sm-2">
                  <div className="mb20">
                    <button className="btn-next position-relative mr10 p-3" onClick={() => setStep(2)}>Өмнөх</button>
                  </div>
                </div>
                <div className="col-sm-6"></div>
                <div className="col-sm-2">
                  <div className="mb20">
                    <button className="btn-cancel position-relative p-3">Алгасах</button>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="mb20">
                    <button className="btn-next position-relative mr10 p-3">Дараах</button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          </div>
    //     </div>
    //   </div>
    // </section>
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
                  style={{ width: `${step === 1 ? 33 : step === 2 ? 66 : 100}%`, background:"#2583EF" }}
                  aria-valuenow={step === 1 ? 33 : step === 2 ? 66 : 100}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </section>
        {/* {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()} */}

        <section className="our-pricing pb90 pt0 bgc-f9 ">
      <div className="container">
        <div className="new_property_form">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
          <div className="row mr40 ml40 mt40">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-sm-2">
                  <div className="mb20">
                    {/* <button className="btn-next position-relative mr10 p-3" onClick={() => setStep(2)}>Өмнөх</button> */}
                    <button className="btn-next position-relative p-3" onClick={() => setStep(step === 1 ? 1 : step - 1)}>Өмнөх</button>
                  </div>
                </div>
                <div className="col-sm-6"></div>
                <div className="col-sm-2">
                  <div className="mb20">
                    {/* <button className="btn-cancel position-relative p-3">Алгасах</button> */}
                    <button className="btn-cancel position-relative p-3" onClick={() => setStep(step === 3 ? 3 : step + 1)}>Алгасах</button>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="mb20">
                    {/* <button className="btn-next position-relative mr10 p-3">Дараах</button> */}
                    <button className="btn-next position-relative mr10 p-3" onClick={() => setStep(step === 3 ? 3 : step + 1)}>Дараах</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        {/* <div className="step-wrapper">
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
        </div> */}
        {/* <div className="row mr40 ml40 mt40 fixed-buttons">
          <div className="col-lg-12">
            <div className="row justify-content-end">
              <div className="col-sm-2">
                <div className="mb20">
                  <button className="btn-cancel position-relative p-3" onClick={() => setStep(step === 1 ? 1 : step - 1)}>Өмнөх</button>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="mb20">
                  <button className="btn-cancel position-relative p-3" onClick={() => setStep(step === 3 ? 3 : step + 1)}>Алгасах</button>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="mb20">
                  <button className="btn-next position-relative mr10 p-3" onClick={() => setStep(step === 3 ? 3 : step + 1)}>Дараах</button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ListingV1;
