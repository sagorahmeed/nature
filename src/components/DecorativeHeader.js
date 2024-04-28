import React from 'react';

const DotLine = () => (
  <div className='flex gap-[6px]'>
    {Array.from({ length: 8 }, (_, i) => (
      <div key={i} className='w-[4px] h-[4px] rounded-full bg-[#81312d]'></div>
    ))}
  </div>
);

const DecorativeHeader = ({ title, subtitle }) => (
  <div className="text-center">
    <div className='max-w-[700px] mx-auto'>
      <div className='flex items-center justify-between'>
        <DotLine />
        <h1 className="text-4xl text-[#81312d]">{title}</h1>
        <DotLine />
      </div>
    </div>
    {subtitle && <p className="text-lg text-[#81312d] mt-[10px]">{subtitle}</p>}
  </div>
);

export default DecorativeHeader;
