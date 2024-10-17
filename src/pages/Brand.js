import React, { useEffect, useState } from 'react'
import DecorativeHeader from '../components/DecorativeHeader'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';
import DanceFont from '../components/DanceFont'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet';
import YouTube from 'react-youtube';
gsap.registerPlugin(ScrollTrigger);

export default function Quality() {

  useEffect(() => {
    if (window.innerWidth >= 991) {

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
    }
  }, []);
 


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
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  const style = {
    transform: 'translateX(-50%) translateY(-50%)'
  };

  const [opts, setOpts] = useState({
    height: '600',
    width: '100%',
    playerVars: {
        autoplay: 1,
    },
});
    // Update the video size based on the screen width
    useEffect(() => {
        const updateVideoSize = () => {
            if (window.innerWidth < 640) {
                // Mobile
                setOpts({
                    height: '350',
                    width: '100%',
                    playerVars: { autoplay: 1 },
                });
            } else if (window.innerWidth < 1024) {
                // Tablet
                setOpts({
                    height: '400',
                    width: '100%',
                    playerVars: { autoplay: 1 },
                });
            } else if (window.innerWidth < 1280) {
                // Desktop
                setOpts({
                    height: '553',
                    width: '100%',
                    playerVars: { autoplay: 1 },
                });
            }
        };

        // Set the initial video size
        updateVideoSize();

        // Add event listener for window resizing
        window.addEventListener('resize', updateVideoSize);

        // Clean up the event listener on unmount
        return () => window.removeEventListener('resize', updateVideoSize);
    }, []);

   // Disable body scroll when the modal is open
   useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when the modal is closed
    return () => {
        document.body.style.overflow = 'auto';
    };
}, []);

  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  // Disable body scroll when the modal is open
  useEffect(() => {
    if (showVideo) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto';   // Enable scrolling
    }

    // Cleanup function to reset overflow when component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showVideo]); // Add showVideo to the dependency array

  return (
    <>
      <Helmet>
        <title>Our Values | Kitchen Flavor Pet Food | Bridge Pet Care products | Pet Food Manufacturer Company</title>
        <meta name="description" content="Kitchen Flavor Brand Official Website | Bridge Pet Care Products | Pet Food Manufacturer Company" />
      </Helmet>
      <div className='relative'>

        {showVideo && <div className="!fixed top-0 left-0 right-0 bottom-0 !w-full !h-full bg-black bg-opacity-75 flex justify-center items-center z-[999] modal">
          <div className='w-full relative max-w-[1200px] max-h-[675px] sm:mx-[40px] mx-[20px]'>
            <img src="/image/close2.png" alt="search" onClick={handleCloseVideo} className='cursor-pointer transform hover:rotate-90 transition-all duration-700 bg-white sm:p-[10px] p-[6px] absolute right-2 top-2 rounded-full' />
            <YouTube videoId={'Sun9OSESywg'} opts={opts} />

          </div>
        </div>}
        <div style={qualityBannerTop} className='2xl:pt-[200px] xl:pt-[160px] lg:pt-[140px] md:pt-[120px] sm:pt-[120px] pt-[100px] relative'>
          <div className='kit-container py-[100px] relative scroll-section-1 !pb-[150px]'>
            <img src='/image/contact/fly-cat.png' className='animate-elem-2 absolute left-0 top-0 lg:block hidden  xl:w-[191px] w-[151px] h-[auto]' style={{ transform: 'rotateY(165deg)' }} alt='cat' />
            <img src='/image/contact/fly-dog (1).png' className='animate-elem-2 absolute right-0 top-0 xl:block hidden w-[184px] h-[165px]' style={{ transform: 'rotateY(170deg)' }} alt='cat' />
            <DecorativeHeader title='Production base' subtitle='About kitchen flavor' color='#81312d' dotBgColor='#81312d' />

            <div className='animate-elem-1'>
              <div className='lg:grid grid-cols-2 items-center lg:gap-[170px] gap-[40px] lg:pb-[120px] md:pb-[80px] pb-[40px] pt-[61px] flex flex-col' data-aos="fade-up">
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
        <div className='bg-[#fbdd8f] relative'>
          <div className='kit-container scroll-section-3 relative z-[22]'>
            <div className=''>
              <div className='animate-elem-3'>
                <div className='lg:grid grid-cols-2 items-center lg:gap-[170px] gap-[40px] lg:pb-[120px] md:pb-[80px] pb-[40px] pt-[31px]  flex flex-col' data-aos="fade-up">
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
                    <p className='text-[#81312d] text-[18px] leading-[40px] pt-[20px]'>In 2018, we established the first automatic tetra pack wet food production line in Asia, with an investment of several hundred million Yuan. Daily wet food production capacity 36 tons (100 pack/minute)</p>
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
                <div className='animate-elem-3 relative'>
                  <img src='/image/quality/rouli1.png' alt='rou' className='absolute 2xl:left-[-15%] top-[30%] lg:block hidden' />
                  <div className='max-w-[1126px] mx-auto pt-[40px] relative'>
                    <img src="/image/about/phoimgabout.png" className="w-full max-w-[1126px] lg:h-[650px]  sm:h-[850px] h-[400px] mx-auto flex justify-center items-center relative" alt="cat" />
                    <div className='max-w-[1126px] absolute left-0 right-0 top-0 bottom-0 text-center flex justify-center items-center w-full h-full md:px-[100px] sm:px-[80px] max-[480px]:px-[60px] px-[40px] mx-auto'>
                      <div className='sm:pt-[0] pt-[38px]'>
                        <div className="">
                          <span className='lg:text-[30px] sm:text-[16px] text-[14px] text-[#81312d] lg:leading-[40px] sm:leading-[26px] leading-[15px]'>We retain samples from each batch for observation and rigorous quality monitoring.</span>
                        </div>
                        <ul className="img wow fadeInUp md:space-y-0 space-y-[24px] animated md:flex justify-center items-center gap-[50px] sm:pt-[82px] pt-[16px] sm:pb-[70px] pb-[16px] border-b border-dashed border-[#dfc180]">
                          <li className='flex items-start sm:gap-[20px] gap-[16px]'>
                            <div className="i-img">
                              <img src="/image/quality/15758809079484gx76h.png" alt="Delicious and nutritious" className='mx-auto rounded-full sm:max-w-[115px] sm:h-[115px] max-w-[50px] h-[50px]' />
                            </div>
                            <div className="text-left">
                              <div className='sm:text-[22px] text-[18px] text-[#81312d] sm:leading-[24px] leading-[26px]'>Dry food</div>
                              <p className='text-[#81312d] md:text-[18px] sm:text-[16px] text-[12px] md:leading-[28px] sm:leading-[26px] leading-[14px] pt-[6px]'>Sampling intervals have reached 1 hour per batch, with a storage period of 18 months.</p>
                            </div>
                          </li>
                          <li className='flex items-start sm:gap-[20px] gap-[16px]'>
                            <div className="i-img">
                              <img src="/image/quality/15758809279239jvsp9.png" alt="Delicious. Rejuvenating" className='mx-auto rounded-full sm:max-w-[115px] sm:h-[115px] max-w-[50px] h-[50px]' />
                            </div>
                            <div className="text-left">
                              <div className='sm:text-[22px] text-[18px] text-[#81312d] sm:leading-[24px] leading-[26px]'>Wet food</div>
                              <p className='text-[#81312d] md:text-[18px] sm:text-[16px] text-[12px] md:leading-[28px] sm:leading-[26px] leading-[14px] pt-[6px]'>Each pouch and can is sampled and stored for a storage period of 24 months.</p>
                            </div>
                          </li>
                        </ul>
                        <div className="about-ane sm:pt-[34px] pt-[16px]">
                          <p>
                            <span className='md:text-[20px] sm:text-[16px] text-[14px] text-[#81312d] md:leading-[30px] sm:leading-[26px] leading-[15px]'>This exceeds both national and industry standards.</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <img src='/image/quality/quality-banner-bottom.jpg' style={qualityBannerBottom} className='absolute bottom-0 md:min-h-[2940px] min-h-[1330px] object-cover z-[1] w-full' alt='dfdf' />

          <div className='scroll-section-4 relative z-[22]'>
            <div className=' 2xl:pb-[333px] xl:pb-[303px] lg:pb-[193px] pb-[153px] lg:mt-[333px] md:mt-[120px] mt-[100px] relative'>

              <img src='/image/contact/fly-dog (1).png' className='animate-elem-4 absolute left-0 top-[30%] xl:block hidden w-[184px] h-[165px]' alt='cat' />
              <div className="text-center">
                <DecorativeHeader title='Video Center' subtitle='About kitchen flavor' color='#81312d' dotBgColor='#81312d' />

              </div>
              <div className="max-w-[1126px] max-h-[588px] w-full h-full mt-[95px] mx-auto flex justify-center items-center relative" data-aos="fade-up">
                <img className="max-w-[1126px] lg:h-[588px] w-full h-full mx-auto static z-[2]" src="image/factory.png" alt="video" />

                <div className="w-full h-full flex justify-center items-center" style={{ style }}>
                  <img className="cursor-pointer absolute z-10 left-[50%] top-[50%] video-play-button-ani sm:w-[80px] sm:h-[80px] w-[60px] h-[60px] mx-auto" onClick={handlePlayVideo} src="image/play-btn.png" alt="video" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
