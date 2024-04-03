import React, { useEffect, useState } from 'react'
import TaskList from './TaskList';
import Settings from './settings/Settings'
import {motion, AnimatePresence} from "framer-motion";

/**
 * Función para crear un componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */
const App = () => {
  
  const [dark, setDark] = React.useState(false);
  const [showSettings, setShowSettings] = useState(false);

  /**
   * Documentación del useEffect
   *Se crea una varibale de estando donde se almacena el valor de la configuración 
   *del localStorage
   */
  useEffect(() => {
    const config = JSON.parse(localStorage.getItem('config'))
    setDark(config.theme);
  }, []);


  /**
   * Función para intercambiar la variable de estado
   */
  const toggleDark = () => {
    setDark(!dark);
  }

  return (
    <div className={`${dark ? "dark": ''}`}>
      <div className={`h-screen p-4 flex-col  bg-gray-100 dark:bg-slate-900`}>
        <TaskList showSettings={showSettings} setShowSettings={setShowSettings}/>
        <AnimatePresence
          initial={false}
          onExitComplete={()=>null}
        >
          {showSettings && 
          <motion.div
            initial={{y: "100vh"}}
            animate={{y:"0"}}
            exit={{y:"100vh"}}
          >
            <Settings toggleDark={toggleDark}/>
          </motion.div>
          }
        </AnimatePresence>
      </div>
    </div>
    
  )
}

export default App
