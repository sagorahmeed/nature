const DanceFont = ({title,color}) => {
    return(
        <spa className={`uppercase sm:text-[155px] text-[100px] dancing-font ${color}`} style={{fontFamily: '"Caveat", cursive'}}>{title}</spa>
    )
}

export default DanceFont;