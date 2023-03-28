import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [useDebounced, setUseDebounced] = useState(value);
    useEffect(() => {
        const handle = setTimeout(() => {
            setUseDebounced(value);
        }, delay);

        return () => {
            clearTimeout(handle);
        };
    }, [value]);

    return useDebounced;
}

export default useDebounce;
