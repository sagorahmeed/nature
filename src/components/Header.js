
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import menuData from '../JSON/MenuData.json';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showSearchInputHandler = () => setShow(prevShow => !prevShow);
  const closeSearchInputHandler = () => setShow(false);
  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  const handleSearchInputChange = (e) => setSearchQuery(e.target.value);

  const showSearchResultHandler = () => {
    if (searchQuery.trim()) {
      navigate(`/result?query=${searchQuery}`);
      closeSearchInputHandler();
    }
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      showSearchResultHandler();
    }
  };

  const isDogOrCatPage = location.pathname === '/care-for-dog' || location.pathname === '/care-for-cat';
  const textColorClass = isScrolled || !isDogOrCatPage ? 'text-black' : 'text-white';

  return (
    <div className={`fixed top-0 w-full z-[111] ${isScrolled ? 'bg-image' : 'bg-transparent'}`}>
      <header className={`header-wrapper ${isScrolled && '!pt-0'} transition-all duration-200`}>
        <div className="flex items-center justify-between wrapper-inner-spacing">
          <div className="logo">
            <a href="/">
              <img src="/image/v1/logo.png" alt="logo" className='logo 1xl:w-[140px] xl:w-[120px] lg:w-[80px] md:w-[75px] w-[70px] logo-img' />
            </a>
          </div>
          <nav className={`${isSidebarOpen ? 'translate-x-0' : ''} kit-nav-wrapper duration-300 ease-in-out `}>
            <ul className="kit-ul items-center md:gap-[20px] sm:gap-[30px] gap-[12px] inline-block relative">
              {menuData.menuItems.map((item) => (
                <li key={item.id} className={`dropdown ${item.isDropdown ? 'relative' : ''}`}>
                  <a href={item.route} className="flex items-center py-2 px-4 gap-[12px] lg:p-0 text-lg hover:bg-gray-100 lg:hover:bg-transparent" onClick={() => !item.isDropdown && setIsSidebarOpen(false)}>
                    <img src={item.icon} alt="menu" />
                    <p className={`4xl:text-[20px] 2xl:text-[18px] leading-[60px] ${isDogOrCatPage && 'text-color-mb'}  ${textColorClass}`}>{item.label}</p>
                  </a>
                  {item.isDropdown && (
                    <ul className="dropdown-menu absolute animate-overlay hidden rounded-lg bg-white z-[11] shadow-lg text-center min-w-[222px]">
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <React.Fragment key={dropdownItem.label}>
                          <li>
                            <Link to={dropdownItem.link} className="block rounded-lg px-4 py-4 hover:text-[#81312d] text-black">{dropdownItem.label}</Link>
                          </li>
                          {index !== item.dropdownItems.length - 1 && (
                            <li className="border-dashed border-b border-black mx-6"></li>
                          )}
                        </React.Fragment>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className='flex items-center gap-4 relative'>
            {show && (
              <div className={`inline-flex items-center gap-[10px] absolute search-bar sm:mr-0`}>
                <div className='bg-[#f42534] !z-[22] flex items-center h-[48px] rounded-[999px] pr-[30px] relative'>
                  <input
                    placeholder='Search product'
                    className='bg-transparent pl-[20px] focus:outline-none text-white placeholder:text-white sm:w-[200px] w-[150px]'
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    onKeyDown={handleSearchKeyDown} // Add this line
                  />
                  <img src="/image/h-searchm.png" onClick={showSearchResultHandler} alt="search" className='cursor-pointer absolute right-3 p-[5px] top-2 z-[22] bg-[red]' />
                </div>
                <img src="/image/close2.png" alt="search" onClick={closeSearchInputHandler} className='cursor-pointer transform hover:rotate-90 transition-all duration-700' />
              </div>
            )}
            <div className={`flex items-center gap-[5px] transition-all duration-200 ${show && 'xl:opacity-0'}`}>
              <img src="/image/h-search.png" alt="search" onClick={showSearchInputHandler} className=' xl:w-[60px] w-[40px] cursor-pointer' />
            </div>
            <div className="menu-icon" onClick={toggleSidebar}>
              {isSidebarOpen ? <img src="/image/pho-hc.png" alt="Close" className='xl:w-[60px] w-[40px] cursor-pointer' /> : <img src="/image/pho-h2.png" alt="Open" className='xl:w-[60px] w-[40px] cursor-pointer' />}
            </div>
          </div>
        </div>
      </header>
      {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 transition-all duration-200" onClick={toggleSidebar}></div>}
    </div>
  );
}
