// import Link from "next/link";
// import MainMenu from "./MainMenu";
// import Image from "next/image";

// const DefaultHeader = () => {
//   return (
//     <header className="header-nav menu_style_home_one home3_style main-menu">
//       {/* Ace Responsive Menu */}
//       <nav>
//         <div className="container posr">
//           {/* Menu Toggle btn*/}
//           <div className="menu-toggle">
//             <button type="button" id="menu-btn">
//               <span className="icon-bar" />
//               <span className="icon-bar" />
//               <span className="icon-bar" />
//             </button>
//           </div>
//           <Link href="/" className="navbar_brand float-start dn-md">
//             <Image
//               width={140}
//               height={45}
//               className="logo1 img-fluid"
//               src="/images/header-logo2.svg"
//               alt="header-logo.svg"
//             />
//             <Image
//               width={140}
//               height={45}
//               className="logo2 img-fluid"
//               src="/images/header-logo2.svg"
//               alt="header-logo2.svg"
//             />
//           </Link>
//           {/* Responsive Menu Structure*/}
//           <ul
//             // id="respMenu"
//             className="ace-responsive-menu text-end"
//             data-menu-style="horizontal"
//           >
//             <MainMenu />
//             <li className="add_listing">
//               <Link href="/add-listings">+ Add Listing</Link>
//             </li>
//             <li
//               className="sidebar_panel"
//               data-bs-toggle="offcanvas"
//               data-bs-target="#offcanvasRight"
//               aria-controls="offcanvasRight"
//             >
//               <a className="sidebar_switch pt0" role="button">
//                 <span />
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default DefaultHeader;


// 'use client'

// import Link from "next/link";
// import MainMenu from "./MainMenu";
// import Image from "next/image";

// import HeroFilter from "./HeroFilter";


// import { useRouter } from "next/navigation";
// const DefaultHeader = () => {
//   return (
//     <header className="header-nav menu_style_home_one home3_style main-menu">
//       {/* Ace Responsive Menu */}
//       <nav>
//         <div className="container posr">
//           {/* Menu Toggle btn*/}
//           <div className="menu-toggle">
//             <button type="button" id="menu-btn">
//               <span className="icon-bar" />
//               <span className="icon-bar" />
//               <span className="icon-bar" />
//             </button>
//           </div>
//           <Link href="/" className="navbar_brand float-start dn-md">
//             <Image
//               width={140}
//               height={45}
//               className="logo1 img-fluid"
//               src="/images/header-logo2.svg"
//               alt="header-logo.svg"
//             />
//             <Image
//               width={140}
//               height={45}
//               className="logo2 img-fluid"
//               src="/images/header-logo2.svg"
//               alt="header-logo2.svg"
//             />
//           </Link>
//           {/* Responsive Menu Structure*/}
//           <ul
//             id="respMenu"
//             className="ace-responsive-menu menu_list_custom_code wa float-start"
//           >
//             <MainMenu />
//           </ul>
          
//           <ul className="ace-responsive-menu menu_list_custom_code wa  text-end">
//                 <li className="">
//                   {/* <Link href={role === "user" ? "/user/profile" : "/company/profile"}> */}
//                     Hello,
//                   {/* </Link> */}
//                 </li>
//                 <li>
//                   <a className="pl0 pr0" href="#">
//                     |
//                   </a>
//                 </li>
//                 <li className="pr10">
//                 <button onClick={()=> {
//                   //signOut(auth)
//                   logout();
//                     // sessionStorage.removeItem('user')
//                   }
//                   }> Гарах</button>
//                   {/* <a href="#" >
//                     Гарах
//                   </a> */}
//                 </li>
          
            
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default DefaultHeader;


'use client'
import Link from "next/link";
import MainMenu from "./MainMenu";
import Image from "next/image";


import { useRouter } from "next/navigation";

//import { signOut } from "firebase/auth";

const Header = () => {

  const router = useRouter()
  // const userSession = sessionStorage.getItem('user');
  //console.log({user})
  return (
    
    <header className="header-nav menu_style_home_one home6_style transparent main-menu">
      {/* Ace Responsive Menu */}
      <nav>
        
        <div className="container posr d-block">
          {/* Menu Toggle btn*/}
          <div className="menu-toggle">
            <button type="button" id="menu-btn">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
         
          <Link href="/" className="navbar_brand float-start mt20 dn-md">
             <Image
              width={140}
              height={45}
              className="logo1 img-fluid"
              src="/images/header-logo2.svg"
              alt="header-logo.svg"
            />
            <Image
              width={140}
              height={45}
              className="logo2 img-fluid"
              src="/images/header-logo2.svg"
              alt="header-logo2.svg"
            />
          </Link>
          <ul
            id="respMenu"
            className="ace-responsive-menu menu_list_custom_code wa float-start"
          >
            <MainMenu />
          </ul>
          

          <ul className="ace-responsive-menu menu_list_custom_code wa text-end">
         
             
                {/* User is logged in */}
                
               
           
          
                {/* User is logged in */}
              
                <li className="">
                  {/* <Link href={role === "user" ? "/user/profile" : "/company/profile"}> */}
                    Hello, Zaya
                  {/* </Link> */}
                </li>
                <li>
                  <a className="pl0 pr0" href="#">
                    |
                  </a>
                </li>
                <li className="pr10">
                <button onClick={()=> {
                  //signOut(auth)
                  logout();
                    // sessionStorage.removeItem('user')
                  }
                  }> Гарах</button>
                  {/* <a href="#" >
                    Гарах
                  </a> */}
                </li>
          
            
          </ul>

          {/* Company signup Modal */}
          <div
            className="sign_up_modal modal fade"
            id="logInModalCompany"
            data-backdrop="static"
            data-keyboard="false"
            tabIndex={-1}
            aria-hidden="true"
          >
            {/* <CompanyRegisterModal /> */}
          </div>
          {/* End Company signup  Modal */}

          {/* End header right content */}

        
        </div>
      </nav>
    </header>
  );
};

export default Header;
