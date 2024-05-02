import React from 'react';
import { Link } from 'react-router-dom';

const ReadMoreLink = ({ link, imageSrc, altText, children }) => {
    return (
        <Link to={link} className="mt-[50px] flex items-center gap-[12px] hover-text">
            <img src={imageSrc} alt={altText || 'Read More'} />
            {children}
        </Link>
    );
}

export default ReadMoreLink;
