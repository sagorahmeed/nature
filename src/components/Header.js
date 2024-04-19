import React from 'react'
import menuData from '../JSON/MenuData.json'
import { Link, useMatch } from 'react-router-dom';

export default function Header() {
  const match = useMatch('/');



  return (
    <div className='bg-white fixed top-0 w-full z-[99]'>
        <header className="mx-[50px] py-[14px] px-[67px]">
          <div className="flex items-center justify-between">
            <div className="logo">
              <a href="#">
                <img src="/image/logo.png" alt="logo" />
              </a>
            </div>
            <nav>
              <ul className="flex items-center md:gap-[50px] sm:gap-[30px] gap-[16px]">
                {menuData.menuItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.route}
                      className="flex items-center gap-[12px]"
                    >
                      <img src={item.icon} alt="menu" />
                      <p>{item.label}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-[5px]">
              <p>Search for the product you want to know about</p>
              <img src="/image/h-search.png" alt="search" />
            </div>
          </div>
        </header>
     
    </div>
  )
}
