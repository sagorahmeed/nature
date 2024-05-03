import YouTube from 'react-youtube';

export default function VideoOverlay({ videoId, onClose }) {
    const opts = {
        height: '653',
        width: '1200',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-[99]">
            <div className='w-full relative max-w-[1200px] max-h-[675px]'>
            <img src="/image/close2.png" alt="search" onClick={onClose} className='cursor-pointer transform hover:rotate-90 transition-all duration-700 bg-white p-[10px] absolute right-2 top-2 rounded-full' />
            <YouTube videoId={videoId} opts={opts} />
            </div>
        </div>
    );
}
