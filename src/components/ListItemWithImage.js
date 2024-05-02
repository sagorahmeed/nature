import React from 'react';
import { Link } from 'react-router-dom';

function ListItemWithImage({ src, alt, title, subtitle,link }) {
    return (
        <span className="col-span-6">
        <Link to={link} className="hover-text flex items-center gap-3">
            <img className="w-20 h-20" src={src} alt={alt} />
            <div>
                <p className="text-lg leading-none text-gray-600">{title}</p>
                <p className="text-sm leading-snug text-gray-600 mt-4">{subtitle}</p>
            </div>
        </Link>
        </span>
    );
}

export default ListItemWithImage;
