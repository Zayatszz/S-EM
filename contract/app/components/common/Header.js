'use client';
import Link from "next/link";
import MainMenu from "./MainMenu";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        try {
          const response = await fetch('/api/getUserName', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ uid: user.uid })
          });
          if (!response.ok) {
            throw new Error('Failed to fetch user name');
          }
          const data = await response.json();
          setUserName(data.name);
        } catch (error) {
          console.error('Error fetching user name:', error);
        }
      }
    };

    fetchUserName();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <header className="header-nav menu_style_home_one home6_style transparent main-menu">
      {/* Ace Responsive Menu */}
      <nav>
        <div className="container posr d-block">
          {/* Menu Toggle btn */}
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
            <li>
              {/* User is logged in */}
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
              Hello, {userName}
            </li>
            <li>
              <a className="pl0 pr0" href="#">
                |
              </a>
            </li>
            <li className="pr10">
              <button onClick={handleLogout}>Гарах</button>
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
          {/* End Company signup Modal */}

          {/* End header right content */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
