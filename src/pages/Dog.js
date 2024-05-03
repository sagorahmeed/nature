import { Link } from "react-router-dom";


function Home() {

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
                                <div>
                                    <img src="/image/dog/sg.png" alt="dog" />
                                    <img src="/image/dog/sgy.png" alt="dog" />
                                </div>
                                <Link to='/cat'>
                                    <img src="/image/dog/sm.png" alt="dog" />
                                    <img src="/image/dog/smy.png" alt="dog" />
                                </Link>
                            </div>
                        </div>
                        <div className="lg:hidden block">
                            <div className=" flex justify-center">
                                <div>
                                    <img src="/image/dog/sg.png" alt="dog" />
                                    <img src="/image/dog/sgy.png" alt="dog" />
                                </div>
                                <Link to='/cat'>
                                    <img src="/image/dog/sm.png" alt="dog" />
                                    <img src="/image/dog/smy.png" alt="dog" />
                                </Link>
                            </div>
                        </div>
                        <div className="kit-container">
                            <h1 className="text-center text-white md:text-7xl text-4xl lg:pt-0 pt-[40px] mb-[40px]">“Care for dogs in different stages”</h1>
                            <img onClick={() => handleScroll('section1')} src="/image/dog/icon-dow.png" className="flex justify-center mx-auto pt-[35px] video-play-button-ani cursor-pointer cursor-pointer" alt="dog" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#fbf4d1] ">
                    <div id="section1" className="kit-container w-full  md:h-[729px] h-[544px] relative flex items-end justify-center translate-y-[150px]">
                        <img src='/image/dog/dog-bn.png' className="w-full  md:h-[729px] h-[544px]" alt="banner" />
                        <div className="absolute md:bottom-[80px] bottom-[70px] md:px-[200px] px-[60px]">
                            <div className="text-center">
                                <h1 className="text-center text-white md:text-6xl text-4xl mb-[40px]">weaning period</h1>
                                <p className="text-center text-white md:text-[21px] text-[16px] pt-[16px]">Dogs are in the weaning stage between 1 and 3 months old, and their immune system and gastrointestinal system are not yet mature, so they need to be provided with a diet that is easy to digest and rich in protein.</p>
                                <img src="/image/dog/icon-dow.png" onClick={() => handleScroll('section2')} className="flex justify-center mx-auto mt-[65px] video-play-button-ani cursor-pointer" alt="dog" />
                            </div>
                        </div>
                    </div>
                    <div style={growBanner} className="pt-[230px] pb-[40px]">
                        <h1 className="text-center text-[#4f2900]  md:text-[40px] text-[30px]">Learn about nutrition, the first step to growth</h1>
                        <div className="flex items-center gap-[20px] justify-center pt-[58px] flex-wrap">
                            <Link to='/'>
                                <div>
                                    <img src="/image/dog/15767477239019837iw.png" className="" alt="dog" />
                                    <p className="text-[#653426] text-[20px] leading-[32px] text-center">Let’s enjoy the feast of full price
                                    </p><p className="text-[#653426] pt-[10px] text-[20px] leading-[32px] text-center">puppy dog ​​food (milk cake)
                                    </p>
                                </div>
                            </Link>
                            <Link to='/'>
                                <div>
                                    <img src="/image/dog/1576747818271hum9d.png" className="" alt="dog" />
                                    <p className="text-[#653426] text-[20px] leading-[32px] text-center">Happy Pork Recipe
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div id="section2" className="kit-container w-full  md:h-[729px] h-[544px] relative flex items-end justify-center translate-y-[150px]">
                        <img src='/image/dog/15759442257484p4lch.png' className="w-full  md:h-[729px] h-[544px]" alt="banner" />
                        <div className="absolute md:bottom-[80px] bottom-[70px] md:px-[200px] px-[60px]">
                            <div className="text-center">
                                <h1 className="text-center text-white md:text-6xl text-4xl">infancy</h1>
                                <p className="text-center text-white md:text-[21px] text-[16px] pt-[16px]">Dogs are in their infancy between 3 and 12 months old, and their digestive tracts are not yet fully developed. They need to provide easily digestible diet to meet their growth and development needs.</p>
                                <img src="/image/dog/icon-dow.png" onClick={() => handleScroll('section3')} className="flex justify-center mx-auto mt-[55px] video-play-button-ani cursor-pointer" alt="dog" />
                            </div>
                        </div>
                    </div>

                    <div style={growBanner} className="pt-[230px] pb-[40px]">
                        <h1 className="text-center text-[#4f2900]  md:text-[40px] text-[30px]">Taking care of your stomach is important</h1>
                        <div className="flex items-center gap-[20px] justify-center pt-[58px] flex-wrap">
                            <Link to='/'>
                                <div className="max-w-[290px] w-full">
                                    <img src="/image/dog/15767479124257ts71m.png" className="" alt="dog" />
                                    <p className="text-[#653426] text-[20px] leading-[32px] text-center">										Kaifanle grain-free full-price
                                    </p><p className="text-[#653426] pt-[10px] text-[20px] leading-[32px] text-center">puppy									 food
                                    </p>
                                </div>
                            </Link>
                            <Link to='/'>

                                <div className="max-w-[290px] w-full">
                                    <img src="/image/dog/15767479124257ts71m.png" className="" alt="dog" />
                                    <p className="text-[#653426] text-[20px] leading-[32px] text-center">
                                        Kaifanle Global Gourmet Neapolitan cheese
                                    </p><p className="text-[#653426] pt-[10px] text-[20px] leading-[32px] text-center">flavor									 price puppy food
                                    </p>
                                </div>
                            </Link>
                            <Link to='/'>

                                <div className="max-w-[290px] w-full">
                                    <img src="/image/dog/15767480338158axf2u.png" className="" alt="dog" />
                                    <p className="text-[#653426] text-[20px] leading-[32px] text-center">
                                        Kaifanle Nutrition 3+1 Full Price
                                    </p><p className="text-[#653426] pt-[10px] text-[20px] leading-[32px] text-center">Juvenile Dog Food
                                    </p>
                                </div>
                            </Link>
                            <Link to='/'>

                                <div className="max-w-[290px] w-full">
                                    <img src="/image/dog/15767480798099sunji.png" className="" alt="dog" />
                                    <p className="text-[#653426] text-[20px] leading-[32px] text-center">
                                        Happy Pork Recipe
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div id="section3" className="kit-container w-full  md:h-[729px] h-[544px] relative flex items-end justify-center translate-y-[150px]">
                        <img src='/image/dog/15759443100698f3x6a.png' className="w-full  md:h-[729px] h-[544px]" alt="banner" />
                        <div className="absolute md:bottom-[80px] bottom-[70px] md:px-[200px] px-[60px]">
                            <div className="text-center">
                                <h1 className="text-center text-white md:text-6xl text-4xl">adulthood</h1>
                                <p className="text-center text-white md:text-[21px] text-[16px] pt-[16px]">Small dogs enter adulthood after 12 months of age, and their digestive systems are mature and can better absorb nutrients; large dogs enter adulthood after 18 months of age, and their diet needs to meet the calories and amount of exercise; at the same time, due to the pressure caused by weight, Bones and joints need special care.

                                </p>
                                <img src="/image/dog/icon-dow.png" onClick={() => handleScroll('section4')} className="flex justify-center mx-auto mt-[55px] video-play-button-ani cursor-pointer" alt="dog" />
                            </div>
                        </div>
                    </div>

                    <div style={growBanner} className="pt-[230px] pb-[40px]">
                        <h1 className="text-center text-[#4f2900]  md:text-[40px] text-[30px]">Only when you eat well can you have fun
                        </h1>
                        <div className="flex items-center gap-[20px] justify-center pt-[58px] flex-wrap">
                            <Link to='/'>
                                <div className="max-w-[290px] w-full">
                                    <img src="/image/dog/15767481758365gwwp7.png" className="" alt="dog" />
                                    <p className="text-[#653426] text-[20px] leading-[32px] text-center">										Kaifanle grain-free full-price
                                    </p><p className="text-[#653426] pt-[10px] text-[20px] leading-[32px] text-center">puppy									 food
                                    </p>
                                </div>
                            </Link>
                            <Link to='/'>

                                <div className="max-w-[290px] w-full">
                                    <img src="/image/dog/15767482332425wygd0.png" className="" alt="dog" />
                                    <p className="text-[#653426] text-[20px] leading-[32px] text-center">
                                        Kaifanle Global Gourmet Neapolitan cheese
                                    </p><p className="text-[#653426] pt-[10px] text-[20px] leading-[32px] text-center">flavor									 price puppy food
                                    </p>
                                </div>
                            </Link>
                            <Link to='/'>

                                <div className="max-w-[290px] w-full">
                                    <img src="/image/dog/15767482787116h2vwy.png" className="" alt="dog" />
                                    <p className="text-[#653426] text-[20px] leading-[32px] text-center">
                                        Kaifanle Nutrition 3+1 Full Price
                                    </p><p className="text-[#653426] pt-[10px] text-[20px] leading-[32px] text-center">Juvenile Dog Food
                                    </p>
                                </div>
                            </Link>
                            <Link to='/'>

                                <div className="max-w-[290px] w-full">
                                    <img src="/image/dog/15767483199805fzzpi.png" className="" alt="dog" />
                                    <p className="text-[#653426] text-[20px] leading-[32px] text-center">
                                        Happy Pork Recipe
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>


                    <div id="section4" className="kit-container w-full  md:h-[729px] h-[544px] relative flex items-end justify-center translate-y-[150px]">
                        <img src='/image/dog/15759444014524izcbe.png' className="w-full  md:h-[729px] h-[544px]" alt="banner" />
                        <div className="absolute md:bottom-[80px] bottom-[70px] md:px-[200px] px-[60px]">
                            <div className="text-center">
                                <h1 className="text-center text-white md:text-6xl text-4xl">old age
                                </h1>
                                <p className="text-center text-white md:text-[21px] text-[16px] pt-[16px]">Dogs enter old age after the age of 7, and their body functions gradually deteriorate, and they are prone to problems such as obesity and reduced digestive capacity of the gastrointestinal tract. It is necessary to provide high-protein, easy-to-digest, calcium-supplemented meals to reduce muscle loss in elderly dogs, and at the same time Provides bone and joint nutrition.



                                </p>
                                <img src="/image/dog/icon-dow.png" onClick={() => handleScroll('section5')} className="flex justify-center mx-auto mt-[55px] video-play-button-ani cursor-pointer" alt="dog" />
                            </div>
                        </div>
                    </div>

                    <div style={growBanner2} id='section5' className="pt-[249px] pb-[140px]">
                        <h1 className="text-center text-[#4f2900]  md:text-[40px] text-[30px]">More love and care
                        </h1>
                        <div className="flex items-center gap-[20px] justify-center pt-[58px] flex-wrap">
                            <Link to='/'>
                                <div className="max-w-[290px] w-full">
                                    <img src="/image/dog/15767483552762sv0ty.png" className="" alt="dog" />
                                    <p className="text-[#653426] text-[20px] leading-[32px] text-center">
                                        KaiFan Le Tian Di Feast Full Price 									Kaifanle grain-free full-price
                                    </p><p className="text-[#653426] pt-[10px] text-[20px] leading-[32px] text-center">Dog Food (Full Period of Beautiful Dogs)																		 food
                                    </p>
                                </div>
                            </Link>
                            <Link to='/'>

                                <div className="max-w-[290px] w-full">
                                    <img src="/image/dog/15767483908148rgpio.png" className="" alt="dog" />
                                    <p className="text-[#653426] text-[20px] leading-[32px] text-center">

                                        Nori full price
                                    </p><p className="text-[#653426] pt-[10px] text-[20px] leading-[32px] text-center">senior dog food									</p>
                                </div>
                            </Link>
                            <Link to='/'>
                                <div className="max-w-[290px] w-full">
                                    <img src="/image/dog/15767484221989hnywr.png" className="" alt="dog" />
                                    <p className="text-[#653426] text-[20px] leading-[32px] text-center">
                                        Happy Pork Recipe
                                    </p>

                                </div>
                            </Link>
                        </div>
                        <img src="/image/dog/back-up.png" onClick={() => handleScroll('section6')} className="flex justify-center mx-auto pt-[55px] video-play-button-ani cursor-pointer" alt="dog" />
                    </div>



                </div>
            </div>
        </>
    )
}

export default Home;
