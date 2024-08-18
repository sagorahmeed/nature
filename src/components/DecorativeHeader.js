import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DotLine = (({dotBgColor}) => {
  return(
   <div className='lg:block hidden'>
     <div className='flex gap-[6px]'>
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className={`w-[4px] h-[4px] rounded-full`} style={{background:dotBgColor}}></div>
      ))}
    </div>
   </div>
  )
})


const DecorativeHeader = ({ title, subtitle, color,dotBgColor, parentClass }) => {
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
    <div className={`${parentClass} text-center`}>
      <div className='max-w-[700px] mx-auto'>
        <div className='flex items-center justify-center gap-[30px]'>
          <DotLine dotBgColor={dotBgColor}/>
          <h1 className={`2xl:text-[3rem] xl:text-[30px] text-[28px font-[500] capitalize ${textColor}`}>{title}</h1>
          <DotLine dotBgColor={dotBgColor} />
        </div>
      </div>
    </div>
  );
};

export default DecorativeHeader;
