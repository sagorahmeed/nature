import React, { useEffect, useState } from 'react'
import DecorativeHeader from '../components/DecorativeHeader'
import VideoOverlay from '../components/VideoModal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';
import DanceFont from '../components/DanceFont'

export default function Quality() {
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
      <div>
        <div style={qualityBannerTop} className='pt-[200px] relative'>
          <div className='kit-container py-[100px] relative'>
            <img src='/image/contact/fly-cat.png' className='absolute left-0 top-0 lg:block hidden' alt='cat' data-aos="fade-left" />
            <img src='/image/contact/fly-dog (1).png' className='absolute right-0 top-0 lg:block hidden' alt='cat' data-aos="fade-right" />
            <DecorativeHeader title='Production base' subtitle='About kitchen flavor' color='#81312d' dotBgColor='#81312d' />

            <div className='lg:grid grid-cols-12 items-center gap-[70px] pb-[120px] pt-[31px] flex flex-col' data-aos="fade-up">
              <div className='col-span-6 relative'>
                <img src='/image/quality/158167525699494etqp.jpg' alt='com img' className='rounded-tr-[60%] rounded-tl-[60%] rounded-br-[20%] rounded-bl-[20%]' />
                <img src='/image/dog/15767482787116h2vwy.png' className='absolute -right-28 -bottom-20 lg:block hidden' alt='product' />
              </div>
              <div className='col-span-5'>
                <DanceFont title={'Cat'} color={'text-[customText50]'} />
                <p className='text-[#81312d] text-[18px] leading-[40px] pt-[20px]'>
                  Shandong Kaifanle production base (dry food) is located in Heze, Shandong, covering an area of ​​more than 70,000 square meters and using domestically renowned high-end production equipment. The dry food factory has a daily production capacity of 300 tons.
                </p>
                <p className='text-[#81312d] text-[60px] leading-[60px] pt-[46px]'>70000 <span className='text-[#81312d] text-[16px] leading-[40px]'>square meters</span></p>
                <p className='text-[#81312d] text-[18px] leading-[40px] pt-[20px]'>Covering an area of ​​more than 70,000 square meters</p>
                <p className='text-[#81312d] text-[60px] leading-[60px] pt-[46px]'>3000 <span className='text-[#81312d] text-[16px] leading-[40px]'>tons</span></p>
                <p className='text-[#81312d] text-[18px] leading-[40px] pt-[20px]'>Daily production reaches 300 tons</p>
              </div>
            </div>
          </div>
        </div>
        <div style={qualityBannerBottom}>
          <div className='kit-container'>
            <div className='lg:grid grid-cols-12 items-center gap-[70px] pb-[120px] pt-[31px]  flex flex-col' data-aos="fade-up">

              <div className='col-span-6'>
                <DanceFont title={'dog'} color={'text-[#dfbc765e]'} />
                <p className='text-[#81312d] text-[18px] leading-[40px] pt-[20px]'>
                  Shandong Kaifanle production base (dry food) is located in Heze, Shandong, covering an area of ​​more than 70,000 square meters and using domestically renowned high-end production equipment. The dry food factory has a daily production capacity of 300 tons.
                </p>
                <p className='text-[#81312d] text-[60px] leading-[60px] pt-[46px]'>70000 <span className='text-[#81312d] text-[16px] leading-[40px]'>square meters</span></p>
                <p className='text-[#81312d] text-[18px] leading-[40px] pt-[20px]'>Covering an area of ​​more than 70,000 square meters</p>
                <p className='text-[#81312d] text-[60px] leading-[60px] pt-[46px]'>3000 <span className='text-[#81312d] text-[16px] leading-[40px]'>tons</span></p>
                <p className='text-[#81312d] text-[18px] leading-[40px] pt-[20px]'>Daily production reaches 300 tons</p>
              </div>

              <div className='col-span-5 relative'>
                <img src='/image/quality/15821796674401x9txi.jpg' alt='com img' className='rounded-tr-[60%] rounded-tl-[60%] rounded-br-[20%] rounded-bl-[20%]' />
                <img src='/image/quality/yiping.png' className='absolute -left-28 -bottom-20  lg:block hidden' alt='product' />
              </div>
            </div>
            <div className='lg:grid grid-cols-2 items-start gap-[30px] pt-[70px] lg:space-y-0 space-y-[60px] mb-[50px]' data-aos="fade-up">
              <div className='sm:flex gap-[25px] w-full items-start sm:pb-0 pb-[30px]'>
                <img src='/image/quality/15758802198355aypo3.png' className='rounded-full' alt='img' />
                <div>
                  <div className='relative lg:text-[32px] text-[28px] leading-[50px] text-[rgba(129,49,50,0.33)] w-full block'>
                    Professional processing technology
                  </div>
                  <p className='text-[#81312d] text-[18px] leading-[30px] pt-[50px]'>Raw meat raw materials will be stored at minus 18 degrees Celsius and processed at a low temperature of 4-10 degrees Celsius.</p>

                </div>
              </div>
              <div>
                <div className='sm:flex gap-[25px] w-full items-start sm:pb-0 pb-[30px]'>
                  <img src='/image/quality/15758802198355aypo3.png' className='rounded-full' alt='img' />
                  <div>
                    <div className='relative lg:text-[32px] text-[28px] leading-[50px] text-[rgba(129,49,50,0.33)] w-full block'>
                      European standard quality control
                    </div>
                    <p className='text-[#81312d] text-[18px] leading-[30px] pt-[30px]'>Raw meat raw materials will be stored at minus 18 degrees Celsius and processed at a low temperature of 4-10 degrees Celsius.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='max-w-[1126px] mx-auto pt-[40px] relative overflow-hidden' data-aos="fade-up">
                <img src='/image/quality/rouli1.png' alt='rou' className='absolute left-[-25%] top-[30%] lg:block hidden' />
                <img src="/image/about/phoimgabout.png" className="w-full max-w-[1252px] mx-auto" alt="cat" />
                <div className='absolute  left-0 right-0 lg:top-[10%] top-[0%] bottom-0 sm:px-[120px] px-[30px] sm:py-[100px] py-[30px] text-center'>
                  <div className="about-jir">
                    <div className="name wow fadeInUp animated">
                      <span className='lg:text-[30px] text-[16px] text-[#81312d] lg:leading-[60px] leading-[32px]'>Each batch of products is sampled for quality observation and monitoring.</span>
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
              <div className='py-[183px]'>
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
        </div>
      </div >
    </>
  )
}
