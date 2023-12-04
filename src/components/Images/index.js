import { useState, forwardRef } from 'react';
import image from '~/asset/images';
import PropTypes from 'prop-types';

const Images = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback, setFfallBack] = useState('');

    const hangdleError = () => {
        setFfallBack(image.no_image);
    };

    return <img ref={ref} {...props} src={fallback || src} alt={alt} onError={hangdleError} />;
});

forwardRef.prototype = {
    src: PropTypes.string,
    alt: PropTypes.string,
};

export default Images;
