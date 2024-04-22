import React from 'react'

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
            <div className="max-w-[1440px] mx-auto md:px-0 px-[20px] pt-[80px]">
                <footer className="pb-[52px]">
                    <div className="grid grid-cols-10 gap-[60px]">
                        <div className="col-span-2 items-center">
                            <div className="flex items-center gap-[13px]">
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
                        <div className="col-span-8">
                            <div className="grid grid-cols-10">
                                <div className="col-span-3">
                                    <a href="#" className="text-[20px] text-[#5d261b] font-700 leading-[20px]">Brand story</a>
                                    <ul className="space-y-[10px] pt-[25px]">
                                        <li><a href="#" className="text-[#5d261b] leading-[22px]">Who are we</a></li>
                                        <li><a href="#" className="text-[#5d261b] leading-[22px]">Quality Commitment</a></li>
                                    </ul>
                                </div>
                                <div className="col-span-4">
                                    <a href="#" className="text-[20px] text-[#5d261b] font-700 leading-[20px]">Learn about the product</a>
                                    <ul className="space-y-[10px] pt-[25px]">
                                        <li><a href="#" className="text-[#5d261b] leading-[22px]">Who are we</a></li>
                                        <li><a href="#" className="text-[#5d261b] leading-[22px]">Quality Commitment</a></li>
                                    </ul>
                                </div>
                                <div className="col-span-3">
                                    <a href="#" className="text-[20px] text-[#5d261b] font-700 leading-[20px]">Brand story</a>
                                    <ul className="space-y-[10px] pt-[25px]">
                                        <li><a href="#" className="text-[#5d261b] leading-[22px]">Love and care</a></li>
                                        <li><a href="#" className="text-[#5d261b] leading-[22px]">Quality Commitment</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pt-[40px]">
                                <a href="#" className="text-[20px] text-[#5d261b] font-700 leading-[20px]">contact us</a>
                                <ul className="space-y-[10px]  pt-[25px]">
                                    <li><a href="#" className="text-[#5d261b] leading-[22px]">Shanghai Headquarters: No. 5, Lane 268, Taihong Road, Hongqiao Business District, Shanghai</a></li>
                                    <li><a href="#" className="text-[#5d261b] leading-[22px]">Consumer & cooperation hotline: 400-7797-917</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="border-t border-[rgb(229 229 229)] py-[42px] text-center">
                    <p className="text-[#5d261b] text-[14px] leading-[32px]">Copyright © 2019 Shanghai Biruji Pet Products Co., Ltd. All rights reserved.Shanghai<a href="#" className="text-[#5d261b] leading-[22px]">ICP No. 10214492-8 </a></p>
                    <p className="text-[#5d261b] text-[14px] leading-[32px]"><a href="#" className="text-[#5d261b] leading-[22px] pt-[16px]">Website construction: Bocai Network </a></p>
                </div>
            </div>
        </div>
    )
}
