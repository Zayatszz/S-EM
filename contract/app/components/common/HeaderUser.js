

'use client'
import Link from "next/link";
import MainMenuUser from "./MainMenuUser";
import Image from "next/image";


import { useRouter } from "next/navigation";

//import { signOut } from "firebase/auth";

const Header = () => {

  const router = useRouter()
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
            <MainMenuUser />
          </ul>
          

          <ul className="ace-responsive-menu menu_list_custom_code wa text-end">
         
             
                {/* User is logged in */}
                
               
           
          
                {/* User is logged in */}
              <li>
              {/* navbar_brand float-start mt20 dn-md */}
              <Link href="/" className="">
             <Image
              width={80}
              height={45}
              className="logo1 img-fluid"
              src="/images/header-logo2.svg"
              alt="header-logo.svg"
            />
            
          </Link>
              </li>
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
