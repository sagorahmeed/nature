import React, { useState, useEffect } from 'react';
import menuData from '../JSON/MenuData.json';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [show, setShow] = useState(false);

  const showSearchInputHandler = () => {
    setShow(prevShow => !prevShow);
  };
  const closeSearchInputHandler = () => {
    console.log('clicked')
    setShow(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setIsScrolled(position > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`fixed top-0 w-full z-[99] ${isScrolled ? 'bg-image' : 'bg-transparent'}`}>
      <header className={`header-wrapper ${isScrolled && '!pt-0'} transition-all duration-200`}>
        <div className="flex items-center justify-between">
          <div className="logo">
            <Link to='/'>
              <img src="/image/logo.png" className='logo' alt="logo" />
            </Link>
          </div>

          <nav className={`${isSidebarOpen ? 'translate-x-0' : ''} kit-nav-wrapper duration-300 ease-in-out`}>
            <ul className="kit-ul items-center md:gap-[50px] sm:gap-[30px] gap-[16px]">
              {menuData.menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.route}
                    className="flex items-center gap-[12px]"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <img src={item.icon} alt="menu" />
                    <p>{item.label}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className='flex items-center gap-4 relative'>
            <div className={`inline-flex items-center gap-[20px] absolute right-0 ${show ? 'opacity-100 z-50' : 'opacity-0'}`}>
              <div className='bg-[#f42534] flex items-center h-[48px] rounded-[999px] pr-[30px]'>
                <input placeholder='Search product' className='bg-transparent pl-[20px] focus:outline-none text-white placeholder:text-white' />
                <img src="/image/h-searchm.png" alt="search"  className='cursor-pointer' />
              </div>
              <img src="/image/close2.png" alt="search" onClick={closeSearchInputHandler} className='cursor-pointer transform hover:rotate-90 transition-all duration-700' />
            </div>
             <div className={`flex items-center gap-[5px] ${show ? 'opacity-0' : 'opacity-100 z-50'}`}>
              <p className='search-text'>Search Products</p>
              <img src="/image/h-search.png" alt="search" onClick={showSearchInputHandler} className='cursor-pointer' />
            </div>
            <div className="menu-icon" onClick={toggleSidebar}>
              {isSidebarOpen ? <img src="/image/pho-hc.png" alt="Close" /> : <img src="/image/pho-h2.png" alt="Open" />}
            </div>
          </div>

        </div>
      </header>
      {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 transition-all duration-200" onClick={toggleSidebar}></div>}
    </div>
  );
}
