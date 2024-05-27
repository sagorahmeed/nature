import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DotLine = (({dotBgColor}) => {
  return(
    <div className='flex gap-[6px]'>
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className={`w-[4px] h-[4px] rounded-full`} style={{background:dotBgColor}}></div>
      ))}
    </div>
  )
})


const DecorativeHeader = ({ title, subtitle, color,dotBgColor }) => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location]);

  const textColor = color === 'white' ? 'text-white' : 'text-[#81312d]';


  return (
    <div className="text-center" data-aos="zoom-in-up">
      <div className='max-w-[700px] mx-auto'>
        <div className='flex items-center justify-center gap-[30px]'>
          <DotLine dotBgColor={dotBgColor}/>
          <h1 className={`lg:text-4xl md:text-2xl text-[20px] font-medium ${textColor}`}>{title}</h1>
          <DotLine dotBgColor={dotBgColor} />
        </div>
      </div>
    </div>
  );
};

export default DecorativeHeader;
