import React, { useEffect, useState } from 'react'
import Slider from "react-slick/lib/slider";
import VideoOverlay from '../components/VideoModal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useLocation } from 'react-router-dom';
import RightArrow from '../components/pagination/RightArrow';
import LeftArrow from '../components/pagination/LeftArrow';
import DecorativeHeader from '../components/DecorativeHeader';


export default function About() {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };


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

  const aboutPageArrowStyles = {
    backgroundColor: 'green', // Example custom background color for the about page
    borderRadius: '50%'       // Example custom border radius for the about page
  };




  const aboutBanner = {
    backgroundImage: "url('/image/about/aboutyun1.png')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  const aboutBanner2 = {
    backgroundImage: "url('/image/about/hongse.png')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '530px'
  }
  const aboutBanner3 = {
    backgroundImage: "url('/image/about/hongse.png')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '530px',
    paddingTop: '150px',
  }
  const aboutBanner4 = {
    backgroundImage: "url('/image/about/about-footer-banner.jpg')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingBottom: '300px'
  }


  const awardData = [
    {
      videoSrc: "https://www.youtube.com/embed/4pLlQIzHIbY?si=9igc91Vh1O_hjTDl",
      imgAlt: "cat",
      title: "Kitchen Flavor Launches Premium Cat Food Brand in Bangladesh",
      description: "In November 2023, Kitchen Flavor, the premium cat food brand, officially launched in Bangladesh. Key figures in the country's pet industry, including retailers, veterinarians, and industry leaders, attended the inauguration event. Kitchen Flavor introduced their company and promoted their brand, emphasizing their commitment to providing high-quality, nutritious cat food to pet owners in Bangladesh."
    }
  ];

  const aboutBannerSlider = {
    dots: false,
    fade: false,
    infinite: awardData.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: awardData.length > 1 ? <LeftArrow style={aboutPageArrowStyles} /> : null,
    prevArrow: awardData.length > 1 ? <RightArrow /> : null,
  };

  return (
    <>
      <div style={aboutBanner}>
        <div className='pb-[50px] sm:pt-[160px] pt-[80px]'>
          <div className='py-[60px]'>
            <div className='kit-container'>
              {/* <div className="text-center" data-aos="zoom-in-up">
                <h1 className="text-4xl text-[#81312d]">About kitchen flavor</h1>
                <p className="text-lg text-[#81312d] mt-[10px]">About kitchen flavor</p>
              </div> */}
              <DecorativeHeader title='About kitchen flavor' subtitle='About kitchen flavor' color='#81312d' dotBgColor='#81312d' />

              <div className="lg:grid grid-cols-12 items-center gap-[30px] mt-[60px] relative" data-aos="fade-up">
                <div className="col-span-6 relative">

                  <img src="/image/v1/about/about-us-banner.png" className="w-full" alt="cat" />
                </div>
                <div className="col-span-6 relative">
                  <img src="/image/v1/about/Kitchen-flavor-Tagline (1).png" className="w-full" alt="cat" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#fbdd8f]'>

        <div className='kit-container'>
          {/* <div className="text-center" data-aos="zoom-in-up">
            <h1 className="text-4xl text-[#81312d]">About kitchen flavor</h1>
            <p className="text-lg text-[#81312d] mt-[10px]">About kitchen flavor</p>
          </div> */}
          <DecorativeHeader title='Brand concept' subtitle='About kitchen flavor' color='#81312d' dotBgColor='#81312d' />

          <div className='max-w-[1252px] mx-auto pt-[40px] mb-[-296px] relative 1xl:overflow-auto kitchen-custom-scrollbar' data-aos="fade-up" >
            <img src='/image/about/rou.png' alt='rou' className='absolute right-[0] top-[-13%] lg:block hidden w-[160px] h-[144px]' />
            <img src='/image/about/sma.png' alt='rou' className='absolute left-[-15%] top-[-10%] lg:block hidden w-[184px] h-[162px]' />
            <img src="/image/about/phoimgabout.png" className="w-full max-w-[1252px] mx-auto" alt="cat" />
            <div className='absolute left-0 right-0 lg:top-[10%] top-[0%] bottom-0 sm:px-[120px] px-[40px] sm:py-[100px] py-[40px] text-center'>
              <div className="about-jir">
                <div className="name wow fadeInUp animated">
                  <span className='lg:text-[30px] text-[16px] text-[#81312d] lg:leading-[60px] leading-[32px]'>Nourishment is key for humans so do our cats and dogs.</span>
                </div>
                <ul className="img wow fadeInUp animated sm:grid grid-cols-3 justify-center items-center pt-[50px]">
                  <li>
                    <div className="i-img">
                      <img src="/image/about/shape.png" alt="Delicious and nutritious" className='mx-auto rounded-full sm:w-[114px] sm:h-[114px] w-[70px] h-[70px]' />
                    </div>
                    <div className="zname">
                      <div className='sm:text-[22px] text-[16px] text-[#81312d] leading-[24px] mt-[19px] max-w-[141px] mx-auto'>Delicious and nutritious</div>
                    </div>
                  </li>
                  <li>
                    <div className="i-img">
                      <img src="/image/delicias.png" alt="Delicious. Rejuvenating" className='mx-auto rounded-full sm:w-[114px] sm:h-[114px] w-[70px] h-[70px]' />
                    </div>
                    <div className="zname">
                      <div className='sm:text-[22px] text-[16px] text-[#81312d] leading-[24px] mt-[19px] max-w-[141px] mx-auto'>Delicious. Rejuvenating</div>
                    </div>
                  </li>
                  <li>
                    <div className="i-img">
                      <img src="/image/happiness.png" alt="Delicious. Brings happiness" className='mx-auto rounded-full sm:w-[114px] sm:h-[114px] w-[70px] h-[70px]' />
                    </div>
                    <div className="zname">
                      <div className='sm:text-[22px] text-[16px] text-[#81312d] leading-[24px] mt-[19px] max-w-[171px] mx-auto'>Delicious. Brings happiness</div>
                    </div>
                  </li>
                </ul>
                <div className="about-ane pt-[74px]">
                  {/* <p>
                    <span className='sm:text-[20px] text-[16px] text-[#81312d] leading-[36px]'>Kaifanle returns to the true needs of pets,</span>
                  </p> */}
                  <p>
                    <span className='sm:text-[20px] text-[16px] text-[#81312d] leading-[36px]'>Kitchen Flavor addresses the true desires of pets, Persistently creating genuinely "savory" delights that make them happy inside and out.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={aboutBanner2}>
        </div>
      </div>
      <div className='bg-[#fbdd8f] py-[61px] relative'>
        <img src='/image/about/liug.png' alt='rou' className='absolute right-0 top-0 xl:block hidden' />


        <div className='kit-container'>
          <DecorativeHeader title='Brand Story' subtitle='About kitchen flavor' color='#81312d' dotBgColor='#81312d' />


          <div className="lg:grid grid-cols-12 items-center gap-[30px] mt-[60px] relative" data-aos="fade-up">
            <div className="col-span-6 w-full flex justify-center items-center relative">
              <img src='/image/v1/Miscellaneous-ref-1.png' alt='rou' className='absolute left-[-15%] top-[-37%] lg:block hidden hover-text' />

              <img src="/image/about/15760548879537079pm.png" className="w-full" alt="cat" />
              <div className='absolute cursor-pointer z-[3] left-0 right-0 top-0 bottom-0 h-full flex items-center justify-center'>
                <img className="absolute cursor-pointer z-[3] video-play-button-ani" onClick={handlePlayVideo} src="image/play-btn.png" alt="video" />
                {showVideo && <VideoOverlay videoId="GWmsfBXlLjI" onClose={handleCloseVideo} />}
              </div>
            </div>
            <div className="col-span-6 lg:pt-0 pt-[50px] relative">
              <ul className="space-y-[17px]">
                <li className='text-[#5e271c] text-[18px] leading-[50px]'>From the wilderness and grasslands to the jungle and deep sea,</li>
                <li className='text-[#5e271c] text-[18px] leading-[50px]'>Kitchen Flavor’s quest for deliciousness never ends.</li>
                <li className='text-[#5e271c] text-[18px] leading-[50px]'>Whether it's pure and natural, delicious and juicy, or nutritionally balanced,</li>
                <li className='text-[#5e271c] text-[18px] leading-[50px]'>There is always a natural recipe from Kitchen Flavor that is perfect for your pet.</li>
                <li className='text-[#5e271c] text-[18px] leading-[50px]'>Kitchen Flavor is versatile and omnipotent,</li>
                <li className='text-[#5e271c] text-[18px] leading-[50px]'>Exceeding your expectations,</li>
                <li className='text-[#5e271c] text-[18px] leading-[50px]'>Continuously creating more happiness for you and your pet.</li>
              </ul>

              <img src="/image/goulang.png" className="absolute right-[-10%] bottom-0 1xl:block hidden" alt="cat" />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#fbdd8f] py-[61px] relative'>
        <div style={aboutBanner3}>
          <DecorativeHeader title='Other brands' subtitle='About kitchen flavor' color='white' dotBgColor='#fff' />
        </div>
        <div className='mt-[-260px]'>
          <div className='kit-container'>
            <div className='lg:grid grid-cols-2 gap-[38px]' data-aos="fade-up">
              <div className='relative overflow-hidden' data-aos="fade-up">
                <img src="/image/about/ping1.png" className="w-full mx-auto" alt="cat" />
                <div className='absolute left-0 right-0 top-[8%] bottom-0 sm:px-[50px] px-[30px] pt-[30px] pb-[80px] text-center'>
                  <div className="about-jir">
                    <Link to='https://www.vigornsage.com/'>
                      <img src="/image/v1/about/other-brands-1.png" className="w-full sm:max-w-[320px] max-w-[20px] mx-auto rounded-2xl" alt="cat" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className='relative overflow-hidden' data-aos="fade-up">
                <img src="/image/about/ping1.png" className="w-full mx-auto" alt="cat" />
                <div className='absolute left-0 right-0 top-[15%] bottom-0 sm:px-[120px] px-[30px] pt-[30px] pb-[80px] text-center'>
                  <div className="about-jir">
                    <Link to='https://naturebridge.eu/'>
                      <img src="/image/v1/about/other-brands-2.png" className="w-full sm:max-w-[320px] max-w-[20px] mx-auto rounded-2xl" alt="cat" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={aboutBanner4}>
        <div className='kit-container'>
          <div className="text-center pt-[100px] pb-[50px]" data-aos="zoom-in-up">
            <DecorativeHeader title='Recent activities' subtitle='About kitchen flavor' color='#81312d' dotBgColor='#81312d' />
          </div>
          <div className='lg:max-w-[1551px] 2xl:h-[627px] h-full mx-auto pb-[60px] relative pt-[20px] lg:bg-transparent bg-[#ffcc56] lg:px-0 px-[16px] lg:py-0 py-[16px] rounded-[16px] about-container-slider-2' data-aos="fade-up" >
            <img src="/image/about/phoimgabout.png" className="w-full max-w-[1551px] 2xl:h-[627px] h-full mx-auto lg:block hidden" alt="cat" />

            <div className="slider-container-2 lg:absolute static left-0 right-0 2xl:top-[20%] top-[18%] bottom-0 lg:px-[120px] 2xl:py-[40px] text-center">
              <Slider {...aboutBannerSlider}>

                {awardData.map((item, index) => (
                  <div className='' key={index}>
                    <div className="lg:grid grid-cols-2 items-center gap-[24px]">
                      <div>
                        <iframe height="315" src={item.videoSrc} className='rounded-[16px] w-full' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      </div>
                      <div className='lg:mt-0 mt-[30px]'>
                        <p className='text-[#81312d] text-[24px] leading-[34px] text-left res-title'>{item.title}</p>
                        <p className='text-[#81312d] text-[16px] leading-[30px] pt-[7px] text-left'>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
