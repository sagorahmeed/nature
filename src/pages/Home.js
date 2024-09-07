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
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet';
gsap.registerPlugin(ScrollTrigger);






function Home() {



    useEffect(() => {
       
        if (window.innerWidth >= 991) {
            
            gsap.to('.animate-elem', {
                y: '70%',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.scroll-section',
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 0.8,
                },
            });
    
            gsap.to('.animate-elem-2', {
                y: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.scroll-section-2',
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 0.8,
                },
            });
            gsap.to('.animate-elem-3', {
                y: '30%',
                scale: 1.2,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.scroll-section-2',
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.6,
                },
            });
            gsap.to('.animate-elem-4', {
                y: '-15%',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.scroll-section-2',
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 0.6,
                },
            });
            gsap.to('.animate-elem-5', {
                y: '-10%',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.scroll-section-5',
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 0.6,
                },
            });
            gsap.to('.animate-elem-6', {
                y: '-15%',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.scroll-section-6',
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 0.4,
                },
            });
    
            gsap.to('.animate-elem-7', {
                y: '-15%',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.scroll-section-7',
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 0.4,
                },
            });
        }
        

    }, []);
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
        paddingBottom,
        position: 'relative',
        zIndex: '11'
    };


    const bannerBg1 = {
        backgroundImage: "url('/image/banner-bg.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%'
    }


    const bannerBg3 = {
        backgroundImage: "url('/image/index-bo1.png')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
    };

    const bannerBg4 = {
        backgroundImage: "url('/image/bd--3.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };


    const homeBannerSlier = {
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />,
        pauseOnHover: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
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

    // Kitchen Flavor - Grain Free with Real Meat Cubes - Kitten (8 KG).png
    // Miscellaneous-ref-2.png

    return (
        <>
            <Helmet>
                <title>Kitchen Flavor Bangladesh</title>
                <meta name="description" content="Kitchen Flavor Brand Official Website | Bridge Pet Care Products | Pet Food Manufacturer Company"/>
            </Helmet>
            <div className="relative overflow-hidden">

                <div className="scroll-section relative h-full">
                    <div className='md:pt-[100px] pt-[80px]  pb-[80px] bg-[#faf4d4] relative z-[3] overflow-hidden'>
                        <div style={bannerBg1} className="animate-elem absolute h-[100%] w-full overflow-hidden left-0 z-[-1] md:top-[-20%] top-[-0%]">
                        </div>
                        <div className="container xl:max-w-[1700px] md:max-w-[672px] xs:max-w-[270px] mx-auto">
                            <div className="slider-container">
                                <Slider {...homeBannerSlier}>
                                    <img className="w-full" src="/image/cat-food-web-banner-2.png" alt="Dog Food" />
                                    <img className="w-full" src="/image/cat-food-web-banner-yellow-.png" alt="Dog Food" />
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="lg:py-[100px] md:py-[50px] py-[100px] relative after:absolute after:h-[40px] after:content-[''] after:w-full after:bg-[#fcdd90] after:top-0 after:bottom-0 after:left-0 after:right-0" style={bannerBg2}>
                    <div className="absolute left-0 w-full min-h-[100px] right-0 top-0 2xl:mt-[-70px] lg:mt-[-60px] sm:mt-[-55px] mt-[-53px]" style={bannerBg3}>

                    </div>
                    <div className=" mx-auto scroll-section-2 ">
                        <div>
                            <img className=" absolute left-0 1xl:top-0 xl:top-[-3%] lg:mt-[-90px] sm:mt-[-150px] mt-[-120px] lg:w-[315px] lg:h-[236px] w-[auto] h-[106px] hover-text z-[1]" src="/image/v1/Food-bowl-ref.png" alt="img" data-aos="fade-right" />
                            <img className=" absolute right-0 top-0 mt-[-90px] lg:w-[315px] lg:h-[236px] w-[150px] h-[126px] hover-text z-[1] md:hidden block" src="/image/dog/sm.png" alt="img" data-aos="fade-right" />
                        </div>
                        <img src="/image/v1/About-food-ref.png" alt="badge" className="lg:block hidden animate-elem-3 absolute right-5 2xl:top-24 xl:top-[30px] 2xl:w-[300px] 2xl:h-[200px] w-[224px] h-[138px]" />

                        <DecorativeHeader title='About kitchen flavor' parentClass='animate-elem-3' subtitle='About kitchen flavor' color='#81312d' dotBgColor='#81312d' />

                        <div className="relative">
                            <img src="/image/yun.png" alt="badge" className="lg:block hidden animate-elem-2 absolute left-10 top-72 w-[165px] h-[65px]" />
                            <div className="kit-container pt-[50px] animate-elem-4">
                                <div className=" lg:grid grid-cols-12 items-center gap-[30px] 2xl:mt-[60px] mt-[0] relative lg:pt-0 pt-[60px]" data-aos="fade-up">
                                    <div className="col-span-6 relative">

                                        <img src="./image/v1/home/Cat 3.png" className="w-full px-[20px]" alt="cat" />
                                    </div>
                                    <div className="col-span-6 lg:pt-0 pt-[50px] px-[20px] sm:text-left text-center">
                                        <p className="text-2xl mb-[30px] text-[#81312d]">Brand Story</p>
                                        <ul className="max-w-[500px]">
                                            <li className="text-[#5e271c] text-[18px] leading-[32px]">From the wilderness and grasslands to the jungle and deep sea, Kitchen Flavor's quest for deliciousness never ends. Whether it's pure and natural, delicious and juicy, or nutritionally balanced.</li>
                                            <li className="text-[#5e271c] text-[18px] leading-[32px] mt-[24px]">A natural recipe from Kitchen Flavor is always perfect for your pet.Kitchen Flavor is omnipotent Exceeding your pets’ needs, We are continuously creating more happiness for you and your pet.</li>
                                        </ul>
                                        <Link to='/about' className="sm:block flex justify-center">
                                            <div className="mt-[50px] flex items-center gap-[12px] hover-text">
                                                <img src="./image/next.png" alt="next" />
                                                Read More
                                            </div>
                                        </Link>
                                        <img src="/image/cat.png" className="md:block hidden absolute 2xl:right-0 xl:right-[5%] hover-text 2xl:w-[299px] 2xl:h-[269px] md:w-[200px] w-[100px] h-auto 1xl:right-[-8%] sm:right-[10%] right-[2%] 2xl:bottom-0 xl:bottom-[-14%] bottom-[-10%]" alt="cat" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="relative overflow-hidden">
                        <div className="kit-container relative">
                            <div className="2xl:max-w-[1125px] xl:max-w-[925px] lg:max-w-[825px] md:max-w-[600px] lg:max-h-[588px] max-h-[500px] w-full h-full md:mt-[85px] mt-[83px] mx-auto flex justify-center items-center relative md:pb-0 pb-[40px]" data-aos="fade-up">
                                <img className="2xl:max-w-[1125px] xl:max-w-[925px] lg:max-w-[825px] max-w-[700px] lg:max-h-[588px] max-h-[500px] w-full h-full mx-auto static z-[2] flex justify-center items-center" src="image/vidoe-banner.png" alt="video" />
                                <div className="w-full h-full flex justify-center items-center" style={{ style }}>
                                    <img className="cursor-pointer absolute z-10 left-[50%] top-[50%] video-play-button-ani sm:w-[80px] sm:h-[80px] w-[60px] h-[60px] mx-auto" onClick={handlePlayVideo} src="image/play-btn.png" alt="video" />
                                </div>
                                {showVideo && <VideoOverlay videoId="sNMootElQGA" onClose={handleCloseVideo} />}
                            </div>
                            <div className="absolute 2xl:right-[5%] lg:right-[0%] md:right-[5%] right-0 bottom-0 z-[11]">

                            <div className="relative hover-text sm:max-w-[390x] sm:max-h-[620px] max-w-[290x] max-h-[auto]">
                                <div className="flex justify-end ml-auto">
                                   <img className="mr-auto absolute top-[-45%] 2xl:right-[-60%] xl:right-[-10%] right-0" src="./image/Miscellaneous-ref-2.png" alt="video" />
                                  <img className="2xl:max-w-[390px] xl:max-w-[250px] 2xl:max-h-[620px] xl:max-h-[300px] md:max-w-[200px] md:max-h-[250px] max-w-[150px] max-h-[120px]" src="./image/pr-brand.png" alt="video" />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <img className="sm:w-[170px] sm:h-auto w-[100px]" src="image/rou.png" alt="video" />
                    <DecorativeHeader title='Product Lineup' subtitle='About kitchen flavor' color='white' dotBgColor='#fff' />
                </div>
            </div>
            <div>
                <div className="2xl:pt-[5px] xl:pt-[20px]  md:pt-[40px]  sm:pb-[50px] pb-[30px] pt-[30px] relative" style={bannerBg4}>
                    <img src="/image/xia.png" className="absolute bottom-[17%] left-0 sm:w-[159px] sm:h-[259px] w-[60px] h-[auto]" alt="xia" />
                    <div className="mx-auto md:px-0">
                        {/* pt-[10%] */}
                        <div className="relative scroll-section-6">
                            <img src="/image/yun.png" alt="badge" class="animate-elem-2 absolute left-10 top-72 lg:block hidden w-[165px] h-[65px]" />
                            <div className="kit-container mx-auto md:px-0">

                                <div className=" relative">
                                    <div className="animate-elem-6">
                                        <div className="lg:grid grid-cols-12 items-center gap-[30px] 2xl:mt-[60px] mt-0 relative" data-aos="fade-up">
                                            <div className="col-span-7 relative">
                                                <img src="./image/cat/15759583589469rcfo7.png" className="rotate-[297deg] 2xl:w-[324px] 2xl:h-[268px] w-[140px] h-auto" alt="cat" />
                                                <img src="./image/home-cat.png" className="w-full" alt="cat" />
                                            </div>
                                            <div className="col-span-5 md:pt-0 pt-[50px]">
                                                <DanceFont title='cat' color={'text-customText'} />
                                                <ul className="mt-[40px] w-full grid grid-cols-2 gap-[40px]">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative scroll-section-7">
                            <img src="/image/yun.png" alt="badge" class="animate-elem-2 absolute right-10 top-72 lg:block hidden w-[165px] h-[65px]" />

                            <div className="kit-container mx-auto md:px-0">
                                <div className="">
                                    <div className="animate-elem-7">
                                        <div className="lg:grid grid-cols-12 items-center gap-[30px] 2xl:mt-[120px] mt-[40px] relative" data-aos="fade-up">
                                            <div className="col-span-7 relative md:order-2 order-1">
                                            <div className="flex justify-end">
                                            <img src="./image/dog/15759582895751ys22j.png" className="rotate-[407deg] 2xl:w-[324px] 2xl:h-[268px] w-[140px] h-auto mr-[30px]" alt="cat" />
                                                </div>
                                                
                                                
                                                <img src="./image/home-dog.png" className="w-full relative" alt="cat" />
                                            </div>
                                            <div className="col-span-5 md:pt-0 pt-[50px]">
                                                <DanceFont title='dog' color={'text-customText'} />
                                                <ul className="mt-[40px] grid grid-cols-2 gap-4">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="kit-container mx-auto md:px-0">


                            <div className="grid grid-cols-12 2xl:pt-[147px] xl:pt-[100px] pt-[40px]" >
                                <div className="w-full h-full mx-auto flex justify-center items-center col-span-5">

                                </div>
                                <div className="w-full h-full mx-auto flex justify-center items-center col-span-7">
                                    <img className="hover-text  2xl:w-[324px] 2xl:h-[268px] w-[140px] h-auto mr-[30px]" src="image/memg.png" alt="video" />
                                </div>
                            </div>
                            <div className="lg:grid grid-cols-12 pt-[47px] gap-[33px] sm:px-[20px] lg:mb-[-6%]" data-aos="fade-up">
                                <div className="w-full h-full mx-auto flex justify-center items-center col-span-6 relative">
                                    <img className=" w-full h-full mx-auto static z-[2]" src="image/v1/Care-for-cat-ref.png" alt="video" />
                                    <div className="absolute cursor-pointer z-[3] 2xl:right-[80px] xl:right-[40px] right-[8%] 2xl:top-[20%] xl:top-[30%]">
                                        <h3 className="text-white font-medium sm:text-5xl text-[20px] 2xl:text-left text-center" style={{ fontFamily: '"Caveat", cursive' }}>Care for Cat</h3>
                                        <Link to='/cat'>
                                            <div className="flex items-center gap-[12px] 2xl:pt-[20px] pt-[10px] hover-text">
                                                <div className="relative sm:w-[60px] w-[50px] 2xl:h-[55px] h-[45px] flex justify-center items-center">
                                                    <img src="./image/emty-shape.png" className="sm:w-[60px] w-[50px] 2xl:h-[55px] h-[45px] flex justify-center items-center" alt="next" />
                                                    <div className="flex items-center justify-center absolute left-0 right-0 top-0 bottom-0 w-full h-full">
                                                     <img src="./image/next-white-arrow.png" className="" alt="next" />
                                                    </div>
                                                </div>

                                                <span className="text-[#eda234] text-[16px] leading-[44px]">Read More</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-full h-full mx-auto flex justify-center items-center col-span-6 relative" >
                                    <img className="w-full h-full mx-auto static z-[2]" src="image//v1/Care-for-dog-ref.png" alt="video" />
                                    <div className="absolute cursor-pointer z-[3] 2xl:right-[80px] xl:right-[40px] right-[8%] 2xl:top-[20%] xl:top-[30%]">
                                        <h3 className="text-white font-medium sm:text-5xl text-[20px] 2xl:text-left text-centerc" style={{ fontFamily: '"Caveat", cursive' }}>Care for Dog</h3>
                                        <Link to='/dog'>
                                            <div className="2xl:pt-[20px] pt-[10px] flex items-center gap-[12px] hover-text">
                                            <div className="relative sm:w-[60px] w-[50px] 2xl:h-[55px] h-[45px] flex justify-center items-center">
                                                    <img src="./image/emty-shape.png" className="sm:w-[60px] w-[50px] 2xl:h-[55px] h-[45px] flex justify-center items-center" alt="next" />
                                                    <div className="flex items-center justify-center absolute left-0 right-0 top-0 bottom-0 w-full h-full">
                                                     <img src="./image/next-white-arrow.png" className="" alt="next" />
                                                    </div>
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