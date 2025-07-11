import {useState, useEffect} from 'react';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        handleResize(); // Set initial size
        
        window.addEventListener('resize', handleResize);
        const cleanUp = () => {
            console.log('runs if a useEffect dependency changes');
            window.removeEventListener('resize', handleResize);
        }

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return windowSize;
}

export default useWindowSize;
