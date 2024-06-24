import { Link, useLocation } from "react-router-dom";

import productData from '../JSON/Product.json';
import AOS from 'aos';
import { useEffect } from "react";
import dogData from '../JSON/dogData.json'
const { weaningPeriodData, childhoodData, adulthoodData, oldAgeData } = dogData


export default function Dog() {
    const location = useLocation();
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

    const dogBanner = {
        backgroundImage: "url('/image/dog/dog-banner.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    const growBanner = {
        backgroundImage: "url('/image/dog/dog-bg.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    const growBanner2 = {
        backgroundImage: "url('/image/dog/wave-backb.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div>
                <div style={dogBanner} id="section6" className="md:pt-[160px] pt-[20px]">
                    <div className="md:py-[250px] py-[80px] relative">
                        <div className="lg:block hidden">
                            <div className="absolute top-[0px] right-[80px] flex">
                                <Link to='/care-for-dog'>
                                    <img src="/image/dog/sg.png" alt="dog" />
                                    <img src="/image/v1/dog-red.png" alt="dog" />
                                </Link>
                                <Link to='/care-for-cat'>
                                    <img src="/image/dog/sm.png" alt="dog" />
                                    <img src="/image/v1/cat-yellow.png" alt="dog" />
                                </Link>
                            </div>
                        </div>
                        <div className="lg:hidden block">
                            <div className=" flex justify-center">
                                <Link to='/care-for-dog'>
                                    <img src="/image/dog/sg.png" alt="dog" />
                                    <img src="/image/v1/dog-red.png" alt="dog" />
                                </Link>
                                <Link to='/care-for-cat'>
                                    <img src="/image/dog/sm.png" alt="dog" />
                                    <img src="/image/v1/cat-yellow.png" alt="dog" />
                                </Link>
                            </div>
                        </div>
                        <div className="kit-container">
                            <h1 className="text-center text-white md:text-7xl text-4xl lg:pt-0 pt-[40px] mb-[40px]">“Ensuring Well-being for Dogs at Every Age”</h1>
                            <img onClick={() => handleScroll('section1')} src="/image/dog/icon-dow.png" className="flex justify-center mx-auto pt-[35px] video-play-button-ani cursor-pointer cursor-pointer" alt="dog" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#fbf4d1] ">
                    <div id="section1" className="kit-container w-full  md:h-[729px] h-[544px] relative flex items-end justify-center translate-y-[150px]" data-aos="fade-up"
                    >
                        <img src='/image/dog/dog-bn.png' className="w-full  md:h-[729px] h-[544px]" alt="banner" />
                        <div className="absolute md:bottom-[80px] bottom-[70px] md:px-[200px] px-[60px]">
                            <div className="text-center">
                                <h1 className="text-center text-white md:text-6xl text-4xl mb-[40px]">Weaning Stage</h1>
                                <p className="text-center text-white md:text-[21px] text-[16px] pt-[16px]">During the 1-3 month weaning phase, puppies have underdeveloped immune and digestive systems, necessitating a diet that is easy to digest and high in protein.</p>
                                <img src="/image/dog/icon-dow.png" onClick={() => handleScroll('section2')} className="flex justify-center mx-auto mt-[65px] video-play-button-ani cursor-pointer" alt="dog" />
                            </div>
                        </div>
                    </div>
                    <div style={growBanner} className="pt-[230px] pb-[40px]" data-aos="fade-up"
                    >
                        <h1 className="text-center text-[#4f2900]  md:text-[40px] text-[30px]">The Basics of Nutrition for Early Development</h1>
                        <div className="flex items-center gap-[20px] justify-center pt-[58px] flex-wrap">
                            {weaningPeriodData.map((food, index) => (
                                <Link key={index} to={food.link}>
                                    <div className="max-w-[290px] w-full">
                                        <img src={food.imageSrc} className="" alt={food.altText} />
                                        {food.texts.map((text, idx) => (
                                            <p
                                                key={idx}
                                                className={`text-[#653426] ${idx > 0 ? 'pt-[10px]' : ''} text-[20px] leading-[32px] text-center`}
                                            >
                                                {text}
                                            </p>
                                        ))}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div id="section2" className="kit-container w-full  md:h-[729px] h-[544px] relative flex items-end justify-center translate-y-[150px]" data-aos="fade-up"
                    >
                        <img src='/image/dog/15759442257484p4lch.png' className="w-full  md:h-[729px] h-[544px]" alt="banner" />
                        <div className="absolute md:bottom-[80px] bottom-[70px] md:px-[200px] px-[60px]">
                            <div className="text-center">
                                <h1 className="text-center text-white md:text-6xl text-4xl">Puppyhood</h1>
                                <p className="text-center text-white md:text-[21px] text-[16px] pt-[16px]">Between 3 and 12 months, puppies are in the juvenile phase with underdeveloped digestive systems. They need a diet that is easy to digest and meets their growth needs.</p>
                                <img src="/image/dog/icon-dow.png" onClick={() => handleScroll('section3')} className="flex justify-center mx-auto mt-[55px] video-play-button-ani cursor-pointer" alt="dog" />
                            </div>
                        </div>
                    </div>

                    <div style={growBanner} className="pt-[230px] pb-[40px]" data-aos="fade-up"
                    >
                        <h1 className="text-center text-[#4f2900]  md:text-[40px] text-[30px]">Caring for Digestive Health is Crucial</h1>
                        <div className="flex items-center gap-[20px] justify-center pt-[58px] flex-wrap">
                            {childhoodData.map((food, index) => (
                                <Link key={index} to={food.link}>
                                    <div className="max-w-[290px] w-full">
                                        <img src={food.imageSrc} className="" alt={food.altText} />
                                        {food.texts.map((text, idx) => (
                                            <p
                                                key={idx}
                                                className={`text-[#653426] ${idx > 0 ? 'pt-[10px]' : ''} text-[20px] leading-[32px] text-center`}
                                            >
                                                {text}
                                            </p>
                                        ))}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div id="section3" className="kit-container w-full  md:h-[729px] h-[544px] relative flex items-end justify-center translate-y-[150px]" data-aos="fade-up"
                    >
                        <img src='/image/dog/15759443100698f3x6a.png' className="w-full  md:h-[729px] h-[544px]" alt="banner" />
                        <div className="absolute md:bottom-[80px] bottom-[70px] md:px-[200px] px-[60px]">
                            <div className="text-center">
                                <h1 className="text-center text-white md:text-6xl text-4xl">Adulthood</h1>
                                <p className="text-center text-white md:text-[21px] text-[16px] pt-[16px]">Small dogs enter adulthood after 12 months, with fully developed digestive systems capable of absorbing nutrients well. Large dogs enter adulthood after 18 months, requiring diets that meet their caloric and activity needs. Due to the stress of their weight, special care for their bones and joints is also necessary.

                                </p>
                                <img src="/image/dog/icon-dow.png" onClick={() => handleScroll('section4')} className="flex justify-center mx-auto mt-[55px] video-play-button-ani cursor-pointer" alt="dog" />
                            </div>
                        </div>
                    </div>

                    <div style={growBanner} className="pt-[230px] pb-[40px]" data-aos="fade-up"
                    >
                        <h1 className="text-center text-[#4f2900]  md:text-[40px] text-[30px]">Eat Well, Play Well
                        </h1>
                        <div className="flex items-center gap-[20px] justify-center pt-[58px] flex-wrap">
                            {adulthoodData.map((food, index) => (
                                <Link key={index} to={food.link}>
                                    <div className="max-w-[290px] w-full">
                                        <img src={food.imageSrc} className="" alt={food.altText} />
                                        {food.texts.map((text, idx) => (
                                            <p
                                                key={idx}
                                                className={`text-[#653426] ${idx > 0 ? 'pt-[10px]' : ''} text-[20px] leading-[32px] text-center`}
                                            >
                                                {text}
                                            </p>
                                        ))}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>


                    <div id="section4" className="kit-container w-full  md:h-[729px] h-[544px] relative flex items-end justify-center translate-y-[150px]" data-aos="fade-up"
                    >
                        <img src='/image/dog/15759444014524izcbe.png' className="w-full  md:h-[729px] h-[544px]" alt="banner" />
                        <div className="absolute md:bottom-[80px] bottom-[70px] md:px-[200px] px-[60px]">
                            <div className="text-center">
                                <h1 className="text-center text-white md:text-6xl text-4xl">Ageing Stage
                                </h1>
                                <p className="text-center text-white md:text-[21px] text-[16px] pt-[16px]">Dogs enter the ageing stage after 7 years, experiencing gradual decline in bodily functions. Common issues include obesity and reduced digestive capacity. They need a diet high in protein, easy to digest, and fortified with calcium to prevent muscle loss and provide essential nutrients for bones and joints.



                                </p>
                                <img src="/image/dog/icon-dow.png" onClick={() => handleScroll('section5')} className="flex justify-center mx-auto mt-[55px] video-play-button-ani cursor-pointer" alt="dog" />
                            </div>
                        </div>
                    </div>

                    <div style={growBanner2} id='section5' className="pt-[249px] pb-[140px]" data-aos="fade-up"
                    >
                        <h1 className="text-center text-[#4f2900]  md:text-[40px] text-[30px]">Greater Love and Carin
                        </h1>
                        <div className="flex items-center gap-[20px] justify-center pt-[58px] flex-wrap">
                            {oldAgeData.map((food, index) => (
                                <Link key={index} to={food.link}>
                                    <div className="max-w-[290px] w-full">
                                        <img src={food.imageSrc} className="" alt={food.altText} />
                                        {food.texts.map((text, idx) => (
                                            <p
                                                key={idx}
                                                className={`text-[#653426] ${idx > 0 ? 'pt-[10px]' : ''} text-[20px] leading-[32px] text-center`}
                                            >
                                                {text}
                                            </p>
                                        ))}
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <img src="/image/dog/back-up.png" onClick={() => handleScroll('section6')} className="flex justify-center mx-auto pt-[200px] video-play-button-ani cursor-pointer" alt="dog" />
                    </div>
                </div>
            </div>
        </>
    )
}