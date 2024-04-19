import { Link } from "react-router-dom";


function Prodog() {

    const prodogBanner = {
        backgroundImage: "url('/image/prodog/pro-index.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    const productData = [
        {
            id: 1,
            product_img: '/image/prodog/162208665303888g6ac.png',
            product_details: 'Kaifanle picks mouth full price dog food (universal for the whole term)'
        }, {
            id: 2,
            product_img: '/image/prodog/162208665303888g6ac.png',
            product_details: 'Kaifanle picks mouth full price dog food (universal for the whole term)'
        }, {
            id: 3,
            product_img: '/image/prodog/162208665303888g6ac.png',
            product_details: 'Kaifanle picks mouth full price dog food (universal for the whole term)'
        }, {
            id: 4,
            product_img: '/image/prodog/162208665303888g6ac.png',
            product_details: 'Kaifanle picks mouth full price dog food (universal for the whole term)'
        },
    ]


    return (
        <>
            <div className="pt-[100px] relative">
                <div className="absolute top-[200px] left-0 flex">
                    <img src="/image/prodog/progou.png" alt="dog" />

                </div>
                <div className="absolute top-[200px] right-[80px] flex">
                    <div>
                        <img src="/image/dog/sg.png" alt="dog" />
                        <img src="/image/dog/sgy.png" alt="dog" />
                    </div>
                    <div>
                        <img src="/image/dog/sm.png" alt="dog" />
                        <img src="/image/dog/smy.png" alt="dog" />
                    </div>
                </div>
                <div style={prodogBanner} className="pt-[100px]">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="grid grid-cols-3 items-center gap-[30px] justify-between">
                            <div className="flex items-center gap-[10px] group">
                                <img src="/image/prodog/157588403343150moz8.png" className="block group-hover:hidden" alt="prodog" />
                                <img src="/image/prodog/15758841127498f4hno.png" className="hidden group-hover:block" alt="prodog" />
                                <div>
                                    <h3 className="text-[#555555] text-[24px] leading-[30px]">Dry food</h3>
                                    <p className="text-[#555555] text-[18px] leading-[24px] pt-[10px]">Dry food</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-[10px] group">
                                <img src="/image/prodog/15758844408979x6rwk.png" className="block group-hover:hidden" alt="prodog" />
                                <img src="/image/prodog/15758844536969vob5r.png" className="hidden group-hover:block" alt="prodog" />
                                <div>
                                    <h3 className="text-[#555555] text-[24px] leading-[30px]">Staple food wet food</h3>
                                    <p className="text-[#555555] text-[18px] leading-[24px] pt-[10px]">Staple food wet food</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-[10px] group">
                                <img src="/image/prodog/15758847337435l4t9b.png" className="block group-hover:hidden" alt="prodog" />
                                <img src="/image/prodog/15758847191871uh6zx.png" className="hidden group-hover:block" alt="prodog" />
                                <div>
                                    <h3 className="text-[#555555] text-[24px] leading-[30px]">Snacks and wet snacks</h3>
                                    <p className="text-[#555555] text-[18px] leading-[24px] pt-[10px]">Snacks and Snack wet food</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#fffbc2] border border-dashed border-[#e39000] mt-[85px] rounded-[999px] px-[50px] py-[5px] max-w-[1200px] mx-auto">
                        <div className="flex items-center justify-center">
                            <h1 className="text-[#81312d] text-[18px] leading-[70px]">Generation:</h1>
                            <ul className="flex items-center gap-[30px]">
                                <li className="text-[#81312d] text-[18px] leading-[70px]">all</li>
                                <li className="text-[#81312d] text-[18px] leading-[70px]">1-3 months old</li>
                                <li className="text-[#81312d] text-[18px] leading-[70px]">Under 12 months old</li>
                                <li className="text-[#81312d] text-[18px] leading-[70px]">1 year old and above</li>
                                <li className="text-[#81312d] text-[18px] leading-[70px]">7 years and above</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-[120px] pb-[200px]">
                        <div className="kit-container">
                            <ul className="flex items-center gap-5">
                                {productData.map((item) =>
                                    <li className="group text-center hover:-translate-y-1 transition-all duration-150" key={item.id}>
                                        <Link to='/'>
                                            <img src={item.product_img} alt="product img" />
                                            <p className="pt-[10px] text-white">{item.product_details}</p>
                                            <div className="flex  justify-center pt-[40px]">
                                                <div className="relative inline-block group-hover:hidden transition-all duration-150">
                                                    <img src="/image/prodog/hmore2.png" alt="pro" />
                                                    <div className=" justify-center items-center">
                                                        <img src="/image/prodog/a-jian.png" className="flex justify-center items-center absolute left-5 right-0 top-5 bottom-0" alt="pro" />
                                                    </div>
                                                </div>
                                                <div className="relative inline-block hidden group-hover:block transition-all duration-150">
                                                    <img src="/image/prodog/bmore.png" alt="pro" />
                                                    <div className=" justify-center items-center">
                                                        <img src="/image/prodog/r-jian.png" className="flex justify-center items-center absolute left-5 right-0 top-5 bottom-0" alt="pro" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prodog;
