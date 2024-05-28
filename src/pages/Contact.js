import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import DecorativeHeader from '../components/DecorativeHeader'
import AOS from 'aos';
import { useEffect } from "react";
export default function Contact() {
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
    return (
        <>
            <div className='bg-[#fbf4d1] py-[82px] pt-[300px] relative'>
                <img src='/image/contact/fly-cat.png' alt='map' className='absolute right-[2%] top-[15%]' />

                <div className='kit-container mx-auto'>
                    <DecorativeHeader title="Contact Information" subtitle="Contact" data-aos="zoom-in-up" />
                    <div className='pt-[31px]'>
                        <div className='lg:grid grid-cols-7 gap-[60px] items-center flex-col' data-aos="fade-up">
                            <div className='w-full h-full relative col-span-4 lg:pb-0 pb-[100px]'>
                                <img src='/image/contact/ma-img.png' alt='map' />
                            </div>
                            <div className='col-span-3'>
                                <div className='border border-[#e3cdb0] sm:pl-[66px] sm:pt-[85px] sm:pr-[55px] sm:pb-[47px] p-[30px] rounded-[10px] relative'>
                                    <div className='flex justify-center'>

                                        <img src='/image/contact/logo-shape-012.png' className='mx-auto absolute top-[-40px]' alt='icon' />
                                    </div>
                                    <p className='text-[#81312d] text-[18px] leading-[28px] pt-[10px]'>House 25,(2nd Floor) Road #8, Block #E, Section #12 Mirpur, Pallabi, 1216, Dhaka, Bangladesh</p>
                                    <p className='text-[#81312d] text-[18px] leading-[28px] pt-[10px]'>Factory address: No. 9, Jialingjiang Road, Qinghe Subdistrict Office, Cao County, Heze City, Shandong Province</p>
                                    {/* <p className='text-[#81312d] text-[18px] leading-[28px] pt-[25px]'>You can find us here</p> */}
                                    <div className='max-w-[100%] pt-[30px]'>
                                        <div className='pt-[16px] gap-[36px]'>
                                            <div className="">
                                                <Link href="#" className="text-[20px] text-[#5d261b] font-medium leading-[20px]">Follow Us</Link>
                                                <ul class="flex pt-[24px] justify-between w-full">

                                                    <li>
                                                        <Link to='/' class="flex items-center space-x-3 hover:text-sky-400 transition">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5" viewBox="0 0 16 16">
                                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                            </svg>
                                                            <span>Facebook</span>
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link to='/' class="flex items-center space-x-3 hover:text-sky-400 transition">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5" viewBox="0 0 16 16">
                                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                                            </svg>
                                                            <span>Instagram</span>
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link to='/' class="flex items-center space-x-3 hover:text-sky-400 transition">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5" viewBox="0 0 16 16">
                                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                                            </svg>
                                                            <span>TikTok</span>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-[61px] relative pt-[120px]'>
                        <div>
                            <DecorativeHeader title='Other brands' subtitle='About kitchen flavor' color='#81312d' dotBgColor='#81312d' />

                        </div>
                        <div className='pt-[60px]'>
                            <div className='kit-container'>
                                <div className='lg:grid grid-cols-2 gap-[38px]' data-aos="fade-up">


                                    <div className='relative overflow-hidden' data-aos="fade-up">
                                        <img src="/image/about/ping1.png" className="w-full mx-auto" alt="cat" />
                                        <div className='absolute left-0 right-0 top-[20%] bottom-0 sm:px-[50px] px-[30px] pt-[30px] pb-[80px] text-center'>
                                            <div className="about-jir">
                                                <div className='flex justify-between'>
                                                    <img src="/image/about/15758775305083sfdgm.png" className="w-full sm:max-w-[120px] max-w-[80px] mx-auto mb-[30px]" alt="cat" />
                                                    <img src="/image/about/15758775305083sfdgm.png" className="w-full sm:max-w-[120px] max-w-[80px] mx-auto mb-[30px]" alt="cat" />
                                                </div>
                                                <img src="/image/about/15758775305083sfdgm.png" className="w-full sm:max-w-[120px] max-w-[80px] mx-auto pt-[50px]" alt="cat" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='relative overflow-hidden' data-aos="fade-up">
                                        <img src="/image/about/ping1.png" className="w-full mx-auto" alt="cat" />
                                        <div className='absolute left-0 right-0 top-[10%] bottom-0 sm:px-[120px] px-[30px] pt-[30px] pb-[80px] text-center'>
                                            <div className="about-jir">


                                                <div className='flex justify-between'>
                                                    <img src="/image/about/15758775927532waugq.png" className="w-full sm:max-w-[120px] max-w-[80px] mx-auto mb-[30px]" alt="cat" />
                                                    <img src="/image/about/15758775927532waugq.png" className="w-full sm:max-w-[120px] max-w-[80px] mx-auto mb-[30px]" alt="cat" />
                                                </div>
                                                <img src="/image/about/15758775927532waugq.png" className="w-full sm:max-w-[120px] max-w-[80px] mx-auto pt-[80px]" alt="cat" />
                                            </div>
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