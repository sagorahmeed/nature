import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

export default function VideoOverlay({ videoId, onClose }) {

    const [opts, setOpts] = useState({
        height: '600',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    });
        // Update the video size based on the screen width
        useEffect(() => {
            const updateVideoSize = () => {
                if (window.innerWidth < 640) {
                    // Mobile
                    setOpts({
                        height: '350',
                        width: '100%',
                        playerVars: { autoplay: 1 },
                    });
                } else if (window.innerWidth < 1024) {
                    // Tablet
                    setOpts({
                        height: '400',
                        width: '100%',
                        playerVars: { autoplay: 1 },
                    });
                } else if (window.innerWidth < 1280) {
                    // Desktop
                    setOpts({
                        height: '553',
                        width: '100%',
                        playerVars: { autoplay: 1 },
                    });
                }
            };
    
            // Set the initial video size
            updateVideoSize();
    
            // Add event listener for window resizing
            window.addEventListener('resize', updateVideoSize);
    
            // Clean up the event listener on unmount
            return () => window.removeEventListener('resize', updateVideoSize);
        }, []);

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
        <div className="!fixed top-0 left-0 right-0 bottom-0 !w-full !h-full bg-black bg-opacity-75 flex justify-center items-center z-[999] modal">
                <div className='w-full relative max-w-[1200px] max-h-[675px] sm:mx-[40px] mx-[20px]'>
                <img src="/image/close2.png" alt="search" onClick={onClose} className='cursor-pointer transform hover:rotate-90 transition-all duration-700 bg-white sm:p-[10px] p-[6px] absolute right-2 top-2 rounded-full' />
                <YouTube videoId={videoId} opts={opts} />
            
            </div>
        </div>
    );
}
