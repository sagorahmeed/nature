// Product.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import productData from '../JSON/Product.json';

const { dryFoodData, stapleFoodData, snaksFoodData } = productData;
const allProducts = [...dryFoodData, ...stapleFoodData, ...snaksFoodData];

export default function Product() {
    const { productId } = useParams();
    const product = allProducts.find(p => p.id === parseInt(productId, 10));

    const productsBanner = {
        backgroundImage: "url('/image/dynamic/proinfo.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div style={productsBanner} className='pt-[200px]'>
            <div className='kit-container'>
                {product ? (
                    <div className='flex justify-between items-center pb-[80px]'>
                        <div>
                            <img src='/image/dynamic/proinfog.png' alt='product' />
                            <h2 className='text-[#81312d] text-[36px] leading-[44px] pt-[11px] max-w-[626px] w-full'>{product.product_details}</h2>
                            <div className='mt-[73px] flex items-center gap-[10px]'>
                                <p className='text-[#81312d] text-[25px] leading-[50px]'>Specification</p>
                                <div className='relative'>
                                    <img src='/image/dynamic/1-5.png' className='rounded-full' alt="Product" />
                                    <p className='text-[#81312d] text-[24px] leading-[48px] flex absolute inset-0 mx-auto justify-center items-center'>{product.perKg}<p>KG</p></p>
                                </div>
                            </div>
                            <Link to='/prodog' class="more" className='pt-[90px] '>
                                <div class="mt-[60px] flex items-center gap-[12px] hover-text more">
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
                ) : (
                    <p>Product not found!</p>
                )}
            </div>
        </div>
    );
}
