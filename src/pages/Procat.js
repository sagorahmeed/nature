import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import procatData from '../JSON/Procat.json';
import LeftArrow from "../components/pagination/LeftArrow";
import RightArrow from "../components/pagination/RightArrow";
import PDFModal from "../components/PDFModal";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from "react-helmet";
gsap.registerPlugin(ScrollTrigger);

function Procat() {


    useEffect(() => {
        if (window.innerWidth >= 991) {
            gsap.to('.animate-elem-1', {
                y: '200%',
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

    const [activeTab, setActiveTab] = useState('tab1');
    const [activeFilter, setActiveFilter] = useState('all');
    const { dryFoodData, stapleFoodData, snaksFoodData, suppliiesData } = procatData;
    const [selectedProductId, setSelectedProductId] = useState(null);

    useEffect(() => {
        if (location.state?.tab) {
            setActiveTab(location.state.tab);
        }
    }, [location.state]);

    function filterData() {
        let data = [];
        switch (activeTab) {
            case 'tab1':
                data = dryFoodData;
                break;
            case 'tab2':
                data = stapleFoodData;
                break;
            case 'tab3':
                data = snaksFoodData;
                break;
            case 'tab4':
                data = suppliiesData;
                break;
            default:
                data = [];
                break;
        }
        if (activeFilter !== 'all') {
            data = data.filter(item => item.ageRange === activeFilter);
        }
        return data;
    }

    // const prodogBanner = {
    //     backgroundImage: "url('/image/prodog/pro-index.jpg')",
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    // }

    const prodogBanner = window.innerWidth <= 639 
    ? { backgroundColor: '#fbf4d1' } 
    : {
        backgroundImage: "url('/image/prodog/pro-index.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const settings = {
        className: "center",
        autoPlay: true,
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />,
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

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        setActiveFilter('all');
    };

    const showFilterDataInModal = (productId) => {
        const product = [...dryFoodData, ...stapleFoodData, ...snaksFoodData, ...suppliiesData].find(item => item.id === productId);
        if (product && product.pdf) {
            setSelectedProductId(product.pdf);
        } else {
            setSelectedProductId(null);
        }
    }

    const closeModal = () => {
        setSelectedProductId(null);
    }

    const filteredData = filterData();

    return (
        <>
            <Helmet>
                <title>Cat Food | Kitchen Flavor Pet Food | Bridge Pet Care products | Pet Food Manufacturer Company</title>
                <meta name="description" content="Kitchen Flavor Brand Official Website | Bridge Pet Care Products | Pet Food Manufacturer Company"/>
            </Helmet>
            <div className="relative">
                <img className='absolute right-0 top-0 xl:block hidden' src='./image/prodog/topyuan.png' alt='product' />




                <div className="2xl:block hidden">
                    <div className="absolute top-[200px] right-[20px] flex ">
                    <Link to='/cat-food'>
                            <img src="/image/dog/sm.png" className="sm:w-[100px] sm:h-[100px] w-[75px] h-[75px]" style={{transform:'rotateY(165deg)'}} alt="dog" />
                            <img src="/image/v1/cat-red.png" className="sm:w-[100px] sm:h-[100px] w-[75px] h-[75px]" alt="dog" />
                        </Link>
                        <Link to='/dog-food'>
                            <img src="/image/dog/sg.png" className="sm:w-[100px] sm:h-[100px] w-[75px] h-[75px]" style={{transform:'rotateY(170deg)'}} alt="dog" />
                            <img src="/image/v1/dog-yellow.png" className="sm:w-[100px] sm:h-[100px] w-[75px] h-[75px]" alt="dog" />
                        </Link>
                    
                    </div>
                </div>
                <div style={prodogBanner} className="2xl:pt-[200px] xl:pt-[160px] lg:pt-[120px] pt-[100px] prodog-banner">
                    <div className="2xl:hidden block pb-[60px]">
                        <div className="flex justify-center">
                        <Link to='/cat-food'>
                                <img src="/image/dog/sm.png" className="sm:w-[100px] sm:h-[100px] w-[75px] h-[75px]" style={{transform:'rotateY(165deg)'}} alt="dog" />
                                <img src="/image/v1/cat-red.png" className="sm:w-[100px] sm:h-[100px] w-[75px] h-[75px]" alt="dog" />
                            </Link>
                            <Link to='/dog-food'>
                                <img src="/image/dog/sg.png" className="sm:w-[100px] sm:h-[100px] w-[75px] h-[75px]" style={{transform:'rotateY(170deg)'}} alt="dog" />
                                <img src="/image/v1/dog-yellow.png" className="sm:w-[100px] sm:h-[100px] w-[75px] h-[75px]" alt="dog" />
                            </Link>
                           
                        </div>
                    </div>
                    <div className="max-w-[1260px] mx-auto">
                        <div className="flex flex-wrap items-center md:gap-[80px] gap-[40px] justify-center">
                            <div className="flex items-center gap-[10px] group tab-one cursor-pointer" onClick={() => handleTabClick('tab1')}>
                                <img src="/image/prodog/157588403343150moz8.png" className={` ${activeTab === 'tab1' ? 'hidden' : 'block'} sm:w-[100px] sm:h-[100px] w-[60px] h-[60px]`} alt="prodog" />
                                <img src="/image/prodog/15758841127498f4hno.png" className={` ${activeTab === 'tab1' ? 'block' : 'hidden'} sm:w-[100px] sm:h-[100px] w-[60px] h-[60px]`} alt="prodog" />
                                <div>
                                    <h3 className={` md:text-[24px] sm:text-[18px] text-[16px] md:leading-[34px] sm:leading-[28px] leading-[26px] ${activeTab === 'tab1' ? 'text-[#81312d] ' : 'text-[#555555]'}`}>Dry food</h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-[10px] group tab-two cursor-pointer" onClick={() => handleTabClick('tab2')}>
                                <img src="/image/prodog/15758844408979x6rwk.png" className={` ${activeTab === 'tab2' ? 'hidden' : 'block'} sm:w-[100px] sm:h-[100px] w-[60px] h-[60px]`} alt="prodog" />
                                <img src="/image/prodog/15758844536969vob5r.png" className={` ${activeTab === 'tab2' ? 'block' : 'hidden'} sm:w-[100px] sm:h-[100px] w-[60px] h-[60px]`} alt="prodog" />
                                <div>
                                    <h3 className={` md:text-[24px] sm:text-[18px] text-[16px] md:leading-[34px] sm:leading-[28px] leading-[26px] ${activeTab === 'tab2' ? 'text-[#81312d] ' : 'text-[#555555]'}`}>Wet food</h3>
                                </div>
                            </div>
                            {/* <div className="flex items-center gap-[10px] group tab-three cursor-pointer" onClick={() => handleTabClick('tab3')}>
                                <img src="/image/prodog/15758847337435l4t9b.png" className={` ${activeTab === 'tab3' ? 'hidden' : 'block'}`} alt="prodog" />
                                <img src="/image/prodog/15758847191871uh6zx.png" className={` ${activeTab === 'tab3' ? 'block' : 'hidden'}`} alt="prodog" />
                                <div>
                                    <h3 className={` text-[24px] leading-[30px] ${activeTab === 'tab3' ? 'text-[#81312d] ' : 'text-[#555555]'}`}>Snacks</h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-[10px] group tab-three cursor-pointer" onClick={() => handleTabClick('tab4')}>
                                <img src="/image/prodog/15758853773645bhnmc.png" className={` ${activeTab === 'tab4' ? 'hidden' : 'block'}`} alt="prodog" />
                                <img src="/image/prodog/15758852942217adca8.png" className={` ${activeTab === 'tab4' ? 'block' : 'hidden'}`} alt="prodog" />
                                <div>
                                    <h3 className={` text-[24px] leading-[30px] ${activeTab === 'tab4' ? 'text-[#81312d] ' : 'text-[#555555]'}`}>Supplies</h3>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="xl:pt-[200px] lg:pt-[120px] md:pb-[180px] pt-[60px] xl:pb-[130px] lg:pb-[100px] pb-[20px] scroll-section-1">
                        <img className="animate-elem-1 absolute top-[200px] left-0 flex 2xl:block hidden" src="/image/prodog/progou.png" alt="dog" />
                        <div className="kit-container">
                            <div className="slider-container sm:block hidden">
                                {filteredData.length > 0 ? (
                                    <Slider key={activeFilter} {...settings}>
                                        {filteredData.map((item) => (
                                            <div key={item.id} className="text-center hover:-translate-y-1 pb-[100px] transition-all duration-150 group">
                                                <div onClick={() => showFilterDataInModal(item.id)} className="cursor-pointer">
                                                    <img src={item.product_img} alt="Product img" className="max-w-[305px] max-h-[300px] mx-auto" />
                                                    <p className="pt-[10px] text-white max-w-[350px] mx-auto">{item.product_details}</p>
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
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                ) : (
                                    <p className="text-center pb-[500px] pt-[100px] text-2xl text-black">No Product Found</p>
                                )}
                            </div>

                            <div className="slider-container sm:hidden block">
                                {filteredData.length > 0 ? (
                                   <div className="grid grid-cols-2">
                                    {filteredData.map((item) => (
                                            <div key={item.id} className=" text-center hover:-translate-y-1 sm:pb-[100px] pb-[60px] transition-all duration-150 group">
                                                <div onClick={() => showFilterDataInModal(item.id)} className="cursor-pointer">
                                                    <img src={item.product_img} alt="Product img" className="sm:max-w-[305px] max-w-[180px] sm:max-h-[300px] max-h-[180px] mx-auto" />
                                                    <p className="pt-[10px] sm:text-white text-[#81312d] max-w-[350px] mx-auto">{item.product_details}</p>
                                                    <div className="flex justify-center sm:pt-[40px] pt-[24px]">
                                                        <div className="relative inline-block group-hover:hidden transition-all duration-150">
                                                            <img src="/image/prodog/hmore2.png" className="sm:w-[52px] sm:h-[52px] w-[46px] h-[46px]" alt="pro" />
                                                            <div className="justify-center items-center">
                                                                <img src="/image/prodog/a-jian.png" className="absolute sm:left-5 left-4 right-0 top-5 bottom-0 sm:w-[20px] w-[16px]" alt="pro" />
                                                            </div>
                                                        </div>
                                                        <div className="relative inline-block hidden group-hover:block transition-all duration-150">
                                                            <img src="/image/prodog/bmore.png" className="sm:w-[52px] sm:h-[52px] w-[46px] h-[46px]" alt="pro" />
                                                            <div className="justify-center items-center">
                                                                <img src="/image/prodog/r-jian.png" className="absolute sm:left-5 left-4 right-0 top-5 bottom-0 sm:w-[20px] w-[16px]" alt="pro" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                   </div>
                                ) : (
                                    <p className="text-center pb-[500px] pt-[100px] text-2xl text-black">No Product Found</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {selectedProductId && (
                <PDFModal
                    isOpen={selectedProductId}
                    onRequestClose={closeModal}
                    pdfUrl={selectedProductId}
                />
            )}
        </>
    )
}

export default Procat;
