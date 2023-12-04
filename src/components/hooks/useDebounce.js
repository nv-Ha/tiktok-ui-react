import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [decounce, setDebounce] = useState(value);
    useEffect(() => {
        const hangdle = setTimeout(() => setDebounce(value), delay);
        return () => clearTimeout(hangdle);
    }, [value, delay]);

    return decounce;
}

export default useDebounce;
