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



    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    let paddingBottom;
    if (windowWidth <= 640) {
      paddingBottom = '50%';
    } else if (windowWidth <= 1024) {
      paddingBottom = '18%';
    } else {
      paddingBottom = '13%';
    }
  
    const bannerBg2 = {
      backgroundImage: "url('/image/index-bj2.png')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      paddingTop: '13%',
      paddingBottom
    };


    const bannerBg1 = {
        backgroundImage: "url('/image/banner-bg.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100%'
    }


    const bannerBg3 = {
        backgroundImage: "url('/image/index-bo1.png')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize:'contain'
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
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />,
        pauseOnHover: false
    };

    const catFoodData = [
        {
            id: 1,
            src: "image/holla.png",
            alt: "video of dry food",
            title: "Dry food",
            link: '/cat-food',
            state: 'tab1'
        },
        {
            id: 2,
            src: "image/cat-02.png",
            alt: "video of staple food wet food",
            title: "Wet food",
            link: '/cat-food',
            state: 'tab2'
        },
        {
            id: 3,
            src: "image/cat-03.png",
            alt: "video of snacks and wet snacks",
            title: "Snacks",
            link: '/cat-food',
            state: 'tab3'
        }
    ];


    const navigate = useNavigate();

    const navigateToProdog = (link, state) => {
        navigate(link, { state: { tab: state } });
    };



    const dogFoodData = [
        {
            id: 1,
            src: "image/dog-01.png",
            alt: "video of dry food",
            title: "Dry food",
            link: '/dog-food',
            state: 'tab1'
        },
        {
            id: 2,
            src: "image/holla.png",
            alt: "video of staple food wet food",
            title: "Wet food",
            link: '/dog-food',
            state: 'tab2'
        },
        {
            id: 3,
            src: "image/holla.png",
            alt: "video of snacks and wet snacks",
            title: "Snacks",
            link: '/dog-food',
            state: 'tab3'
        },
        {
            id: 4,
            src: "image/dog-04.png",
            alt: "video of snacks and wet snacks",
            title: "Supplies",
            link: '/dog-food',
            state: 'tab4'
        }
    ];

    const navigateToProcat = (link, state) => {
        navigate(link, { state: { tab: state } });
    };
    const style = {
        transform: 'translateX(-50%) translateY(-50%)'
    };




    return (
        <>
            <div>

                <div style={bannerBg1}>
                    <div className='sm:pt-[160px] pt-[80px]  pb-[80px]'>
                        <div className="container xl:max-w-[1700px] md:max-w-[672px] xs:max-w-[270px] mx-auto">
                            <div className="slider-container">
                                <Slider {...homeBannerSlier}>
                                    <img className="w-full" src="/image/v1/cat-food-web-banner-1.png" alt="Dog Food" />
                                    <img className="w-full" src="/image/v1/cat-food-web-banner-2.png" alt="Dog Food" />
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:py-[100px] py-[200px] relative after:absolute after:h-[40px] after:content-[''] after:w-full after:bg-[#fcdd90] after:top-0 after:bottom-0 after:left-0 after:right-0" style={bannerBg2}>
                    <div className="absolute left-0 w-full min-h-[100px] right-0 top-0 2xl:mt-[-70px] lg:mt-[-60px] sm:mt-[-55px] mt-[-53px]" style={bannerBg3}>

                    </div>
                    <div className=" mx-auto" >
                        <div>
                            <img className="lg:block hidden absolute left-0 top-0 mt-[-90px] w-[315px] h-[236px] hover-text z-[1]" src="/image/v1/Food-bowl-ref.png" alt="img" data-aos="fade-right" />
                        </div>
                        <img src="/image/v1/About-food-ref.png" alt="badge" className="absolute right-5 top-40 w-[424px] h-[238px] 2xl:block hidden" />

                        <DecorativeHeader title='About kitchen flavor' subtitle='About kitchen flavor' color='#81312d' dotBgColor='#81312d' />


                        <div className="lg:grid grid-cols-12 items-center gap-[30px] mt-[60px] relative" data-aos="fade-up">
                            <div className="col-span-6 relative">
                                <img src="/image/yun.png" alt="badge" className="absolute left-0 -top-20 w-[126px] h-[50px] lg:block hidden" />

                                <img src="./image/v1/home/Cat 3.png" className="w-full px-[20px]" alt="cat" />
                            </div>
                            <div className="col-span-6 md:pt-0 pt-[50px] px-[20px]">
                                <p className="text-2xl mb-[30px]">Brand Story</p>
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
                                <img src="/image/cat.png" className="absolute right-0 bottom-0 hover-text xl:block hidden" alt="cat" />
                            </div>
                        </div>
                        <img src="/image/spape.png" className="absolute left-0 bottom-0 ml-[100px] mb-[500px] lg:block hidden" alt="cat" />

                    </div>
                    <div className="relative">
                        <div className="kit-container relative">
                            <div className=" lg:max-w-[1125px] max-w-[1000px] lg:max-h-[588px] max-h-[500px] w-full h-full mt-[155px] mx-auto flex justify-center items-center relative md:pb-0 pb-[40px]" data-aos="fade-up">
                                <img className="lg:max-w-[1125px] max-w-[1000px] lg:max-h-[588px] max-h-[500px] w-full h-full mx-auto static z-[2] flex justify-center items-center" src="image/vidoe-banner.png" alt="video" />
                                <div className="w-full h-full flex justify-center items-center" style={{ style }}>
                                    <img className="cursor-pointer absolute z-10 left-[50%] top-[50%] video-play-button-ani sm:w-[80px] sm:h-[80px] w-[60px] h-[60px] mx-auto" onClick={handlePlayVideo} src="image/play-btn.png" alt="video" />
                                </div>
                                {showVideo && <VideoOverlay videoId="GWmsfBXlLjI" onClose={handleCloseVideo} />}
                            </div>
                        </div>
                        <img className="lg:block hidden absolute right-0 bottom-0 z-[1] hover-text max-w-[390x] max-h-[620px]" src="image/v1/Group 3.png" alt="video" />
                    </div>
                    <img className="lg:block hidden" src="image/rou.png" alt="video" />
                    <DecorativeHeader title='Product Lineup' subtitle='About kitchen flavor' color='white' dotBgColor='#fff' />
                </div>
            </div>
            <div>
                <div className="py-[100px] relative" style={bannerBg4}>
                    <img src="/image/xia.png" className="absolute bottom-[17%] left-0 sm:w-[159px] sm:h-[259px] w-[60px] h-[auto]" alt="xia"/>
                    <div className="mx-auto md:px-0 pt-[10%]">
                        <div className="kit-container mx-auto md:px-0">
                            <div className="lg:grid grid-cols-12 items-center gap-[30px] mt-[60px] relative" data-aos="fade-up">
                                <div className="col-span-7 relative">
                                    <img src="./image/v1/home/home-cat.png" className="w-full" alt="cat" />
                                </div>
                                <div className="col-span-5 md:pt-0 pt-[50px]">
                                    <DanceFont title='cat' color={'text-customText'} />
                                    <ul className="mt-[40px] w-full sm:grid sm:grid-cols-2 gap-[40px] sm:space-y-0 space-y-[20px]">
                                        {catFoodData.map(item => (
                                            <li key={item.id} className="" onClick={() => navigateToProdog(item.link, item.state)}>
                                                <ListItemWithImage
                                                    src={item.src}
                                                    alt={item.alt}
                                                    title={item.title}
                                                    subtitle={item.subtitle}
                                                />
                                            </li>

                                        ))}
                                    </ul>
                                    <ReadMoreLink
                                        link="/cat-food"
                                        imageSrc="./image/next-yellow.png"
                                        altText="Next"
                                    >
                                        Explore
                                    </ReadMoreLink>
                                </div>


                            </div>
                            <div className="lg:grid grid-cols-12 items-center gap-[30px] mt-[120px] relative" data-aos="fade-up">
                            <div className="col-span-7 relative md:order-2 order-1">
                                    <img src="./image/v1/home/home-dog.png" className="w-full" alt="cat" />
                                </div>
                                <div className="col-span-5 md:pt-0 pt-[50px] px-[20px]">
                                    <DanceFont title='dog' color={'text-customText'} />
                                    <ul className="space-y-[17px] mt-[40px] sm:grid sm:grid-cols-2 gap-4">
                                        {dogFoodData.map(item => (
                                            <li key={item.id} className="" onClick={() => navigateToProcat(item.link, item.state)}>
                                                <ListItemWithImage
                                                    key={item.id}
                                                    src={item.src}
                                                    alt={item.alt}
                                                    title={item.title}
                                                    subtitle={item.subtitle}
                                                />
                                            </li>
                                        ))}
                                    </ul>

                                    <ReadMoreLink
                                        link="/dog-food"
                                        imageSrc="./image/next-yellow.png"
                                        altText="Next"
                                    >
                                        Explore
                                    </ReadMoreLink>
                                </div>
                                
                            </div>


                            <div className="grid grid-cols-12 pt-[147px]" >
                                <div className="w-full h-full mx-auto flex justify-center items-center col-span-5">

                                </div>
                                <div className="w-full h-full mx-auto flex justify-center items-center col-span-7">
                                    <img className="hover-text" src="image/memg.png" alt="video" />
                                </div>
                            </div>
                            <div className="lg:grid grid-cols-12 pt-[47px] gap-[33px] px-[20px] lg:mb-[-6%]" data-aos="fade-up">
                                <div className="w-full h-full mx-auto flex justify-center items-center col-span-6 relative">
                                    <img className=" w-full h-full mx-auto static z-[2]" src="image/v1/Care-for-cat-ref.png" alt="video" />
                                    <div className="absolute cursor-pointer z-[3] right-[80px] top-[20%]">
                                        <h3 className="text-white font-medium sm:text-5xl text-[20px]" style={{fontFamily: '"Caveat", cursive'}}>Care for Cat</h3>
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
                                    <img className="w-full h-full mx-auto static z-[2]" src="image//v1/Care-for-dog-ref.png" alt="video" />
                                    <div className="absolute cursor-pointer z-[3] right-[80px] top-[20%]">
                                        <h3 className="text-white font-medium sm:text-5xl text-[20px]" style={{fontFamily: '"Caveat", cursive'}}>Care for Dog</h3>
                                        <Link to='/dog'>
                                            <div className="pt-[20px] flex items-center gap-[12px] hover-text">
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