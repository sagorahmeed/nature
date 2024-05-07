import React from 'react';
import { Link } from 'react-router-dom';

function Section({ id, title, subtitle, imageUrl, products, scrollNextSectionId }) {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const bannerStyle = {
    backgroundImage: `url('${imageUrl}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div id={id} className="kit-container w-full md:h-[729px] h-[544px] relative flex items-end justify-center translate-y-[150px]" style={bannerStyle}>
      <img src={imageUrl} className="w-full md:h-[729px] h-[544px]" alt="banner" />
      <div className="absolute md:bottom-[80px] bottom-[70px] md:px-[200px] px-[60px]">
        <div className="text-center">
          <h1 className="text-center text-white md:text-6xl text-4xl">{title}</h1>
          <p className="text-center text-white md:text-[21px] text-[16px] pt-[16px]">{subtitle}</p>
          {scrollNextSectionId && <img src="/image/dog/icon-dow.png" onClick={() => handleScroll(scrollNextSectionId)} className="flex justify-center mx-auto mt-[55px] video-play-button-ani cursor-pointer" alt="Scroll Down" />}
        </div>
      </div>
      <div className="pt-[230px] pb-[40px]">
        <h1 className="text-center text-[#4f2900] md:text-[40px] text-[30px]">{title}</h1>
        <div className="flex items-center gap-[20px] justify-center pt-[58px] flex-wrap">
          {products.map((product, index) => (
            <Link key={index} to={product.link}>
              <div className="max-w-[290px] w-full">
                <img src={product.image} alt={product.name} />
                <p className="text-[#653426] text-[20px] leading-[32px] text-center">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section;
