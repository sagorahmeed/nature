import React from 'react'
import DecorativeHeader from '../components/DecorativeHeader'

export default function Quality() {
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

  return (
    <>
      <div>
        <div style={qualityBannerTop} className='pt-[200px] relative'>
          <div className='kit-container py-[100px] relative'>
            <img src='/image/contact/fly-cat.png' className='absolute left-0 top-0' alt='cat' />
            <img src='/image/contact/fly-dog (1).png' className='absolute right-0 top-0' alt='cat' />
            <DecorativeHeader title="Production base" subtitle="Production base" />
            <div className='lg:grid grid-cols-12 items-center gap-[150px] pb-[120px] pt-[31px]'>
              <div className='col-span-6 relative'>
                <img src='/image/quality/158167525699494etqp.jpg' alt='com img' className='rounded-tr-[60%] rounded-tl-[60%] rounded-br-[20%] rounded-bl-[20%]' />
                <img src='/image/dog/15767482787116h2vwy.png' className='absolute -right-28 -bottom-20' alt='product' />
              </div>
              <div className='col-span-5'>
                <img src='/image/quality/proinfog.png' alt='quality' />
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
            <div className='lg:grid grid-cols-12 items-center gap-[150px] pb-[120px] pt-[31px]'>

              <div className='col-span-5'>
                <img src='/image/quality/proinfog.png' alt='quality' />
                <p className='text-[#81312d] text-[18px] leading-[40px] pt-[20px]'>
                  Shandong Kaifanle production base (dry food) is located in Heze, Shandong, covering an area of ​​more than 70,000 square meters and using domestically renowned high-end production equipment. The dry food factory has a daily production capacity of 300 tons.
                </p>
                <p className='text-[#81312d] text-[60px] leading-[60px] pt-[46px]'>70000 <span className='text-[#81312d] text-[16px] leading-[40px]'>square meters</span></p>
                <p className='text-[#81312d] text-[18px] leading-[40px] pt-[20px]'>Covering an area of ​​more than 70,000 square meters</p>
                <p className='text-[#81312d] text-[60px] leading-[60px] pt-[46px]'>3000 <span className='text-[#81312d] text-[16px] leading-[40px]'>tons</span></p>
                <p className='text-[#81312d] text-[18px] leading-[40px] pt-[20px]'>Daily production reaches 300 tons</p>
              </div>

              <div className='col-span-6 relative'>
                <img src='/image/quality/15821796674401x9txi.jpg' alt='com img' className='rounded-tr-[60%] rounded-tl-[60%] rounded-br-[20%] rounded-bl-[20%]' />
                <img src='/image/quality/yiping.png' className='absolute -left-28 -bottom-20' alt='product' />
              </div>
            </div>
            <div className='lg:flex items-start gap-[30px] pt-[70px]'>
              <div className='flex gap-[25px] w-full items-start'>
                <img src='/image/quality/15758802198355aypo3.png' className='rounded-full' alt='img' />
                <div>
                  <div className='relative text-[62px] leading-[32px] text-[rgba(129,49,51,0.1)] w-full block'>
                    Professional
                    <p className='text-[#81312d] text-[16px] leading-[24px] absolute left-1 top-2'>Professional processing technology</p>
                  </div>
                  <p className='text-[#81312d] text-[18px] leading-[30px] pt-[50px]'>Raw meat raw materials will be stored at minus 18 degrees Celsius and processed at a low temperature of 4-10 degrees Celsius.</p>

                </div>
              </div>
              <div>
                <div className='flex gap-[25px] w-full items-start'>
                  <img src='/image/quality/15758802198355aypo3.png' className='rounded-full' alt='img' />
                  <div>
                    <div className='relative text-[62px] leading-[32px] text-[rgba(129,49,51,0.1)] w-full block'>
                      Professional
                      <p className='text-[#81312d] text-[16px] leading-[24px] absolute left-1 top-2'>Professional processing technology</p>
                    </div>
                    <p className='text-[#81312d] text-[18px] leading-[30px] pt-[50px]'>Raw meat raw materials will be stored at minus 18 degrees Celsius and processed at a low temperature of 4-10 degrees Celsius.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='max-w-[1126px] mx-auto pt-[40px] relative'>
                <img src='/image/quality/rouli1.png' alt='rou' className='absolute left-[-25%] top-[30%] lg:block hidden' />
                <img src="/image/about/phoimgabout.png" className="w-full max-w-[1252px] mx-auto" alt="cat" />
                <div className='sm:absolute static left-0 right-0 lg:top-[10%] top-[0%] bottom-0 lg:px-[120px] px-[80px] py-[100px] text-center'>
                  <div className="about-jir">
                    <div className="name wow fadeInUp animated">
                      <span className='lg:text-[30px] text-[20px] text-[#81312d] lg:leading-[60px] leading-[32px]'>Keep samples of each batch of products to observe and monitor quality</span>
                    </div>
                    <ul className="img wow fadeInUp animated grid grid-cols-2 justify-center items-center pt-[84px] gap-[50px] border-b border-dashed border-[#dfc180] pb-[40px]">
                      <li className='flex items-start gap-[20px]'>
                        <div className="i-img">
                          <img src="/image/quality/15758809079484gx76h.png" alt="Delicious and nutritious" className='mx-auto rounded-full max-w-[115px] h-[115px]' />
                        </div>
                        <div className="text-left">
                          <div className='text-[22px] text-[#81312d] leading-[24px]'>Dry food</div>
                          <p className='text-[#81312d] text-[18px] leading-[30px] pt-[8px]'>The sampling interval has reached 1 hour/batch, and the storage time limit is 20 months.</p>
                        </div>
                      </li>
                      <li className='flex items-start gap-[20px]'>
                        <div className="i-img">
                          <img src="/image/quality/15758809279239jvsp9.png" alt="Delicious. Rejuvenating" className='mx-auto rounded-full max-w-[115px] h-[115px]' />
                        </div>
                        <div className="text-left">
                          <div className='text-[22px] text-[#81312d] leading-[24px]'>Dry food</div>
                          <p className='text-[#81312d] text-[18px] leading-[30px] pt-[8px]'>The sampling interval has reached 1 hour/batch, and the storage time limit is 20 months.</p>
                        </div>
                      </li>
                    </ul>
                    <div className="about-ane pt-[34px]">
                      <p>
                        <span className='text-[20px] text-[#81312d] leading-[36px]'>Much higher than national standards and industry standards.</span>
                      </p>

                    </div>
                  </div>
                </div>
              </div>
             <div className='py-[183px]'>
             <div className="text-center">
              <DecorativeHeader title="Video Center" subtitle="Video Center" />
              </div>
              <div className="max-w-[1126px] max-h-[588px] w-full h-full pt-[95px] mx-auto flex justify-center items-center">
                <img className="max-w-[1126px] lg:h-[588px] w-full h-full mx-auto static z-[2]" src="image/vidoe-banner.png" alt="video" />
                <img className="absolute cursor-pointer z-[3]" src="image/play-btn.png" alt="video" />
              </div>
             </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
