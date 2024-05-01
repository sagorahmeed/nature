import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className='relative'>
            <img src='/image/top.png' alt='top' onClick={scrollToTop} className='absolute right-[100px] top-[60px] top-keyframe cursor-pointer' />
            <div className="kit-container mx-auto md:px-0 px-[20px] pt-[80px]">
                <footer className="pb-[52px] px-[20px]">
                    <div className="lg:grid grid-cols-10 gap-[60px]">
                        <div className="xl:col-span-2 col-span-4 items-center">
                            <div className="flex items-center gap-[13px] sm:pb-0 pb-[60px]">
                                <div className="text-center">
                                    <img src="/image/qr.png" className="max-w-[115px] mx-auto" alt="scan qr code" />
                                    <p className="text-[#5d261b] text-[15px] leading-[30px]">Kaifanle official Weibo</p>
                                </div>
                                <div className="text-center">
                                    <img src="/image/qr-2.png" alt="scan qr code" className="max-w-[115px] mx-auto" />
                                    <p className="text-[#5d261b] text-[15px] leading-[30px]">Kaifanle official WeChat</p>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-8 col-span-6">
                            <div className="lg:grid grid-cols-10 gap-[16px] xs:pb-0 pb-[30px]">
                                <div className="col-span-3">
                                    <Link href="#" className="text-[20px] text-[#5d261b] font-700 leading-[20px]">Brand story</Link>
                                    <ul className="space-y-[10px] pt-[25px]">
                                        <li><Link href="#" className="text-[#5d261b] leading-[22px]">Who are we</Link></li>
                                        <li><Link href="#" className="text-[#5d261b] leading-[22px]">Quality Commitment</Link></li>
                                    </ul>
                                </div>
                                <div className="col-span-4">
                                    <Link href="#" className="text-[20px] text-[#5d261b] font-700 leading-[20px]">Learn about the product</Link>
                                    <ul className="space-y-[10px] pt-[25px]">
                                        <li><Link href="#" className="text-[#5d261b] leading-[22px]">Who are we</Link></li>
                                        <li><Link href="#" className="text-[#5d261b] leading-[22px]">Quality Commitment</Link></li>
                                    </ul>
                                </div>
                                <div className="col-span-3">
                                    <Link href="#" className="text-[20px] text-[#5d261b] font-700 leading-[20px]">Brand story</Link>
                                    <ul className="space-y-[10px] pt-[25px]">
                                        <li><Link href="#" className="text-[#5d261b] leading-[22px]">Love and care</Link></li>
                                        <li><Link href="#" className="text-[#5d261b] leading-[22px]">Quality Commitment</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pt-[40px]">
                                <Link href="#" className="text-[20px] text-[#5d261b] font-700 leading-[20px]">contact us</Link>
                                <ul className="space-y-[10px]  pt-[25px]">
                                    <li><Link href="#" className="text-[#5d261b] leading-[22px]">Shanghai Headquarters: No. 5, Lane 268, Taihong Road, Hongqiao Business District, Shanghai</Link></li>
                                    <li><Link href="#" className="text-[#5d261b] leading-[22px]">Consumer & cooperation hotline: 400-7797-917</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="border-t border-[rgb(229 229 229)] py-[42px] text-center">
                    <p className="text-[#5d261b] text-[14px] leading-[32px]">Copyright © 2019 Shanghai Biruji Pet Products Co., Ltd. All rights reserved.Shanghai<a href="#" className="text-[#5d261b] leading-[22px]">ICP No. 10214492-8 </a></p>
                    <p className="text-[#5d261b] text-[14px] leading-[32px]"><Link href="#" className="text-[#5d261b] leading-[22px] pt-[16px]">Website construction: Bocai Network </Link></p>
                </div>
            </div>
        </div>
    )
}
