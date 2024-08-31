import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import productData from '../JSON/Product.json';
import LeftArrow from "../components/pagination/LeftArrow";
import RightArrow from "../components/pagination/RightArrow";
import PDFModal from "../components/PDFModal";
import { Helmet } from "react-helmet";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Prodog() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('tab1');
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedProductId, setSelectedProductId] = useState(null);
    const { dryFoodData, stapleFoodData, snaksFoodData } = productData;

    useEffect(() => {
        if (location.state?.tab) {
            setActiveTab(location.state.tab);
        }
    }, [location.state]);

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
            default:
                data = [];
                break;
        }
        if (activeFilter !== 'all') {
            data = data.filter(item => item.ageRange === activeFilter);
        }
        return data;
    }

    const prodogBanner = {
        backgroundImage: "url('/image/prodog/pro-index.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

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
        const product = [...dryFoodData, ...stapleFoodData, ...snaksFoodData].find(item => item.id === productId);
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
                <title>Dog Food | Kitchen Flavor</title>
                <meta name="description" content="Kitchen Flavor Brand Official Website | Bridge Pet Care Products | Pet Food Manufacturer Company"/>
            </Helmet>
            <div className="scroll-section-1 relative">
                <div className="lg:block hidden">
                    <div className="absolute 2xl:top-[200px] top-[100px] left-0 flex">
                        <img src="/image/prodog/progou.png" alt="dog" className="animate-elem-1" />
                    </div>
                </div>
                <div className="2xl:block hidden">
                    <div className="absolute top-[200px] right-[80px] flex">
                         <Link to='/cat-food'>
                            <img src="/image/dog/sm.png" style={{transform:'rotateY(165deg)'}} alt="dog" />
                            <img src="/image/v1/cat-yellow.png" alt="dog" />
                        </Link>
                        <Link to='/dog-food'>
                            <img src="/image/dog/sg.png" style={{transform:'rotateY(170deg)'}}  alt="dog" />
                            <img src="/image/v1/dog-red.png" alt="dog" />
                        </Link>
                       
                    </div>
                </div>

                <div style={prodogBanner} className="lg:pt-[200px] sm:pt-[120px] pt-[120px] px-[20px]">
                    <div className="max-w-[1100px] mx-auto">
                        <div className="2xl:hidden block pb-[60px]">
                            <div className="flex justify-center">
                            <Link to='/cat-food'>
                                    <img src="/image/dog/sm.png" style={{transform:'rotateY(165deg)'}} alt="dog" />
                                    <img src="/image/v1/cat-yellow.png" alt="dog" />
                                </Link>
                                <Link to='/dog-food'>
                                    <img src="/image/dog/sg.png" style={{transform:'rotateY(170deg)'}} alt="dog" />
                                    <img src="/image/v1/dog-red.png" alt="dog" />
                                </Link>
                                
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-[10px] justify-between">
                            <div className="flex items-center gap-[10px] group tab-one cursor-pointer pt-[30px]" onClick={() => handleTabClick('tab1')}>
                                <img src="/image/prodog/157588403343150moz8.png" className={` ${activeTab === 'tab1' ? 'hidden' : 'block'} md:max-w-[100px] md:h-[100px] max-w-[60px] h-[60px]`} alt="prodog" />
                                <img src="/image/prodog/15758841127498f4hno.png" className={` ${activeTab === 'tab1' ? 'block' : 'hidden'} md:max-w-[100px] md:h-[100px] max-w-[60px] h-[60px]`} alt="prodog" />
                                <div>
                                    <h3 className={` sm:text-[24px] text-[18px] leading-[30px] ${activeTab === 'tab1' ? 'text-[#81312d] ' : 'text-[#555555]'}`}>Dry food</h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-[10px] group tab-two cursor-pointer pt-[30px]" onClick={() => handleTabClick('tab2')}>
                                <img src="/image/prodog/15758844408979x6rwk.png" className={` ${activeTab === 'tab2' ? 'hidden' : 'block'} md:max-w-[100px] md:h-[100px] max-w-[60px] h-[60px]`} alt="prodog" />
                                <img src="/image/prodog/15758844536969vob5r.png" className={` ${activeTab === 'tab2' ? 'block' : 'hidden'} md:max-w-[100px] md:h-[100px] max-w-[60px] h-[60px]`} alt="prodog" />
                                <div>
                                    <h3 className={` sm:text-[24px] text-[18px] leading-[30px] ${activeTab === 'tab2' ? 'text-[#81312d] ' : 'text-[#555555]'}`}>Wet food</h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-[10px] group tab-three cursor-pointer pt-[30px]" onClick={() => handleTabClick('tab3')}>
                                <img src="/image/prodog/15758847337435l4t9b.png" className={` ${activeTab === 'tab3' ? 'hidden' : 'block'} md:max-w-[100px] md:h-[100px] max-w-[60px] h-[60px]`} alt="prodog" />
                                <img src="/image/prodog/15758847191871uh6zx.png" className={` ${activeTab === 'tab3' ? 'block' : 'hidden'} md:max-w-[100px] md:h-[100px] max-w-[60px] h-[60px]`} alt="prodog" />
                                <div>
                                    <h3 className={` sm:text-[24px] text-[18px] leading-[30px] ${activeTab === 'tab3' ? 'text-[#81312d]' : 'text-[#555555]'}`}>Snacks</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:pt-[200px] md:pt-[160px] sm:pt-[120px] pt-[100px] 2xl:pb-[264px] xl:pb-[214px] lg:pb-[184px] md:pb-[154px] pb-[104px]">
                        <div className="kit-container">
                            <div className="slider-container">
                                {filteredData.length > 0 ? (
                                    <Slider key={activeFilter} {...settings}>
                                        {filteredData.map((item) => (
                                            <div key={item.id} className="text-center hover:-translate-y-1 transition-all duration-150 group">
                                                <div onClick={() => showFilterDataInModal(item.id)} className="cursor-pointer">
                                                    <img src={item.product_img} alt="Product img" className="max-w-[305px] max-h-[300px] mx-auto" />
                                                    {/* <p className="pt-[10px] text-white max-w-[350px] mx-auto">{item.product_details}</p> */}
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
                        </div>
                    </div>
                </div>
            </div>
            {selectedProductId && (
                <PDFModal
                    isOpen={selectedProductId === false}
                    onRequestClose={closeModal}
                    pdfUrl={selectedProductId}
                />
            )}
        </>
    )
}

export default Prodog;
