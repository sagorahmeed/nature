import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import DecorativeHeader from '../components/DecorativeHeader'
import AOS from 'aos';
import { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet';
gsap.registerPlugin(ScrollTrigger);
export default function Contact() {


    useEffect(() => {
        if (window.innerWidth >= 991) {
            gsap.to('.animate-elem-1', {
                x: '-200%',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.scroll-section-1',
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
    return (
        <>
            <Helmet>
                <title>Contact | Kitchen Flavor</title>
                <meta name="description" content="Kitchen Flavor Brand Official Website | Bridge Pet Care Products | Pet Food Manufacturer Company" />
            </Helmet>
            <div className='bg-[#fbf4d1] py-[82px] lg:pt-[300px] pt-[150px] scroll-section-1 relative'>
                <img src='/image/contact/fly-cat.png' alt='map' className='absolute right-[2%] top-[15%] lg:block hidden animate-elem-1' />

                <div className='kit-container mx-auto'>
                    <DecorativeHeader title='Contact Information' subtitle='About kitchen flavor' color='#81312d' dotBgColor='#81312d' />
                    <div className='sm:pt-[121px] pt-[70px]'>
                        <div className='lg:grid grid-cols-7 gap-[60px] items-center flex-col' data-aos="fade-up">
                            <div className='w-full h-full relative col-span-4 lg:pb-0 pb-[100px]'>
                                <Link target='_blank' to='https://www.google.com/maps/place/3simpex/@23.8246462,90.3735552,21z/data=!4m6!3m5!1s0x3755c130d62b8ddb:0xc76cb7665e147701!8m2!3d23.8247715!4d90.3735034!16s%2Fg%2F11pdr7h1mj?entry=tts&g_ep=EgoyMDI0MDYwOS4wKgBIAVAD'>
                                    <img src='/image/Map.png' alt='map' />
                                </Link>
                            </div>
                            <div className='col-span-3'>
                                <div className='border border-[#e3cdb0] sm:pl-[66px] sm:pt-[85px] sm:pr-[55px] sm:pb-[47px] p-[24px] rounded-[10px] relative'>
                                    <div className='flex justify-center'>

                                        <img src='/image/v1/logo.png' className='mx-auto absolute top-[-40px] sm:max-w-[140px] max-w-[100px] h-auto' alt='icon' />
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
                                                        <Link to='https://facebook.com/kitchenflavorbd' class="flex items-center space-x-3 hover:text-[#3b5998] transition">
                                                            <FaFacebook className='text-[24px]' />
                                                            <span>Facebook</span>
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link to='https://instagram.com/kitchenflavorbd' class="flex items-center space-x-3 hover:text-[#c32aa3] transition">
                                                            <FaInstagram className='text-[24px]' />

                                                            <span>Instagram</span>
                                                        </Link>
                                                    </li>


                                                    <li>
                                                        <Link to='https://tiktok.com/@kitchenflavorbd' class="flex items-center space-x-3 hover:text-[#010101] transition">
                                                            <FaTiktok className='text-[24px]' />

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
                                <div className='sm:grid grid-cols-2 gap-[38px]' data-aos="fade-up">
                                    <div className='relative' data-aos="fade-up">
                                        <img src="/image/about/ping1.png" className="w-full mx-auto" alt="cat" />

                                        <div className='absolute left-0 right-0 top-0 bottom-0 text-center flex justify-center items-center h-full'>
                                            <Link to='https://www.vigornsage.com/'>
                                                <img src="/image/v1/about/other-brands-1.png" className="w-full 2xl:max-w-[320px] md:max-w-[200px] max-w-[150px] mx-auto rounded-2xl" alt="cat" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='relative ' data-aos="fade-up">
                                        <img src="/image/about/ping1.png" className="w-full mx-auto" alt="cat" />
                                        <div className='absolute left-0 right-0 top-0 bottom-0 text-center flex justify-center items-center h-full'>
                                            <Link to='https://naturebridge.eu/'>
                                                <img src="/image/about/Nature Bridge Logo.png" className="w-full 2xl:max-w-[320px] md:max-w-[200px] max-w-[150px] mx-auto rounded-2xl" alt="cat" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img src='./image/footer-wave.jpg' className='w-full absolute bottom-0' alt='footer' />
            </div>
        </>
    )
}