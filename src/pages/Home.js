import Slider from "react-slick/lib/slider";
import LeftArrow from "../components/pagination/LeftArrow";
import RightArrow from "../components/pagination/RightArrow";
import { Link, useLocation } from "react-router-dom";
import ReadMoreLink from "../components/ReadMoreLink";
import ListItemWithImage from "../components/ListItemWithImage";
import { useEffect, useState } from "react";
import VideoOverlay from "../components/VideoModal";
import AOS from 'aos';
import 'aos/dist/aos.css';
import DecorativeHeader from "../components/DecorativeHeader";
import DanceFont from "../components/DanceFont";
import { useNavigate } from 'react-router-dom';







function Home() {
    const location = useLocation();

    const [showVideo, setShowVideo] = useState(false);

    const handlePlayVideo = () => {
        setShowVideo(true);
    };

    const handleCloseVideo = () => {
        setShowVideo(false);
    };


    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/prodog', { state: { tab: 'tab3' } });
    };
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        });
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [location]);





    const bannerBg1 = {
        backgroundImage: "url('/image/banner-bg.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100%'
    }
    const bannerBg2 = {
        backgroundImage: "url('/image/index-bj2.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        paddingTop: '10%',
        paddingBottom: '18%'
    };

    const bannerBg3 = {
        backgroundImage: "url('/image/index-bo1.png')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    const bannerBg4 = {
        backgroundImage: "url('/image/bd--3.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };


    const homeBannerSlier = {
        dots: false,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        nextArrow: <LeftArrow />,
        prevArrow: <RightArrow />,
        pauseOnHover: false
    };

    const catFoodData = [
        {
            id: 1,
            src: "image/holla.png",
            alt: "video of dry food",
            title: "Dry food",
            link: '/prodog',
            state: 'tab1'
        },
        {
            id: 2,
            src: "image/cat-02.png",
            alt: "video of staple food wet food",
            title: "Wet food",
            link: '/prodog',
            state: 'tab2'
        },
        {
            id: 3,
            src: "image/cat-03.png",
            alt: "video of snacks and wet snacks",
            title: "Snacks",
            link: '/prodog',
            state: 'tab3'
        }
    ];



    const dogFoodData = [
        {
            id: 1,
            src: "image/dog-01.png",
            alt: "video of dry food",
            title: "Dry food",
            link: '/prodog'
        },
        {
            id: 2,
            src: "image/holla.png",
            alt: "video of staple food wet food",
            title: "Wet food",
            link: '/prodog'
        },
        {
            id: 3,
            src: "image/holla.png",
            alt: "video of snacks and wet snacks",
            title: "Snacks",
            link: '/prodog'
        },
        {
            id: 4,
            src: "image/dog-04.png",
            alt: "video of snacks and wet snacks",
            title: "Supplies",
            link: '/prodog'
        }
    ];





    return (
        <>
            <div>

                <div style={bannerBg1}>
                    <div className='sm:pt-[160px] pt-[80px]  pb-[80px]'>
                        <div className="container xl:max-w-[1700px] md:max-w-[672px] xs:max-w-[270px] mx-auto">
                            <div className="slider-container">
                                <Slider {...homeBannerSlier}>
                                    <img className="w-full" src="/image/157602742554234eyeu (1).png" alt="Dog Food" />
                                    <img className="w-full" src="/image/15760274330678xtiv3.png" alt="Dog Food" />
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:py-[100px] py-[200px] relative " style={bannerBg2}>
                    <div className="absolute left-0 w-full min-h-[100px] right-0 top-0 mt-[-70px]" style={bannerBg3}>

                    </div>
                    <div className="kit-container mx-auto md:px-0 px-[20px]" >
                        <div>
                            <img className="lg:block hidden absolute left-0 top-0 mt-[-90px] w-[315px] h-[236px] hover-text" src="/image/goulang.png" alt="img" data-aos="fade-right" />
                        </div>
                        <img src="/image/157595750091940edvv.png" alt="badge" className="absolute right-5 top-40 w-[424px] h-[238px]" />

                        <DecorativeHeader title='About kitchen flavor' subtitle='About kitchen flavor' color='#81312d' dotBgColor='#81312d' />


                        <div className="lg:grid grid-cols-12 items-center gap-[30px] mt-[60px] relative" data-aos="fade-up">
                            <div className="col-span-6 relative">
                                <img src="/image/yun.png" alt="badge" className="absolute left-0 -top-20 w-[126px] h-[50px]" />

                                <img src="./image/long-cat.png" className="w-full px-[20px]" alt="cat" />
                            </div>
                            <div className="col-span-6 md:pt-0 pt-[50px] px-[20px]">
                                <p className="text-2xl mb-[30px]">Brand story</p>
                                <ul className="space-y-[17px]">
                                    <li>From the wilderness and grasslands to the jungle and deep sea,</li>
                                    <li>Kitchen Flavor's quest for deliciousness never ends.</li>
                                    <li>Whether it's pure and natural, delicious and juicy, or nutritionally balanced,</li>
                                    <li>A natural recipe from Kitchen Flavor is always perfect for your pet.</li>
                                    <li>Kitchen Flavor is omnipotent,</li>
                                    <li>Exceeding your pets’ needs,</li>
                                    <li>We are continuously creating more happiness for you and your pet.</li>
                                </ul>
                                <Link to='/about'>
                                    <div className="mt-[50px] flex items-center gap-[12px] hover-text">
                                        <img src="./image/next.png" alt="next" />
                                        Read More
                                    </div>
                                </Link>
                                <button onClick={() => handleClick('/prodog', 'tab1')}>
                                    Navigate to Prodog
                                </button>
                                <img src="/image/cat.png" className="absolute right-0 bottom-0 md:block hidden hover-text" alt="cat" />
                            </div>
                        </div>
                        <img src="/image/spape.png" className="absolute left-0 bottom-0 ml-[100px] mb-[500px] lg:block hidden" alt="cat" />

                    </div>
                    <div className="relative">
                        <div className="kit-container relative">
                            <div className="lg:max-w-[889px] max-w-[600px] lg:max-h-[564px] max-h-[500px] w-full h-full pt-[95px] mx-auto flex justify-center items-center relative" data-aos="fade-up">
                                <img className="lg:max-w-[889px] max-w-[600px] lg:h-[464px] max-h-[500px] w-full h-full mx-auto static z-[2] flex justify-center items-center" src="image/vidoe-banner.png" alt="video" />
                                <img className="absolute cursor-pointer z-[3] video-play-button-ani md:w-[80px] md:h-[80px] w-[60px] h-[60px] mx-auto" onClick={handlePlayVideo} src="image/play-btn.png" alt="video" />
                                {showVideo && <VideoOverlay videoId="dQw4w9WgXcQ" onClose={handleCloseVideo} />}
                            </div>
                        </div>
                        <img className="lg:block hidden absolute right-0 bottom-0 z-[1] hover-text" src="image/image-spape-2.png" alt="video" />
                    </div>
                    <img className="lg:block hidden" src="image/rou.png" alt="video" />
                    <DecorativeHeader title='Product Lineup' subtitle='About kitchen flavor' color='white' dotBgColor='#fff' />
                </div>
            </div>
            <div>
                <div className="py-[100px] relative" style={bannerBg4}>
                    <div className="kit-container mx-auto md:px-0 px-[20px]">
                        <div className="kit-container mx-auto md:px-0 px-[20px]">
                            <div className="lg:grid grid-cols-12 items-center gap-[30px] mt-[60px] relative" data-aos="fade-up">
                                <div className="col-span-7 relative">
                                    <img src="./image/cute-cat.png" className="w-full" alt="cat" />
                                </div>
                                <div className="col-span-5 md:pt-0 pt-[50px]">
                                    <DanceFont title='cat' color={'text-[#eecb85]'} />
                                    <ul className="space-y-[17px] mt-[40px]">
                                        {catFoodData.map(item => (
                                            <li key={item.id} className="w-full sm:grid sm:grid-cols-12 gap-4">
                                                <Link to={{ pathname: item.link, state: { tab: item.state } }}>
                                                    <ListItemWithImage
                                                        src={item.src}
                                                        alt={item.alt}
                                                        title={item.title}
                                                        subtitle={item.subtitle}
                                                    />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <ReadMoreLink
                                        link="https://example.com"
                                        imageSrc="./image/next-yellow.png"
                                        altText="Next"
                                    >
                                        Explore More
                                    </ReadMoreLink>
                                </div>


                            </div>
                            <div className="lg:grid grid-cols-12 items-center gap-[30px] mt-[120px] relative" data-aos="fade-up">

                                <div className="col-span-5 md:pt-0 pt-[50px] px-[20px]">
                                    <DanceFont title='dog' color={'text-[#eecb85]'} />
                                    <ul className="space-y-[17px] mt-[40px] sm:grid sm:grid-cols-12 gap-4">
                                        {dogFoodData.map(item => (
                                            <ListItemWithImage
                                                key={item.id}
                                                src={item.src}
                                                alt={item.alt}
                                                title={item.title}
                                                subtitle={item.subtitle}
                                                link={item.link}
                                            />
                                        ))}
                                    </ul>

                                    <ReadMoreLink
                                        link="/prodog"
                                        imageSrc="./image/next-yellow.png"
                                        altText="Next"
                                    >
                                        Explore More
                                    </ReadMoreLink>
                                </div>
                                <div className="col-span-7 relative">
                                    <img src="./image/dog.png" className="w-full" alt="cat" />
                                </div>
                            </div>


                            <div className="grid grid-cols-12 pt-[147px]" >
                                <div className="w-full h-full mx-auto flex justify-center items-center col-span-5">

                                </div>
                                <div className="w-full h-full mx-auto flex justify-center items-center col-span-7">
                                    <img className="hover-text" src="image/memg.png" alt="video" />
                                </div>
                            </div>
                            <div className="lg:grid grid-cols-12 pt-[47px] gap-[33px] px-[20px]" data-aos="fade-up">
                                <div className="w-full h-full mx-auto flex justify-center items-center col-span-6 relative">
                                    <img className=" w-full h-full mx-auto static z-[2]" src="image/pet-demo-02.png" alt="video" />
                                    <div className="absolute cursor-pointer z-[3] right-[80px]">
                                        <h3 className="text-white font-medium text-2xl">Care for Cat</h3>
                                        <Link to='/cat'>
                                            <div className="flex items-center gap-[12px] pt-[20px] hover-text">
                                                <div className="relative w-[60px] h-[55px] flex justify-center items-center">
                                                    <img src="./image/emty-shape.png" className="w-[60px] h-[55px] flex justify-center items-center" alt="next" />
                                                    <img src="./image/next-white-arrow.png" className="absolute left-[20px] right-0 top-[24px] bottom-0" alt="next" />
                                                </div>

                                                <span className="text-[#eda234] text-[16px] leading-[44px]">Read More</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-full h-full mx-auto flex justify-center items-center col-span-6 relative" >
                                    <img className="w-full h-full mx-auto static z-[2]" src="image/pet-demo.png" alt="video" />
                                    <div className="absolute cursor-pointer z-[3] right-[80px]">
                                        <h3 className="text-white font-medium text-2xl">Care for Dog</h3>
                                        <Link to='/dog'>
                                            <div className="pt-[30px] flex items-center gap-[12px] hover-text">
                                                <div className="relative w-[60px] h-[55px] flex justify-center items-center">
                                                    <img src="./image/emty-shape.png" className="w-[60px] h-[55px] flex justify-center items-center" alt="next" />
                                                    <img src="./image/next-white-arrow.png" className="absolute left-[20px] right-0 top-[24px] bottom-0" alt="next" />
                                                </div>
                                                <span className="text-[#eda234] text-[16px] leading-[44px]">Read More</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div />
        </>
    )
}

export default Home;