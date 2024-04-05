import React from 'react'

export default function About() {
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
  }
  const aboutBanner4 = {
    backgroundImage: "url('/image/about/about-footer-banner.jpg')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    paddingBottom:'300px'
  }
  return (
    <>
      <div style={aboutBanner}>
        <div className='pb-[50px] pt-[160px]'>
          <div className='py-[60px]'>
            <div className='kit-container'>
              <div className="text-center">
                <h1 className="text-4xl text-[#81312d]">About kitchen flavor</h1>
                <p className="text-lg text-[#81312d] mt-[10px]">About kitchen flavor</p>
              </div>
              <div className="md:grid grid-cols-12 items-center gap-[30px] mt-[60px] relative">
                <div className="col-span-6 relative">

                  <img src="/image/about/15791533454028wew3n.png" className="w-full" alt="cat" />
                </div>
                <div className="col-span-6 relative">
                  <img src="/image/about/15760286989834yoyxg.png" className="w-full" alt="cat" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#fbdd8f]'>

        <div className='kit-container'>
          <div className="text-center">
            <h1 className="text-4xl text-[#81312d]">About kitchen flavor</h1>
            <p className="text-lg text-[#81312d] mt-[10px]">About kitchen flavor</p>
          </div>
          <div className='max-w-[1252px] mx-auto pt-[40px] mb-[-296px] relative'>
            <img src='/image/about/rou.png' alt='rou' className='absolute right-[-15%] top-[-10%]' />
            <img src='/image/about/sma.png' alt='rou' className='absolute left-[-15%] top-[-10%]' />
            <img src="/image/about/phoimgabout.png" className="w-full max-w-[1252px] mx-auto" alt="cat" />
            <div className='absolute left-0 right-0 top-[10%] bottom-0 px-[120px] py-[100px] text-center'>
              <div className="about-jir">
                <div className="name wow fadeInUp animated">
                  <span className='text-[30px] text-[#81312d] leading-[60px]'>Food is the most important thing for people, and dogs and cats are no exception.</span>
                </div>
                <ul className="img wow fadeInUp animated grid grid-cols-3 justify-center items-center pt-[50px]">
                  <li>
                    <div className="i-img">
                      <img src="/image/about/shape.png" alt="Delicious and nutritious" className='mx-auto' />
                    </div>
                    <div className="zname">
                      <div className='text-[22px] text-[#81312d] leading-[24px] mt-[19px] max-w-[141px] mx-auto'>Delicious and nutritious</div>
                    </div>
                  </li>
                  <li>
                    <div className="i-img">
                      <img src="/image/about/shape.png" alt="Delicious. Rejuvenating" className='mx-auto' />
                    </div>
                    <div className="zname">
                      <div className='text-[22px] text-[#81312d] leading-[24px] mt-[19px] max-w-[141px] mx-auto'>Delicious. Rejuvenating</div>
                    </div>
                  </li>
                  <li>
                    <div className="i-img">
                      <img src="/image/about/shape.png" alt="Delicious. Brings happiness" className='mx-auto' />
                    </div>
                    <div className="zname">
                      <div className='text-[22px] text-[#81312d] leading-[24px] mt-[19px] max-w-[171px] mx-auto'>Delicious. Brings happiness</div>
                    </div>
                  </li>
                </ul>
                <div className="about-ane pt-[74px]">
                  <p>
                    <span className='text-[20px] text-[#81312d] leading-[36px]'>Kaifanle returns to the true needs of pets,</span>
                  </p>
                  <p>
                    <span className='text-[20px] text-[#81312d] leading-[36px]'>Continuously create truly "delicious" delicacies to make your pet "happy" both physically and mentally</span>
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
      <img src='/image/about/liug.png' alt='rou' className='absolute right-0 top-0' />


        <div className='kit-container'>
          <div className="text-center">
            <h1 className="text-6xl text-[#81312d]">Brand Story</h1>
            <p className="text-lg text-[#81312d] mt-[10px]">About kitchen flavor</p>
          </div>

          <div className="md:grid grid-cols-12 items-center gap-[30px] mt-[60px] relative">
            <div className="col-span-6 relative w-full flex justify-center items-center relative">
            <img src='/image/about/cai.png' alt='rou' className='absolute left-[-15%] top-[-37%]' />

              <img src="/image/about/15760548879537079pm.png" className="w-full" alt="cat" />
              <div className='absolute cursor-pointer z-[3] left-0 right-0 top-0 bottom-0 h-full flex items-center justify-center'>
                 <img className=" mx-auto flex items-center justify-center" src="image/play-btn.png" alt="video" />
              </div>
            </div>
            <div className="col-span-6 md:pt-0 pt-[50px] relative">
              <ul className="space-y-[17px]">
                <li className='text-[#5e271c] text-[18px] leading-[50px]'>From wilderness and grassland to jungle and deep sea,</li>
                <li className='text-[#5e271c] text-[18px] leading-[50px]'>Kaifanle’s search for delicious food never ends.</li>
                <li className='text-[#5e271c] text-[18px] leading-[50px]'>Whether pure and natural, delicious and juicy, or nutritious,</li>
                <li className='text-[#5e271c] text-[18px] leading-[50px]'>There is always one of Kaifanle's natural recipes that is suitable for your pet.</li>
                <li className='text-[#5e271c] text-[18px] leading-[50px]'>Kaifanle is so omnipotent,</li>
                <li className='text-[#5e271c] text-[18px] leading-[50px]'>exceed your needs,</li>
                <li className='text-[#5e271c] text-[18px] leading-[50px]'>Continuously create more happiness for you and your pet.</li>
              </ul>

              <img src="/image/goulang.png" className="absolute right-[-10%] bottom-0" alt="cat" />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#fbdd8f] py-[61px] relative'>
       <div style={aboutBanner3}>
       <div className="text-center py-[100px] pt-[150px]">
            <h1 className="text-6xl text-[#fff]">Brand Story</h1>
            <p className="text-lg text-[#fff] mt-[10px]">About kitchen flavor</p>
          </div>
        </div>
        <div className='mt-[-200px]'>
        <div className='kit-container'>
          <div className='md:grid grid-cols-2 gap-[38px]'>
          <div className='relative'>
            <img src="/image/about/ping1.png" className="w-full mx-auto" alt="cat" />
            <div className='absolute left-0 right-0 top-[10%] bottom-0 px-[120px] pt-[30px] pb-[80px] text-center'>
              <div className="about-jir">
              <img src="/image/about/15758775305083sfdgm.png" className="w-full max-w-[120px] mx-auto mb-[30px]" alt="cat" />
              <ul className="space-y-[17px] h-[10rem] overflow-x-auto">
                <li className='text-[#81312d] text-[15px] leading-[60px] border-b border-dashed border-[red] inline-block'>From wilderness and grassland to jungle and deep sea,</li>
                <li className='text-[#81312d] text-[15px] leading-[60px] border-b border-dashed border-[red] inline-block'>From wilderness and grassland to jungle and deep sea,</li>
                <li className='text-[#81312d] text-[15px] leading-[60px] border-b border-dashed border-[red] inline-block'>From wilderness and grassland to jungle and deep sea,</li>
                <li className='text-[#81312d] text-[15px] leading-[60px] border-b border-dashed border-[red] inline-block'>From wilderness and grassland to jungle and deep sea,</li>
                <li className='text-[#81312d] text-[15px] leading-[60px] border-b border-dashed border-[red] inline-block'>From wilderness and grassland to jungle and deep sea,</li>
                <li className='text-[#81312d] text-[15px] leading-[60px] border-b border-dashed border-[red] inline-block'>From wilderness and grassland to jungle and deep sea,</li>
                <li className='text-[#81312d] text-[15px] leading-[60px] border-b border-dashed border-[red] inline-block'>From wilderness and grassland to jungle and deep sea,</li>
              </ul>
              </div>
            </div>
          </div>
          <div className='relative'>
            <img src="/image/about/ping1.png" className="w-full mx-auto" alt="cat" />
            <div className='absolute left-0 right-0 top-[10%] bottom-0 px-[120px] pt-[30px] pb-[80px] text-center'>
              <div className="about-jir">
              <img src="/image/about/15758775927532waugq.png" className="w-full max-w-[120px] mx-auto mb-[30px]" alt="cat" />
              <ul className="space-y-[17px] h-[10rem] overflow-x-auto">
                <li className='text-[#81312d] text-[15px] leading-[60px] border-b border-dashed border-[red] inline-block'>From wilderness and grassland to jungle and deep sea,</li>
                <li className='text-[#81312d] text-[15px] leading-[60px] border-b border-dashed border-[red] inline-block'>From wilderness and grassland to jungle and deep sea,</li>
                <li className='text-[#81312d] text-[15px] leading-[60px] border-b border-dashed border-[red] inline-block'>From wilderness and grassland to jungle and deep sea,</li>
                <li className='text-[#81312d] text-[15px] leading-[60px] border-b border-dashed border-[red] inline-block'>From wilderness and grassland to jungle and deep sea,</li>
                <li className='text-[#81312d] text-[15px] leading-[60px] border-b border-dashed border-[red] inline-block'>From wilderness and grassland to jungle and deep sea,</li>
                <li className='text-[#81312d] text-[15px] leading-[60px] border-b border-dashed border-[red] inline-block'>From wilderness and grassland to jungle and deep sea,</li>
                <li className='text-[#81312d] text-[15px] leading-[60px] border-b border-dashed border-[red] inline-block'>From wilderness and grassland to jungle and deep sea,</li>
              </ul>
              </div>
            </div>
          </div>
          </div>

         
        </div>
        </div>
       
      </div>
      <div style={aboutBanner4}>
        <div className='kit-container'>
           <div className="text-center pt-[100px] pb-[50px]">
            <h1 className="text-6xl text-[#81312d]">recent activities</h1>
            <p className="text-lg text-[#81312d] mt-[10px]">Activities</p>
          </div>

          <div className='max-w-[1551px] h-[727px] mx-auto pb-[60px] relative pt-[20px]'>
            <img src="/image/about/phoimgabout.png" className="w-full max-w-[1551px] h-[727px] mx-auto" alt="cat" />
            <div className='absolute left-0 right-0 top-[10%] bottom-0 px-[120px] py-[80px] text-center'>
              <div className="grid grid-cols-2 items-center gap-[24px]">
                <div>
                <img src="/image/about/meet.jpg" className="rounded-[16px] border-8 border-[rgba(237,233,180,1)]" alt="cat" />
                </div>
                <div>
                  <p className='text-[#81312d] text-[24px] leading-[60px] text-left'>Awesome! Two CIPS awards go to Biruji</p>
                  <p className='text-[#81312d] text-[16px] leading-[40px] pt-[27px] text-left'>From November 20th to 23rd, the 23rd China International Pet and Aquarium Exhibition (CIPS) opened grandly. At the CIPS night and dealer forum held by it, Birugi won awards one after another. Its Kaifanle Global Food Texas Barbeque Flavor Full-price Adult Dog Food won the 2019 CIPS Great Wall Cup Innovation Award; Birugi brand won the 2019 CIPS Great Wall Cup Innovation Award. The "Annual Brand Award" fully demonstrates the brand's strength.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}
