import { Link, useLocation } from "react-router-dom";
import productData from '../JSON/Product.json';
import AOS from 'aos';
import { useEffect } from "react";
import catData from '../JSON/catData.json'
import { Helmet } from "react-helmet";
const { weaningPeriodData, childhoodData, adulthoodData, oldAgeData } = catData

export default function Cat() {
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
    const catBanner = {
        backgroundImage: "url('/image/cat-banner.png')",
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
         <Helmet>
            <title>Care for Cat | Kitchen Flavor</title>
            <meta name="description" content="Kitchen Flavor Brand Official Website | Bridge Pet Care Products | Pet Food Manufacturer Company"/>
        </Helmet>
            <div>
                <div style={catBanner} id="section6" className="lg:pt-[160px] md:pt-[80px] pt-[20px] relative">
                    <div className="2xl:py-[250px] xl:py-[250px] lg:py-[220px] py-[80px] relative bg-[#fbf4d1 z-[1] pt-[80px]">
                        <div className="lg:block hidden" 
                        >
                            <div className="absolute top-[0px] right-[80px] flex">
                            <Link to='/care-for-cat'>
                                    <img src="/image/dog/sm.png" style={{transform:'rotateY(165deg)'}} alt="dog" />
                                    <img src="/image/v1/cat-red.png" alt="dog" />
                                </Link>
                                <Link to='/care-for-dog'>
                                    <img src="/image/dog/sg.png" style={{transform:'rotateY(170deg)'}} alt="dog" />
                                    <img src="/image/v1/dog-yellow.png" alt="dog" />
                                </Link>
                             
                            </div>
                        </div>
                        <div className="lg:hidden block"
                        >
                            <div className="flex justify-center">
                            <Link to='/care-for-cat'>
                                    <img src="/image/dog/sm.png" style={{transform:'rotateY(165deg)'}} alt="dog" />
                                    <img src="/image/v1/cat-red.png" alt="dog" />
                                </Link>
                                                    <Link to='/care-for-dog'>
                                    <img src="/image/dog/sg.png" style={{transform:'rotateY(170deg)'}} alt="dog" />
                                    <img src="/image/v1/dog-yellow.png" alt="dog" />
                                </Link>
                               
                            </div>
                        </div>
                        <div className="kit-container" data-aos="zoom-in-up">
                            <h1 className="text-center text-white md:text-7xl text-4xl lg:pt-0 pt-[40px] mb-[40px]">“Caring for Cats at Every Life Stage
                            ”</h1>
                            <img onClick={() => handleScroll('section1')} src="/image/dog/icon-dow.png" className="flex justify-center mx-auto pt-[35px] video-play-button-ani cursor-pointer cursor-pointer" alt="dog" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#fbf4d1] pt-[80px]">
                    <div id="section1" className="kit-container w-full xl:h-[729px]  lg:h-[729px] h-[548px] relative flex items-end justify-center translate-y-[150px]" data-aos="fade-up"
                    >
                        <img src='/image/cat/15760552883394524ro.png' className="w-full xl:h-[729px]  lg:h-[729px] h-[548px]" alt="banner" />
                        <div className="absolute flex items-center justify-center h-full w-full md:px-[200px] px-[60px]">
                            <div className="text-center">
                                <h1 className="text-center text-white md:text-6xl text-4xl mb-[40px]">Weaning Phase</h1>
                                <p className="text-center text-white md:text-[21px] text-[16px] pt-[16px]">Kittens aged 1-3 months are in the weaning phase. Their immune systems and digestive systems are still developing, so they need a diet rich in easily digestible proteins.</p>
                                <img src="/image/dog/icon-dow.png" onClick={() => handleScroll('section2')} className="flex justify-center mx-auto mt-[65px] video-play-button-ani cursor-pointer" alt="dog" />
                            </div>
                        </div>
                    </div>
                    <div style={growBanner} className="2xl:pt-[230px] xl:pt-[150px] pt-[120px] pb-[100px]" data-aos="fade-up"
                    >
                        <h1 className="text-center text-[#4f2900]  md:text-[40px] text-[30px]">The Basics of Nutrition for Early Development</h1>
                        <div className="flex items-center gap-[20px] justify-center pt-[58px] flex-wrap">
                            {weaningPeriodData.map((food, index) => (
                                <Link key={index} to={food.link}>
                                    <div className="max-w-[290px] w-full">
                                        <img src={food.imageSrc} className="max-h-[290px] mx-auto" alt={food.altText} />
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

                    <div id="section2" className="kit-container w-full xl:h-[729px]  lg:h-[729px] h-[548px] relative flex items-end justify-center translate-y-[150px]" data-aos="fade-up"
                    >
                        <img src='/image/cat/15759446681948epqqz.png' className="w-full xl:h-[729px]  lg:h-[729px] h-[548px]" alt="banner" />
                        <div className="absolute flex items-center justify-center h-full w-full md:px-[200px] px-[60px]">
                            <div className="text-center">
                                <h1 className="text-center text-white md:text-6xl text-4xl">Kitten Development</h1>
                                <p className="text-center text-white md:text-[21px] text-[16px] pt-[16px]">During the 4-12 month period, kittens experience rapid growth and need a balanced diet with high protein and energy content to support their growth and activity levels.</p>
                                <img src="/image/dog/icon-dow.png" onClick={() => handleScroll('section3')} className="flex justify-center mx-auto mt-[55px] video-play-button-ani cursor-pointer" alt="dog" />
                            </div>
                        </div>
                    </div>

                    <div style={growBanner} className="2xl:pt-[230px] xl:pt-[150px] pt-[120px] pb-[100px]" data-aos="fade-up"
                    >
                        <h1 className="text-center text-[#4f2900]  md:text-[40px] text-[30px]">Guess What Little Kittens Love to Eat</h1>
                        <div className="flex items-center gap-[20px] justify-center pt-[58px] flex-wrap">
                            {childhoodData.map((food, index) => (
                                <Link key={index} to={food.link}>
                                    <div className="max-w-[290px] w-full">
                                        <img src={food.imageSrc} className="max-h-[290px] mx-auto" alt={food.altText} />
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

                    <div id="section3" className="kit-container w-full xl:h-[729px]  lg:h-[729px] h-[548px] relative flex items-end justify-center translate-y-[150px]" data-aos="fade-up"
                    >
                        <img src='/image/cat/157594472901911xb02.png' className="w-full xl:h-[729px]  lg:h-[729px] h-[548px]" alt="banner" />
                        <div className="absolute flex items-center justify-center h-full w-full md:px-[200px] px-[60px]">
                            <div className="text-center">
                                <h1 className="text-center text-white md:text-6xl text-4xl">Adulthood</h1>
                                <p className="text-center text-white md:text-[21px] text-[16px] pt-[16px]">
                                Cats enter adulthood after 12 months, with reduced activity levels from their younger years. They are prone to weight gain and may become picky eaters, necessitating diets that are easily digestible and appropriately energized. Hairballs and coat quality are common issues.
                                </p>
                                <img src="/image/dog/icon-dow.png" onClick={() => handleScroll('section4')} className="flex justify-center mx-auto mt-[55px] video-play-button-ani cursor-pointer" alt="dog" />
                            </div>
                        </div>
                    </div>

                    <div style={growBanner} className="2xl:pt-[230px] xl:pt-[150px] pt-[120px] pb-[100px]" data-aos="fade-up"
                    >
                        <h1 className="text-center text-[#4f2900]  md:text-[40px] text-[30px]">Congratulations! You're a Grown-Up Cat Now
                        </h1>
                        <div className="flex items-center gap-[20px] justify-center pt-[58px] flex-wrap">
                            {adulthoodData.map((food, index) => (
                                <Link key={index} to={food.link}>
                                    <div className="max-w-[290px] w-full">
                                        <img src={food.imageSrc} className="max-h-[290px] mx-auto" alt={food.altText} />
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


                    <div id="section4" className="kit-container w-full xl:h-[729px]  lg:h-[729px] h-[548px] relative flex items-end justify-center translate-y-[150px]" data-aos="fade-up"
                    >
                        <img src='/image/cat/15759447691956qmvjj.png' className="w-full xl:h-[729px]  lg:h-[729px] h-[548px]" alt="banner" />
                        <div className="absolute flex items-center justify-center h-full w-full md:px-[200px] px-[60px]">
                            <div className="text-center">
                                <h1 className="text-center text-white md:text-6xl text-4xl">Mature Stage
                                </h1>
                                <p className="text-center text-white md:text-[21px] text-[16px] pt-[16px]">From the age of 7, cats enter the mature stage with fading fur shine, gradual muscle weakening, less sturdy teeth, and a tendency toward laziness and obesity. They should be provided with diets that are easy to digest, chew, and have suitable energy content.</p>
                                <img src="/image/dog/icon-dow.png" onClick={() => handleScroll('section5')} className="flex justify-center mx-auto mt-[55px] video-play-button-ani cursor-pointer" alt="dog" />
                            </div>
                        </div>
                    </div>

                    <div style={growBanner2} id='section5' className="2xl:pt-[249px] xl:pt-[150px] pt-[120px] 2xl:pb-[140px] xl:pb-[20px]" data-aos="fade-up"
                    >
                        <h1 className="text-center text-[#4f2900]  md:text-[40px] text-[30px]">More Love and Care
                        </h1>
                        <div className="flex items-center gap-[20px] justify-center pt-[58px] flex-wrap">
                            {oldAgeData.map((food, index) => (
                                <Link key={index} to={food.link}>
                                    <div className="max-w-[290px] w-full">
                                        <img src={food.imageSrc} className="max-h-[290px] mx-auto" alt={food.altText} />
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




