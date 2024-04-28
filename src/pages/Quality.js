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
      <div style={qualityBannerTop} className='pt-[200px]'>
        <div className='kit-container py-[100px]'>
         <DecorativeHeader title="Production base" subtitle="Production base" />
         <div className='lg:grid grid-cols-12 items-center gap-[150px] pb-[120px] pt-[31px]'>
            <div className='col-span-6'>
                <img src='/image/quality/158167525699494etqp.jpg' alt='com img' className='rounded-tr-[60%] rounded-tl-[60%] rounded-br-[20%] rounded-bl-[20%]'/>
            </div>
            <div className='col-span-5'>
                <img src='/image/quality/proinfog.png' alt='quality'/>
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

      </div>
    </div>
    </>
  )
}
