'use client';
import Link from "next/link";
import MainMenuUser from "./MainMenuUser";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
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
    window.location.href = '/login';
  };

  return (
    <header className="header-nav menu_style_home_one home6_style transparent main-menu">
      <nav>
        <div className="container posr d-block">
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
            <li>
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
