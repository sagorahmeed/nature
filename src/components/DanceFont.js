const DanceFont = ({title,color}) => {
    return(
        <spa className={`uppercase 2xl:text-[155px] xl:text-[135px] lg:text-[125px] md:text-[100px] text-[80px] dancing-font ${color}`} style={{fontFamily: '"Caveat", cursive'}}>{title}</spa>
    )
}

export default DanceFont;