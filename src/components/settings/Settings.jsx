import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

const defaultConfig = {
    theme: 'dark',
    lang: 'es'
};

export default function Settings({toggleDark}) {

    const [config, setConfig] = useLocalStorage('config', defaultConfig);
    
    /**
     * Función para intercambiar light <-> dark tanto en localStorage como en la aplicación
     * @param {*} event Evento de click proveniente de React
     */
    const toggleMode = (event) => {
        event.preventDefault();
        if (config.theme === 'light') {
            // Si el tema actual es light, cambiamos a dark
            setConfig((oldConfig) => ({
                ...oldConfig,
                theme: 'dark',
            }));
        } else {
            // Si el tema actual no es light (probablemente dark), cambiamos a light
            setConfig((oldConfig) => ({
                ...oldConfig,
                theme: 'light',
            }));
        }
        toggleDark();
    };

    return (
        <div className='text-center'>
            <hr className='my-4'/>
            <h1 className='text-3xl text-pink-800 font-semibold mb-4'>App Settings</h1>
            <p className={'text-sm my-3 dark:text-gray-100'} >
                Actual Config:
                <br />
                <span className='italic'>Theme: {config.theme}</span>
                <br />
                <span className='italic'>Lang: {config.lang}</span>
            </p>
            <button className='btn mt-4' type='button' onClick={toggleMode}>
                Toggle DarkMode
            </button>
        </div>
    );
}
   
