import React, { useEffect, useState } from 'react'
import DecorativeHeader from '../components/DecorativeHeader'
import VideoOverlay from '../components/VideoModal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';
import DanceFont from '../components/DanceFont'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet';
gsap.registerPlugin(ScrollTrigger);

export default function Quality() {

  useEffect(() => {
    gsap.to('.animate-elem-1', {
      y: '15%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll-section-1',
        start: 'top center',
        end: 'bottom center',
        scrub: 0.4,
      },
    });
    gsap.to('.animate-elem-2', {
      y: '-35%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll-section-1',
        start: 'top center',
        end: 'bottom center',
        scrub: 0.4,
      },
    });

    gsap.to('.animate-elem-3', {
      y: '30%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll-section-3',
        start: 'top center',
        end: 'bottom center',
        scrub: 0.4,
      },
    });

    gsap.to('.animate-elem-4', {
      y: '45%',
      ease: 'none',
      scrollTrigger: {
        trigger: '.scroll-section-4',
        start: 'top center',
        end: 'bottom center',
        scrub: 0.4,
      },
    });
  }, []);
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

  const qualityBannerTop = {
    backgroundImage: "url('/image/quality/quality-banner-top.jpg')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  const qualityBannerBottom = {
    backgroundImage: "url('/image/quality/quality-banner-bottom.jpg')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  const style = {
    transform: 'translateX(-50%) translateY(-50%)'
  };

  return (
    <>
      <Helmet>
        <title>Brand | Kitchen Flavor</title>
        {/* <meta name="description" content="Discover the quality production process at Kitchen Flavor, including our dry and wet food production bases and European standard quality control." />
        <meta name="keywords" content="Kitchen Flavor, quality, dry food, wet food, production base, European standard, quality control" /> */}
      </Helmet>
      <div>
        <div style={qualityBannerTop} className='pt-[200px] relative'>
          <div className='kit-container py-[100px] relative scroll-section-1'>
            <img src='/image/contact/fly-cat.png' className='animate-elem-2 absolute left-0 top-0 lg:block hidden  w-[191px] h-[181px]' alt='cat' />
            <img src='/image/contact/fly-dog (1).png' className='animate-elem-2 absolute right-0 top-0 xl:block hidden w-[184px] h-[165px]' alt='cat' />
            <DecorativeHeader title='Production base' subtitle='About kitchen flavor' color='#81312d' dotBgColor='#81312d' />

            <div className='animate-elem-1'>
              <div className='lg:grid grid-cols-2 items-center lg:gap-[170px] gap-[40px] pb-[120px] pt-[31px] flex flex-col' data-aos="fade-up">
                <div className='relative'>
                  <img src='/image/quality/158167525699494etqp.jpg' alt='com img' className='rounded-tr-[60%] rounded-tl-[60%] rounded-br-[20%] rounded-bl-[20%]' />
                  <img src='/image/v1/brands/Top selling-4.png' className='absolute -right-28 -bottom-20 lg:block hidden w-[auto] h-[320px]' alt='product' />
                </div>
                <div className=''>
                  <DanceFont title={'Dry'} color={'text-customText'} />
                  <p className='text-[#81312d] text-[18px] leading-[40px] pt-[20px]'>
                    Kitchen Flavor Production Base (Dry Food) in Shandong Province is located in Heze, Shandong Province,
                  </p>
                  <p className='text-[#81312d] text-[60px] leading-[60px] pt-[46px]'>70000 <span className='text-[#81312d] text-[16px] leading-[40px]'>square meters</span></p>
                  <p className='text-[#81312d] text-[18px] leading-[40px] pt-[20px]'>With a construction area of more than 70,000 square meters. It adopts domestic well-known high-end production equipment. </p>
                  <p className='text-[#81312d] text-[60px] leading-[60px] pt-[46px]'>300 <span className='text-[#81312d] text-[16px] leading-[40px]'>tons</span></p>
                  <p className='text-[#81312d] text-[18px] leading-[40px] pt-[20px]'>The daily output of the dry food factory reaches 300 tons.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={qualityBannerBottom}>
          <div className='kit-container scroll-section-3'>
            <div className=''>
              <div className='animate-elem-3'>
                <div className='lg:grid grid-cols-2 items-center lg:gap-[170px] gap-[40px] pb-[120px] pt-[31px]  flex flex-col' data-aos="fade-up">
                  <div className='relative lg:order-2 order-1'>
                    <img src='/image/quality/15821796674401x9txi.jpg' alt='com img' className='rounded-tr-[60%] rounded-tl-[60%] rounded-br-[20%] rounded-bl-[20%]' />
                    <img src='/image/quality/yiping.png' className='absolute -left-28 -bottom-20  lg:block hidden' alt='product' />
                  </div>
                  <div className='lg:order-1 order-2'>
                    <DanceFont title={'Wet'} color={'text-customText'} />
                    <p className='text-[#81312d] text-[18px] leading-[40px] pt-[20px]'>
                      Wet Food Production Base (Shanghai Jinshan):
                    </p>
                    <p className='text-[#81312d] text-[60px] leading-[60px] pt-[46px]'>70000 <span className='text-[#81312d] text-[16px] leading-[40px]'>square meters</span></p>
                    <p className='text-[#81312d] text-[18px] leading-[40px] pt-[20px]'>In 2018, established a commercial partnership with Tetra Pak to create the first pet staple wet food production line in China, with an investment of several hundred million yuan.
                      70000 tons</p>
                    <p className='text-[#81312d] text-[60px] leading-[60px] pt-[46px]'>36 <span className='text-[#81312d] text-[16px] leading-[40px]'>tons</span></p>
                    <p className='text-[#81312d] text-[18px] leading-[40px] pt-[20px]'>The wet food production line produces up to 36 tons per day (100 packs per minute).
                      36 tons</p>
                  </div>
                </div>
              </div>
              <div className='animate-elem-3'>
                <div className='lg:grid grid-cols-2 items-start gap-[30px] pt-[70px] lg:space-y-0 space-y-[60px] mb-[50px] lg:bg-transparent bg-[#fcdd90] p-[24px] rounded-[16px] drop-shadow-xl' data-aos="fade-up">
                  <div className='sm:flex gap-[25px] w-full items-start sm:pb-0 pb-[30px]'>
                    <img src='/image/quality/15758802198355aypo3.png' className='rounded-full' alt='img' />
                    <div>
                      <div style={{ fontFamily: '"Fira Sans Condensed", sans-serif' }} className='relative lg:text-[32px] text-[28px] leading-[50px] text-[rgba(129,49,50,0.68)] w-full block'>
                        Professional processing technology
                      </div>
                      <p className='text-[#81312d] text-[18px] leading-[30px] pt-[30px]'>Every day, our products go through 72 strict steps from raw materials to final production to ensure the highest quality, with raw ingredients stored at -18 degrees Celsius.</p></div>
                  </div>
                  <div>
                    <div className='sm:flex gap-[25px] w-full items-start sm:pb-0 pb-[30px]'>
                      <img src='/image/15758802390438kou8i.png' className='rounded-full' alt='img' />
                      <div>
                        <div style={{ fontFamily: '"Fira Sans Condensed", sans-serif' }} className='relative lg:text-[32px] text-[28px] leading-[50px] text-[rgba(129,49,50,0.68)] w-full block'>
                          European standard quality control
                        </div>
                        <p className='text-[#81312d] text-[18px] leading-[30px] pt-[30px]'>We use sealed filling Tetra Recart packaging technology, the first 9-layer packaging product that meets stricter standards than milk packaging.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='animate-elem-3'>
                  <div className=' max-w-[1126px] mx-auto pt-[40px] relative overflow-hidden' data-aos="fade-up">
                    <img src='/image/quality/rouli1.png' alt='rou' className='absolute left-[-25%] top-[30%] lg:block hidden' />
                    <img src="/image/about/phoimgabout.png" className="w-full max-w-[1252px] mx-auto" alt="cat" />
                    <div className='absolute  left-0 right-0 lg:top-[10%] top-[0%] bottom-0 sm:px-[120px] px-[30px] sm:py-[100px] py-[30px] text-center'>
                      <div className="about-jir">
                        <div className="name wow fadeInUp animated">
                          <span className='lg:text-[30px] text-[16px] text-[#81312d] lg:leading-[60px] leading-[32px]'>We retain samples from each batch for observation and rigorous quality monitoring.</span>
                        </div>
                        <ul className="img wow fadeInUp sm:space-y-0 space-y-[30px] animated sm:grid grid-cols-2 justify-center items-center pt-[84px] gap-[50px] border-b border-dashed border-[#dfc180] pb-[40px]">
                          <li className='flex items-start gap-[20px]'>
                            <div className="i-img">
                              <img src="/image/quality/15758809079484gx76h.png" alt="Delicious and nutritious" className='mx-auto rounded-full sm:max-w-[115px] sm:h-[115px] max-w-[70px] h-[70px]' />
                            </div>
                            <div className="text-left">
                              <div className='text-[22px] text-[#81312d] leading-[24px]'>Dry food</div>
                              <p className='text-[#81312d] sm:text-[18px] text-[16px] leading-[30px] pt-[8px]'>Sampling intervals have reached 1 hour per batch, with a storage period of 18 months.</p>
                            </div>
                          </li>
                          <li className='flex items-start gap-[20px]'>
                            <div className="i-img">
                              <img src="/image/quality/15758809279239jvsp9.png" alt="Delicious. Rejuvenating" className='mx-auto rounded-full sm:max-w-[115px] sm:h-[115px] max-w-[70px] h-[70px]' />
                            </div>
                            <div className="text-left">
                              <div className='text-[22px] text-[#81312d] leading-[24px]'>Wet food</div>
                              <p className='text-[#81312d] sm:text-[18px] text-[16px] leading-[30px] pt-[8px]'>Each pouch and can is sampled and stored for a storage period of 24 months.</p>
                            </div>
                          </li>
                        </ul>
                        <div className="about-ane pt-[34px]">
                          <p>
                            <span className='sm:text-[20px] text-[16px]text-[#81312d] leading-[36px]'>This exceeds both national and industry standards.</span>
                          </p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className='scroll-section-4'>
            <div className='pb-[333px] mt-[333px] relative'>

              <img src='/image/contact/fly-dog (1).png' className='animate-elem-4 absolute left-0 top-[30%] xl:block hidden w-[184px] h-[165px]' alt='cat' />
              <div className="text-center">
                <DecorativeHeader title='Video Center' subtitle='About kitchen flavor' color='#81312d' dotBgColor='#81312d' />

              </div>
              <div className="max-w-[1126px] max-h-[588px] w-full h-full mt-[95px] mx-auto flex justify-center items-center relative" data-aos="fade-up">
                <img className="max-w-[1126px] lg:h-[588px] w-full h-full mx-auto static z-[2]" src="image/vidoe-banner.png" alt="video" />

                <div className="w-full h-full flex justify-center items-center" style={{ style }}>
                  <img className="cursor-pointer absolute z-10 left-[50%] top-[50%] video-play-button-ani sm:w-[80px] sm:h-[80px] w-[60px] h-[60px] mx-auto" onClick={handlePlayVideo} src="image/play-btn.png" alt="video" />
                </div>
                {showVideo && <VideoOverlay videoId="dQw4w9WgXcQ" onClose={handleCloseVideo} />}
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
