import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";




export default function Footer() {
    return (
        <div className='relative'>
            
            <div className="kit-container mx-auto md:px-0 px-[20px] pt-[80px]">
                <footer className="pb-[52px] px-[20px]">
                    <div className="lg:grid grid-cols-10 gap-[60px]">
                        <div className="xl:col-span-2 col-span-4 items-center">
                            <Link href="#" className="text-[20px] text-[#5d261b] font-medium leading-[20px]">Follow Us</Link>
                            <ul class="space-y-5 pt-[24px]">

                                <li>
                                    <Link to='/' class="flex items-center space-x-3 hover:text-sky-400 transition">
                                    <FaFacebook className='text-[24px]' />
                                        <span>Facebook</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/' class="flex items-center space-x-3 hover:text-sky-400 transition">
                                    <FaInstagram className='text-[24px]' />

                                        <span>Instagram</span>
                                    </Link>
                                </li>


                                <li>
                                    <Link to='/' class="flex items-center space-x-3 hover:text-sky-400 transition">
                                    <FaTiktok className='text-[24px]' />

                                        <span>TikTok</span>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div className="xl:col-span-8 col-span-6">
                            <div className="lg:grid grid-cols-10 gap-[16px] xs:pb-0 pb-[30px]">
                                <div className="col-span-3">
                                    <Link href="#" className="text-[20px] text-[#5d261b] font-medium leading-[20px]">Brand story</Link>
                                    <ul className="space-y-[10px] pt-[25px]">
                                        <li><Link to='/about' className="text-[#5d261b] leading-[22px]">About Us</Link></li>
                                        <li><Link to='/brand' className="text-[#5d261b] leading-[22px]">Our Capacity</Link></li>
                                    </ul>
                                </div>
                                <div className="col-span-4">
                                    <Link href="#" className="text-[20px] text-[#5d261b] font-medium leading-[20px]">Learn about the product</Link>
                                    <ul className="space-y-[10px] pt-[25px]">
                                        <li><Link href="#" className="text-[#5d261b] leading-[22px]">Who are we</Link></li>
                                        <li><Link href="#" className="text-[#5d261b] leading-[22px]">Quality Commitment</Link></li>
                                    </ul>
                                </div>
                                <div className="col-span-3">
                                    <Link href="#" className="text-[20px] text-[#5d261b] font-medium leading-[20px]">Pet Care</Link>
                                    <ul className="space-y-[10px] pt-[25px]">
                                        <li><Link to='/cat' className="text-[#5d261b] leading-[22px]">Caring for cats</Link></li>
                                        <li><Link to='/dog' className="text-[#5d261b] leading-[22px]">Caring for dogs</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pt-[40px]">
                                <Link href="#" className="text-[20px] text-[#5d261b] font-700 leading-[20px]">contact us</Link>
                                <ul className="space-y-[10px]  pt-[25px]">
                                    <li><Link href="#" className="text-[#5d261b] leading-[22px]">House 25,(2nd Floor) Road #8, Block #E, Section #12 Mirpur, Pallabi, 1216, Dhaka, Bangladesh</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="border-t border-[rgb(229 229 229)] py-[42px] text-center">
                    <p className="text-[#5d261b] text-[14px] leading-[32px]">Copyright © <span>{(new Date().getFullYear())}</span> kitchenflavor. All rights reserved.</p>

                </div>
            </div>
        </div>
    )
}
