import React, { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Slider from "react-slick";
import productData from '../JSON/Product.json';

const { dryFoodData, stapleFoodData, snaksFoodData } = productData;

export default function Product() {
    const { productId } = useParams();
    const allProducts = [...dryFoodData, ...stapleFoodData, ...snaksFoodData];
    const product = allProducts.find(p => p.id === parseInt(productId, 10));

    const [activeTab, setActiveTab] = useState('dryFood');
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: current => {
            setActiveSlide(current);
            updateTabBasedOnSlide(current);
        },
        beforeChange: (current, next) => {
            setActiveSlide(next);
            updateTabBasedOnSlide(next);
        },
    };

    const updateTabBasedOnSlide = (slideIndex) => {
        switch (slideIndex) {
            case 0: setActiveTab('dryFood'); break;
            case 1: setActiveTab('stapleFood'); break;
            case 2: setActiveTab('snaksFood'); break;
            default: setActiveTab('dryFood'); break;
        }
    };

    const handleTabChange = (tabName) => {
        const tabToIndexMap = {
            'dryFood': 0,
            'stapleFood': 1,
            'snaksFood': 2
        };
        const newSlideIndex = tabToIndexMap[tabName];
        setActiveTab(tabName);
        setActiveSlide(newSlideIndex);
        sliderRef.current.slickGoTo(newSlideIndex);
    };

    const productsBanner = {
        backgroundImage: "url('/image/dynamic/proinfo.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '259px 0px'
    };
    const sliderBg = {
        backgroundImage: "url('/image/dynamic/infobj.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '534px',
    };

    const foodData = [
        {
            id: 467,
            product_img: "/image/dynamic/1577240621653766Eien.png",
            product_details: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
        },
        {
            id: 47,
            product_img: "/image/dynamic/1577240666742899AV5S.png",
            product_details: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
        },
        {
            id: 47637,
            product_img: "/image/dynamic/15772407159881436DQU.png",
            product_details: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
        }
    ]

    return (
        <div style={productsBanner} className='pt-[200px]'>
            <div >
                {product ? (
                    <div>
                        <div className='flex justify-between items-center pb-[380px] kit-container'>
                            <div>
                                <img src='/image/dynamic/proinfog.png' alt='product' />
                                <h2 className='text-[#81312d] text-[36px] leading-[44px] max-w-[626px] w-full pt-[50px]'>
                                    {product.product_details}
                                </h2>
                                <div className='mt-[73px] flex items-center gap-[10px]'>
                                    <p className='text-[#81312d] text-[25px] leading-[50px]'>Specification</p>
                                    <div className='relative'>
                                        <img src='/image/dynamic/1-5.png' className='rounded-full' alt="Product" />
                                        <div className='text-[#81312d] text-[24px] leading-[48px] flex absolute inset-0 mx-auto justify-center items-center'>
                                            {product.perKg} KG
                                        </div>
                                    </div>
                                </div>
                                <Link to='/prodog' className='more pt-[90px]'>
                                    <div className="mt-[60px] flex items-center gap-[12px] hover-text more">
                                        <div className='relative'>
                                            <img src="/image/dynamic/hmore.png" alt="next" />
                                            <img src="/image/dynamic/a-jian.png" alt="next" className='absolute top-5 left-5 right-0 bottom-0' />
                                        </div>
                                        Read More
                                    </div>
                                </Link>
                            </div>
                            <img src={product.product_img} className='max-w-[350px] max-h-[400px]' alt="Product" />
                        </div>
                        <div className='relative pb-[200px]'>
                            <img src='/image/dynamic/xia1.png' className='absolute left-0 top-0' alt='shape'/>
                            <img src='/image/dynamic/kuai.png' className='absolute right-0 top-0' alt='shape'/>
                            <img src='/image/dynamic/infogou.png' className='absolute left-[100px] bottom-0' alt='shape'/>
                            <img src='/image/dynamic/banrou.png' className='absolute right-0 bottom-0' alt='shape'/>
                            <div className='kit-container'>
                                <div className='flex justify-center'>
                                    <ul className='flex justify-center items-center gap-[14px]'>
                                        <li className={`${activeTab === 'dryFood' ? 'active bg-white text-[#81312d] shadow-[0_3px_2px_#b9b9b9]' : 'bg-[#f89e03] shadow-[0_3px_2px_#df9412] text-white'}  px-[20px] text-[24px] leading-[42px] py-[15px] rounded-full cursor-pointer transition-all duration-200`} onClick={() => handleTabChange('dryFood')}>Adult Dog Nutrition</li>
                                        <li className={`${activeTab === 'stapleFood' ? 'active bg-white text-[#81312d] shadow-[0_3px_2px_#b9b9b9]' : 'bg-[#f89e03] shadow-[0_3px_2px_#df9412] text-white'} px-[20px]  text-[24px] leading-[42px] py-[15px] rounded-full cursor-pointer transition-all duration-200`} onClick={() => handleTabChange('stapleFood')}>Antarctic Krill Meat</li>
                                        <li className={`${activeTab === 'snaksFood' ? 'active bg-white text-[#81312d] shadow-[0_3px_2px_#b9b9b9]' : 'bg-[#f89e03] shadow-[0_3px_2px_#df9412] text-white'} px-[20px]  text-[24px] leading-[42px] py-[15px] rounded-full cursor-pointer transition-all duration-200`} onClick={() => handleTabChange('snaksFood')}>Delicious Vegetable Pieces</li>
                                    </ul>
                                </div>
                                <Slider style={sliderBg} className='max-w-[1024px] w-full max-h-[428px] h-full relative mx-auto mt-[58px]' {...settings} ref={sliderRef}>
                                    {foodData.map((item, index) => (
                                        <div key={item.id} className="text-center group max-w-[628px] mx-auto justify-center items-center p-[20px] pt-[60px] !flex">
                                            <div className=' left-0 right-0 top-0 bottom-0'>
                                                <img src={item.product_img} className='w-full' alt="Product img" />
                                                <p className="pt-[10px] text-[#81312d] text-[24px] leading-[60px] h-[12rem] overflow-auto">{item.product_details}</p>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>

                    </div>
                ) : (
                    <p>Product not found!</p>
                )}
            </div>
        </div>
    );
}
