import { useEffect } from 'react';
import YouTube from 'react-youtube';

export default function VideoOverlay({ videoId, onClose }) {
    const opts = {
        height: '653',
        width: '1200',
        playerVars: {
            autoplay: 1,
        },
    };

       // Disable body scroll when the modal is open
       useEffect(() => {
        // Disable scrolling
        document.body.style.overflow = 'hidden';

        // Re-enable scrolling when the modal is closed
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
            <div className="">
        <div className="!fixed top-0 left-0 right-0 bottom-0 !w-full !h-full bg-black bg-opacity-75 flex justify-center items-center z-[999] modal">

                <div className='w-full relative max-w-[1200px] max-h-[675px] sm:mx-[40px] mx-[20px]'>
                <img src="/image/close2.png" alt="search" onClick={onClose} className='cursor-pointer transform hover:rotate-90 transition-all duration-700 bg-white sm:p-[10px] p-[6px] absolute right-2 top-2 rounded-full' />
                <YouTube videoId={videoId} opts={opts} />
            
            </div>
            </div>
        </div>
    );
}
