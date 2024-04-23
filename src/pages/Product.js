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
        afterChange: current => setActiveSlide(current),
        beforeChange: (current, next) => setActiveSlide(next),
    };

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
        let newSlideIndex = 0;
        switch (tabName) {
            case 'dryFood': newSlideIndex = 0; break;
            case 'stapleFood': newSlideIndex = 1; break;
            case 'snaksFood': newSlideIndex = 2; break;
            default: newSlideIndex = 0; break;
        }
        setActiveSlide(newSlideIndex);
        sliderRef.current.slickGoTo(newSlideIndex);
    };

    const productsBanner = {
        backgroundImage: "url('/image/dynamic/proinfo.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const foodData = [
        {
            id: 467,
            product_img: "/image/prodog/snaks.png",
            product_details: "Kaifanle picks mouth full price dog food (universal for the whole term) 11",
            ageRange: "7 years and above",
            perKg: 3
        },
        {
            id: 47,
            product_img: "/image/prodog/snaks.png",
            product_details: "Kaifanle picks mouth full price dog food (universal for the whole term) 22",
            ageRange: "7 years and above",
            perKg: 3
        },
        {
            id: 47637,
            product_img: "/image/prodog/snaks.png",
            product_details: "Kaifanle picks mouth full price dog food (universal for the whole term) 33",
            ageRange: "7 years and above",
            perKg: 3
        }
    ]

    return (
        <div style={productsBanner} className='pt-[200px]'>
            <div className='kit-container'>
                {product ? (
                    <div>
                        <div className='flex justify-between items-center pb-[80px]'>
                            <div>
                                <img src='/image/dynamic/proinfog.png' alt='product' />
                                <h2 className='text-[#81312d] text-[36px] leading-[44px] pt-[11px] max-w-[626px] w-full'>
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
                        <div className='flex justify-center'>
                            <ul className='flex justify-center items-center'>
                                <li className={activeTab === 'dryFood' ? 'active' : ''} onClick={() => handleTabChange('dryFood')}>Tab One</li>
                                <li className={activeTab === 'stapleFood' ? 'active' : ''} onClick={() => handleTabChange('stapleFood')}>Tab Two</li>
                                <li className={activeTab === 'snaksFood' ? 'active' : ''} onClick={() => handleTabChange('snaksFood')}>Tab Three</li>
                            </ul>
                        </div>
                        <Slider {...settings} ref={sliderRef}>
                            {foodData.map((item, index) => (
                                <div key={item.id} className="text-center hover:-translate-y-1 transition-all duration-150 group">
                                    <img src={item.product_img} alt="Product img" />
                                    <p className="pt-[10px] text-white">{item.product_details}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                ) : (
                    <p>Product not found!</p>
                )}
            </div>
        </div>
    );
}
