import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import procatData from '../JSON/Procat.json';
import LeftArrow from "../components/pagination/LeftArrow";
import RightArrow from "../components/pagination/RightArrow";


function Procat() {
    const location = useLocation();

    const [activeTab, setActiveTab] = useState('tab1');
    const [activeFilter, setActiveFilter] = useState('all');
    const { dryFoodData, stapleFoodData, snaksFoodData, suppliiesData } = procatData;

    useEffect(() => {
        console.log('=======',location.state)
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
        nextArrow: <LeftArrow />,
        prevArrow: <RightArrow />
    };




    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        setActiveFilter('all')
    };


    return (
        <>
            <div className=" relative">
                <div className="absolute top-[200px] left-0 flex">
                    <img src="/image/prodog/progou.png" alt="dog" />

                </div>
                <div className="absolute top-[200px] right-[20px] flex">
                    <Link to='/prodog'>
                        <img src="/image/dog/sg.png" alt="dog" />
                        <img src="/image/prodog/sgh.png" alt="dog" />
                    </Link>
                    <Link to='/procat'>
                        <img src="/image/dog/sm.png" alt="dog" />
                        <img src="/image/prodog/smh.png" alt="dog" />
                    </Link>
                </div>
                <div style={prodogBanner} className="pt-[200px]">
                    <div className="max-w-[1260px] mx-auto">
                        <div className="flex grid-cols-3 items-center gap-[30px] justify-between">
                            <div className="flex items-center gap-[10px] group tab-one cursor-pointer" onClick={() => handleTabClick('tab1')}>
                                <img src="/image/prodog/157588403343150moz8.png" className={` ${activeTab === 'tab1' ? 'hidden' : 'block'}`} alt="prodog" />
                                <img src="/image/prodog/15758841127498f4hno.png" className={` ${activeTab === 'tab1' ? 'block' : 'hidden'}`} alt="prodog" />
                                <div>
                                <h3 className={` text-[24px] leading-[30px] ${activeTab === 'tab1' ? 'text-[#81312d] ' : 'text-[#555555]'}`}>Dry food</h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-[10px] group tab-two cursor-pointer" onClick={() => handleTabClick('tab2')}>
                                <img src="/image/prodog/15758844408979x6rwk.png" className={` ${activeTab === 'tab2' ? 'hidden' : 'block'}`} alt="prodog" />
                                <img src="/image/prodog/15758844536969vob5r.png" className={` ${activeTab === 'tab2' ? 'block' : 'hidden'}`} alt="prodog" />
                                <div>
                                <h3 className={` text-[24px] leading-[30px] ${activeTab === 'tab2' ? 'text-[#81312d] ' : 'text-[#555555]'}`}>Wet food</h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-[10px] group tab-three cursor-pointer" onClick={() => handleTabClick('tab3')}>
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
                            </div>
                        </div>
                    </div>
                    {/* <div className="bg-[#fffbc2] border border-dashed border-[#e39000] mt-[85px] rounded-[999px] px-[50px] py-[5px] max-w-[1200px] mx-auto">
                        <div className="flex items-center justify-center gap-[30px]">
                            <h1 className="text-[#81312d] text-[18px] leading-[70px]">Generation:</h1>
                            <ul className="flex items-center gap-[30px]">
                                <li className={`text-[#81312d] text-[18px] leading-[70px] cursor-pointer ${activeFilter === 'all' ? 'active-filter' : ''}`} onClick={() => setActiveFilter('all')}>all</li>
                                <li className={`text-[#81312d] text-[18px] leading-[70px] cursor-pointer ${activeFilter === '1-3 months old' ? 'active-filter' : ''}`} onClick={() => setActiveFilter('1-3 months old')}>1-3 months old</li>
                                <li className={`text-[#81312d] text-[18px] leading-[70px] cursor-pointer ${activeFilter === 'Under 12 months old' ? 'active-filter' : ''}`} onClick={() => setActiveFilter('Under 12 months old')}>Under 12 months old</li>
                                <li className={`text-[#81312d] text-[18px] leading-[70px] cursor-pointer ${activeFilter === '1 year old and above' ? 'active-filter' : ''}`} onClick={() => setActiveFilter('1 year old and above')}>1 year old and above</li>
                                <li className={`text-[#81312d] text-[18px] leading-[70px] cursor-pointer ${activeFilter === '7 years and above' ? 'active-filter' : ''}`} onClick={() => setActiveFilter('7 years and above')}>7 years and above</li>
                            </ul>
                        </div>
                    </div> */}
                    <div className="pt-[120px] pb-[200px]">
                        <div className="kit-container">
                            <div className="slider-container">
                                {activeTab === 'tab1' && (
                                    <Slider key={activeFilter} {...settings}>
                                        {filterData().map((item) => (
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
                                )}
                                {activeTab === 'tab2' && (
                                    <Slider key={activeFilter} {...settings}>
                                        {filterData().map((item) => (

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
                                )}

                                {activeTab === 'tab3' && (
                                    <Slider key={activeFilter} {...settings}>
                                        {filterData().map((item) => (
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
                                )}

                                {activeTab === 'tab4' && (
                                    <Slider key={activeFilter} {...settings}>
                                        {filterData().map((item) => (
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
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Procat;
