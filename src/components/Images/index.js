import { useState, forwardRef } from 'react';
import image from '~/asset/images';

const Images = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback, setFfallBack] = useState('');

    const hangdleError = () => {
        setFfallBack(image.no_image);
    };

    return <img ref={ref} {...props} src={fallback || src} alt={alt} onError={hangdleError} />;
});

export default Images;
