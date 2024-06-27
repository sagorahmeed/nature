// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import productData from '../JSON/Product.json';
// import LeftArrow from "../components/pagination/LeftArrow";
// import RightArrow from "../components/pagination/RightArrow";
// import Slider from "react-slick/lib/slider";

// const { dryFoodData, stapleFoodData, snaksFoodData } = productData;

// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }

// const heroBgImage = {
//     backgroundImage: "url('/image/prodog/pro-index.jpg')",
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     width: '100%',
// }



// const settings = {
//     className: "center",
//     autoPlay: true,
//     infinite: false,
//     centerPadding: "60px",
//     slidesToShow: 4,
//     swipeToSlide: true,
//     nextArrow: <LeftArrow />,
//     prevArrow: <RightArrow />,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 4,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2,
//                 initialSlide: 2
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// };


// const Result = () => {
//     const query = useQuery();
//     const searchQuery = query.get('query');

//     const allProducts = [...dryFoodData, ...stapleFoodData, ...snaksFoodData];

//     const filteredProducts = allProducts.filter(product =>
//         product.product_details.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     return (
//         <>
//             <div style={heroBgImage} className=''>
//                 <div className='kit-container'>
//                     <div className='py-[370px] text-center'>
//                         <h1>Search Results for "{searchQuery}"</h1>
//                         {filteredProducts.length > 0 ? (
//                             <div>

//                                 {/* <ul>
//                                     {filteredProducts.map(product => (
//                                         <li key={product.id}>
//                                             <img src={product.product_img} alt={product.product_details} />
//                                             <p>{product.product_details}</p>
//                                             <p>Age Range: {product.ageRange}</p>
//                                             <p>Price per Kg: {product.perKg}</p>
//                                         </li>
//                                     ))}
//                                 </ul> */}
//                                 <Slider {...settings}>
//                                     {filteredProducts().map((item) => (
//                                         <div key={item.id} className="text-center hover:-translate-y-1 transition-all duration-150 group">
//                                             <Link to={`/Product/${item.id}`} onClick={(e) => e.stopPropagation()}>
//                                                 <img src={item.product_img} alt="Product img" />
//                                                 <p className="pt-[10px] text-white">{item.product_details}</p>
//                                                 <div className="flex justify-center pt-[40px]">
//                                                     <div className="relative inline-block group-hover:hidden transition-all duration-150">
//                                                         <img src="/image/prodog/hmore2.png" alt="pro" />
//                                                         <div className="justify-center items-center">
//                                                             <img src="/image/prodog/a-jian.png" className="absolute left-5 right-0 top-5 bottom-0" alt="pro" />
//                                                         </div>
//                                                     </div>
//                                                     <div className="relative inline-block hidden group-hover:block transition-all duration-150">
//                                                         <img src="/image/prodog/bmore.png" alt="pro" />
//                                                         <div className="justify-center items-center">
//                                                             <img src="/image/prodog/r-jian.png" className="absolute left-5 right-0 top-5 bottom-0" alt="pro" />
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </Link>
//                                         </div>
//                                     ))}
//                                 </Slider>
//                             </div>


//                         ) : (
//                             <p className='pb-[400px] pt-[100px]'>No Related Products</p>
//                         )}
//                     </div>

//                 </div>

//             </div>
//         </>
//     );
// }

// export default Result

// // pro-index.jpg



import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import productData from '../JSON/Product.json';
import LeftArrow from "../components/pagination/LeftArrow";
import RightArrow from "../components/pagination/RightArrow";
import Slider from "react-slick";

const { dryFoodData, stapleFoodData, snaksFoodData } = productData;

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const heroBgImage = {
    backgroundImage: "url('/image/prodog/pro-index.jpg')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
};

const settings = {
    className: "center",
    autoplay: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const Result = () => {
    const query = useQuery();
    const searchQuery = query.get('query');

    const allProducts = [...dryFoodData, ...stapleFoodData, ...snaksFoodData];

    const filteredProducts = allProducts.filter(product =>
        product.product_details.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={heroBgImage} className='relative'>
            <img src='/image/spape.png' alt='shape' className='w-[170px] h-[72px] absolute right-[3%] top-[20%]'/>
            <img src='/image/rou.png' alt='shape' className='w-[100px] h-[90px] absolute bottom-[15%] left-[7%]'/>
            <img src='/image/prodog/progou.png' className='w-[170px] h-[146px] absolute left-0 top-[10%]' alt='shape'/>
            <div className='kit-container'>
                <div className='py-[370px] text-center'>
                    <h1>Search Results for "{searchQuery}"</h1>
                    {filteredProducts.length > 0 ? (
                        <div className={`${filteredProducts.length && 'pt-[100px]'}`}>
                            <Slider {...settings}>
                                {filteredProducts.map((item) => (
                                    <div key={item.id} className="text-center hover:-translate-y-1 transition-all duration-150 group">
                                        <Link to={`/Product/${item.id}`} onClick={(e) => e.stopPropagation()}>
                                            <img src={item.product_img} alt="Product img" />
                                            <p className="pt-[10px] text-white">{item.product_details}</p>
                                            <div className="flex justify-center pt-[40px]">
                                                <div className="relative inline-block group-hover:hidden transition-all duration-150">
                                                    <img src="/image/prodog/hmore2.png" alt="pro" />
                                                    <div className="justify-center items-center">
                                                        <img src="/image/prodog/a-jian.png" className="absolute left-5 right-0 top-5 bottom-0" alt="pro" />
                                                    </div>
                                                </div>
                                                <div className="relative inline-block hidden group-hover:block transition-all duration-150">
                                                    <img src="/image/prodog/bmore.png" alt="pro" />
                                                    <div className="justify-center items-center">
                                                        <img src="/image/prodog/r-jian.png" className="absolute left-5 right-0 top-5 bottom-0" alt="pro" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    ) : (
                        <p className='pb-[400px] pt-[100px]'>No Related Products</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Result;
