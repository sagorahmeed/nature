export default function LeftArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        
            className={`${className}`}
            style={{ ...style, display: "block", background: "url('/image/index-prev.png')", backgroundRepeat: 'no-repeat', width: "54px", height: '54px' }}
            onClick={onClick}
        />
    );
}


