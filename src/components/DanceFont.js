const DanceFont = ({title,color}) => {
    return(
        <spa className={`uppercase text-[155px] dancing-font ${color}`} style={{fontFamily: '"Caveat", cursive'}}>{title}</spa>
    )
}

export default DanceFont;