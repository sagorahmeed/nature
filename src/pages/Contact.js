import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <>
            <div className='bg-[#fbf4d1] py-[82px] pt-[300px] relative'>
                <img src='/image/contact/fly-cat.png' alt='map' className='absolute right-[2%] top-[15%]' />

                <div className=' max-w-[1360px] mx-auto'>
                    <div className="text-center">
                        <div className='max-w-[700px] mx-auto'>
                            <div className='flex items-center justify-between'>
                                <div className='flex gap-[6px]'>
                                    <div className='w-[4px] h-[4px] rounded-[999px] bg-[#81312d]'></div>
                                    <div className='w-[4px] h-[4px] rounded-[999px] bg-[#81312d]'></div>
                                    <div className='w-[4px] h-[4px] rounded-[999px] bg-[#81312d]'></div>
                                    <div className='w-[4px] h-[4px] rounded-[999px] bg-[#81312d]'></div>
                                    <div className='w-[4px] h-[4px] rounded-[999px] bg-[#81312d]'></div>
                                    <div className='w-[4px] h-[4px] rounded-[999px] bg-[#81312d]'></div>
                                    <div className='w-[4px] h-[4px] rounded-[999px] bg-[#81312d]'></div>
                                    <div className='w-[4px] h-[4px] rounded-[999px] bg-[#81312d]'></div>
                                </div>
                                <h1 className="text-4xl text-[#81312d]">
                                    Contact information</h1>
                                <div className='flex gap-[6px]'>
                                    <div className='w-[4px] h-[4px] rounded-[999px] bg-[#81312d]'></div>
                                    <div className='w-[4px] h-[4px] rounded-[999px] bg-[#81312d]'></div>
                                    <div className='w-[4px] h-[4px] rounded-[999px] bg-[#81312d]'></div>
                                    <div className='w-[4px] h-[4px] rounded-[999px] bg-[#81312d]'></div>
                                    <div className='w-[4px] h-[4px] rounded-[999px] bg-[#81312d]'></div>
                                    <div className='w-[4px] h-[4px] rounded-[999px] bg-[#81312d]'></div>
                                    <div className='w-[4px] h-[4px] rounded-[999px] bg-[#81312d]'></div>
                                    <div className='w-[4px] h-[4px] rounded-[999px] bg-[#81312d]'></div>
                                </div>
                            </div>
                        </div>
                        <p className="text-lg text-[#81312d] mt-[10px]">Contact</p>
                    </div>
                    <div className='pt-[31px]'>
                        <div className='md:grid grid-cols-7 gap-[60px] items-center'>
                            <div className='w-full h-full relative col-span-4'>
                                <img src='/image/contact/ma-img.png' alt='map' />
                            </div>
                            <div className='col-span-3'>
                                <div className='border border-[#e3cdb0] pl-[66px] pt-[85px] pr-[55px] pb-[47px] rounded-[10px] relative'>
                                    <div className='flex justify-center'>

                                        <img src='/image/contact/logo-shape-012.png' className='mx-auto absolute top-[-40px]' alt='icon' />
                                    </div>
                                    <p className='text-[#81312d] text-[18px] leading-[28px]'>Consumer & cooperation hotline: <span className='text-[#81312d] text-[30px] leading-[48px]'>400-7797-917</span></p>
                                    <p className='text-[#81312d] text-[18px] leading-[28px] pt-[10px]'>Company Headquarters: No. 5, Lane 268, Taihong Road, Hongqiao Business District, Shanghai</p>
                                    <p className='text-[#81312d] text-[18px] leading-[28px] pt-[10px]'>Factory address: No. 9, Jialingjiang Road, Qinghe Subdistrict Office, Cao County, Heze City, Shandong Province</p>
                                    <p className='text-[#81312d] text-[18px] leading-[28px] pt-[25px]'>You can find us here</p>
                                    <div className='max-w-[450px]'>
                                        <input className='bg-transparent border w-full border-[#81312d] rounded-[6px] text-[#81312d] focus:outline-none mt-[15px] px-[10px] h-[36px] placeholder:text-[#81312d]' placeholder='Search here' />
                                        <div className='pt-[16px] grid grid-cols-4 gap-[36px]'>
                                            <div className='text-center cursor-pointer relative group'>
                                                <div className='bg-[#81312d] w-[60px] mx-auto h-[60px] rounded-[10px] mb-[.1rem] flex justify-center items-center'>
                                                    <img src='/image/contact/15759476744854fe2yz.png' alt='icon' />
                                                </div>
                                                <p className='text-[#81312d] leading-[25px] text-[16px]'>Kaifanle</p>
                                                <p className='text-[#81312d] leading-[25px] text-[16px]'>official WeChat</p>
                                                <div className='absolute transform translate-y-0 opacity-0 group-hover:block group-hover:-translate-y-7 group-hover:opacity-100 transition-all duration-200 ease-linear'>
                                                    <img src='/image/contact/qr.png' alt='icon' />
                                                </div>
                                            </div>
                                            <div className='text-center cursor-pointer relative group'>
                                                <div className='bg-[#81312d] w-[60px] mx-auto h-[60px] rounded-[10px] mb-[.1rem] flex justify-center items-center'>
                                                    <img src='/image/contact/15759477170441cqy5d.png' alt='icon' />
                                                </div>
                                                <p className='text-[#81312d] leading-[25px] text-[16px]'>Kaifanle</p>
                                                <p className='text-[#81312d] leading-[25px] text-[16px]'>official WeChat
                                                </p>
                                                <div className='absolute transform translate-y-0 opacity-0 group-hover:block group-hover:-translate-y-7 group-hover:opacity-100 transition-all duration-200 ease-linear'>
                                                    <img src='/image/contact/qr.png' alt='icon' />
                                                </div>
                                            </div>
                                            <div className='text-center cursor-pointer'>
                                                <div className='bg-[#81312d] w-[60px] mx-auto h-[60px] rounded-[10px] mb-[.1rem] flex justify-center items-center'>
                                                    <img src='/image/contact/15759477614497b7enw.png' alt='icon' />
                                                </div>
                                                <p className='text-[#81312d] leading-[25px] text-[16px]'>Kaifanle</p>
                                                <p className='text-[#81312d] leading-[25px] text-[16px]'>official WeChat								</p>

                                            </div>
                                            <div className='text-center cursor-pointer'>
                                                <div className='bg-[#81312d] w-[60px] mx-auto h-[60px] rounded-[10px] mb-[.1rem] flex justify-center items-center'>
                                                    <img src='/image/contact/15759477693322m7gvy.png' alt='icon' />
                                                </div>
                                                <p className='text-[#81312d] leading-[25px] text-[16px]'>Kaifanle</p>
                                                <p className='text-[#81312d] leading-[25px] text-[16px]'>official WeChat								</p>
                                            </div>
                                        </div>
                                        <div className='pt-[40px] flex justify-center gap-[10px]'>
                                            <img src='/image/contact/hand-icon.png' alt='icon' />
                                            <p className='text-[#81312d] leading-[25px] text-[15px]'>Click to learn more</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pt-[31px]'>
                        <div className='md:grid grid-cols-8 gap-[60px] items-center'>
                            <div className='w-full h-full relative col-span-4'>
                                <div className='border border-[#e3cdb0] pl-[76px] p-[30px] pt-[50px] rounded-[10px] relative'>
                                    <div className='flex justify-center'>
                                        <img src='/image/contact/fly-dog.png' className='mx-auto absolute w-[140px] top-[-70px]' alt='icon' />
                                    </div>
                                    <ul className='space-y-[20px]'>
                                        <li className='text-[#81312d] leading-[25px] text-[13px]'>Kaifanle has a complete online business system. Currently, there are brand flagship stores on many e-commerce platforms such as Tmall, JD.com and Pinduoduo.</li>
                                        <li className='text-[#81312d] leading-[25px] text-[13px]'>In order to promote the healthy development of the market, Kaifanle has established a complete e-commerce distribution system. At the same time, it provides promotion plans for main products and support policies for popular products based on the business formats and product structures of different distribution customers. For new customers and small customers, Kaifanle provides an easy business model of drop shipping. You can enjoy brand traffic dividends with zero investment and no threshold, making business simpler and easier.</li>

                                    </ul>
                                    <h2 className='text-[#81312d] text-[14px] font-700 leading-[36px] pt-[46px]'>E-commerce strategic cooperation: Mr. Hong 13916256659

                                    </h2>
                                </div>
                            </div>
                            <div className='col-span-4'>
                                <div className='border border-[#e3cdb0] pl-[76px] pt-[85px] pr-[65px] pb-[47px] rounded-[10px] relative'>
                                    <img src='/image/contact/shape-011.png' className='mx-auto bg-[#fbf4d1] absolute w-[140px] top-[-40px] left-[80px]' alt='icon' />
                                    <img src='/image/contact/shape-012.png' className='mx-auto bg-[#fbf4d1] absolute w-[140px] top-[-40px] right-[80px]' alt='icon' />

                                    <div className='pt-[16px] grid grid-cols-2 gap-[36px]'>
                                        <div className='flex items-center'>
                                            <Link to='/'>
                                                <div className='text-center'>
                                                    <div className='bg-[#81312d] w-[60px] h-[60px] mx-auto rounded-[10px] mb-[.1rem] flex justify-center items-center'>
                                                        <img src='/image/contact/15759476744854fe2yz.png' className='mx-auto' alt='icon' />
                                                    </div>
                                                    <p className='text-[#81312d] leading-[25px] text-[13px]'>Kaifanle</p>
                                                    <p className='text-[#81312d] leading-[25px] text-[13px]'>official WeChat								</p>
                                                </div>
                                            </Link>
                                            <Link to='/'>

                                                <div className='text-center'>
                                                    <div className='bg-[#81312d] w-[60px] h-[60px] mx-auto rounded-[10px] mb-[.1rem] flex justify-center items-center'>
                                                        <img src='/image/contact/15759477170441cqy5d.png' alt='icon' />
                                                    </div>
                                                    <p className='text-[#81312d] leading-[25px] mx-auto text-[13px]'>Kaifanle</p>
                                                    <p className='text-[#81312d] leading-[25px] text-[13px]'>official WeChat								</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='flex items-center'>
                                            <Link to='/'>

                                                <div className='text-center'>
                                                    <div className='bg-[#81312d] w-[60px] h-[60px] mx-auto rounded-[10px] mb-[.1rem] flex justify-center items-center'>
                                                        <img src='/image/contact/15759477614497b7enw.png' alt='icon' />
                                                    </div>
                                                    <p className='text-[#81312d] leading-[25px] text-[13px]'>Kaifanle</p>
                                                    <p className='text-[#81312d] leading-[25px] text-[13px]'>official WeChat								</p>
                                                </div>
                                            </Link>
                                            <Link to='/'>

                                                <div className='text-center'>
                                                    <div className='bg-[#81312d] w-[60px] h-[60px] mx-auto rounded-[10px] mb-[.1rem] flex justify-center items-center'>
                                                        <img src='/image/contact/15759477693322m7gvy.png' alt='icon' />
                                                    </div>
                                                    <p className='text-[#81312d] leading-[25px] text-[13px]'>Kaifanle</p>
                                                    <p className='text-[#81312d] leading-[25px] text-[13px]'>official WeChat								</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}