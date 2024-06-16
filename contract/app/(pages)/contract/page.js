// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import './App.css';

// const App = () => {
//   return (
//     <div className="container mt-5">
//       <header className="d-flex justify-content-between align-items-center mb-4">
//         <h1>S<em>EM</em></h1>
//         <div className="d-flex align-items-center">
//           <div className="me-2">
//             <strong>Zaya</strong>
//             <br />
//             <span>zaya23802@gmail.com</span>
//           </div>
//           <button className="btn btn-outline-secondary">Log out</button>
//         </div>
//       </header>
//       <div className="search-bar mb-4">
//         <input type="text" className="form-control" placeholder="Search" />
//       </div>
//       <div className="text-center mb-4">
//         <h2>Та ямар төрлийн ажлын гэрээ байгуулах вэ?</h2>
//       </div>
//       <div className="d-flex justify-content-around mb-4">
//         <div className="card text-center p-4">
//           <div className="card-body">
//             <img src="clock-icon.png" alt="Full Time" className="mb-2" />
//             <h5 className="card-title">Бүтэн цаг</h5>
//           </div>
//         </div>
//         <div className="card text-center p-4">
//           <div className="card-body">
//             <img src="hourglass-icon.png" alt="Part Time" className="mb-2" />
//             <h5 className="card-title">Хагас цаг</h5>
//           </div>
//         </div>
//         <div className="card text-center p-4">
//           <div className="card-body">
//             <img src="contract-icon.png" alt="Contract" className="mb-2" />
//             <h5 className="card-title">Гэрээт</h5>
//           </div>
//         </div>
//       </div>
//       <div className="d-flex justify-content-between">
//         <button className="btn btn-secondary">Алгасах</button>
//         <button className="btn btn-primary">Дараах</button>
//       </div>
//     </div>
//   );
// }

// export default App;


// import Footer from "@/app/components/common/Footer";
import DefaultHeader from "@/app/components/common/DefaultHeader";
// import MobileMenu from "@/app/components/common/MobileMenu";

import Image from "next/image";
export const metadata = {
    title: "Listing V1 || Voiture - Automotive & Car Dealer NextJS Template",
};

const ListingV1 = () => {
    return (
        <div className="wrapper">
    
            <DefaultHeader />
          
            {/* <MobileMenu /> */}
      <div  className="">

      <section className="our-pricing pb10 pt20 bgc-f9">
        <div className="container">
        <div  className="">
          <div className="new_property_form">
           
            <div className="progress"  style={{ height: "30px ", }}>
              <div
              
                className="progress-bar "
                role="progressbar"
                style={{ width: '50%', background:"#2583EF" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section className="our-pricing pb90 pt0 bgc-f9">
        <div className="container">
        <div  className="">
          <div className="new_property_form">
           
          <div className="d-flex justify-content-around mb-4">
        <div className="card text-center p-4 col-sm-6 col-md-3 ui_kit_select_search add_new_property mb20">
          <div className="card-body">
            {/* <img src="clock-icon.png" alt="Full Time" className="mb-2" /> */}
            <Image
              width={100}
              height={45}
              className="logo2 img-fluid"
              src="/images/fulltime.png"
              alt="header-logo2.svg"
            />
            {/* <span className={"flaticon-sedan-car-model"} /> */}
            <h5 className="card-title mt8">Бүтэн цаг</h5>
          </div>
        </div>
        <div className="card text-center p-4 col-sm-6 col-md-3 ui_kit_select_search add_new_property mb20">
          <div className="card-body">
          <Image
              width={100}
              height={45}
              className="logo2 img-fluid"
              src="/images/halftime.png"
              alt="header-logo2.svg"
            />
            <h5 className="card-title mt8">Хагас цаг</h5>
          </div>
        </div>
        <div className="card text-center p-4 col-sm-6 col-md-3 ui_kit_select_search add_new_property mb20">
          <div className="card-body">
          <Image
              width={100}
              height={45}
              className="logo2 img-fluid"
              src="/images/gereet.png"
              alt="header-logo2.svg"
            />
            <h5 className="card-title mt8">Гэрээт</h5>
          </div>
        </div>
      
      </div>
   
      <div className="d-flex justify-content-between mr50 ml50">
        {/* <button className="btn btn-secondary">Алгасах</button>
        <button className="btn btn-primary">Дараах</button> */}
        <button
          className="btn-order position-relative mr10 "
          // onClick={() => handleOrder(hour)}
        >
          Алгасах
        </button>
        <button
          className="btn btn-order position-relative ml10 "
          // onClick={() => handleOrder(hour)}
        >
          Дараах
        </button>
      </div>
          </div>
        </div>
        </div>
      </section>

     
      </div>
         
       


            {/* Our Footer */}
            {/* <Footer /> */}
            {/* End Our Footer */}

            {/* Modal */}
            {/* <div
                className="sign_up_modal modal fade"
                id="logInModal"
                data-backdrop="static"
                data-keyboard=""
                tabIndex={-1}
                aria-hidden="true"
            >
                <LoginSignupModal />
            </div> */}
            {/* End Modal */}
        </div>
        // End wrapper
    );
};

export default ListingV1;
