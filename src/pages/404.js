

import React from 'react';
import { Link } from 'react-router-dom';



const heroBgImage = {
    backgroundImage: "url('/image/prodog/pro-index.jpg')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
};

const Error = () => {


    return (
        <div style={heroBgImage} className=''>
            <div className='kit-container'>
                <div className='pt-[70px] pb-[300px] text-center'>
                        <div class="m-auto py-16 min-h-screen flex items-center justify-center">
                            <div class="sm:rounded-lg pb-8">
                                <div class="text-center pt-8 pb-[120px]">
                                    <h1 class="text-9xl font-bold text-black">404</h1>
                                    <h1 class="text-6xl font-medium py-8">oops! Page not found</h1>
                                    {/* <p class="text-2xl pb-8 px-12 font-normal text-black">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p> */}
                                    <Link className='text-[#81312d]' to="/">Back to Home</Link>

                                    <img src='/image/cat-with-error.png' alt='error' className='max-w-[600px] w-full mx-auto pt-[50px] pb-[120px]'/>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    );
};

export default Error;
