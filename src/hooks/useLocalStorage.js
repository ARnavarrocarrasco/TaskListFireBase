import { useState, useEffect} from 'react';

const useLocalStorage = (key, defaultValue = null) => {
    const [value, setValue] = useState((initialState) => {
        try{
            const item = localStorage.getItem(key);
            if(item !== null) {
                return JSON.parse(item)
            }
        } catch (error) {
            return defaultValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));

    }, [key, value]);

    return [value, setValue];
} 

export default useLocalStorage;