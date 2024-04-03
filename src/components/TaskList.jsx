import React, { useState } from 'react';
import {motion} from "framer-motion";
import {FaThList} from "react-icons/fa"

const TaskList = ({showSettings, setShowSettings}) => {
    const [taskList, setTaskList] = useState([]);
    const [newTask, setNewTask] = useState('');
    

    const addNewTask = () => {
        if (newTask === "") return;
        setTaskList([...taskList, { task: newTask, completed: false }]);
        setNewTask('');
    };

    const toggleCompletedItem = (index) => {
        const newTaskList = [...taskList];
        newTaskList[index].completed = !newTaskList[index].completed;
        setTaskList(newTaskList);
    };

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewTask();
    };

    const insertNewItemOnEnterKey = (e) => {
        if (e.key === 'Enter') {
            addNewTask();
        }
    };

    return (
        <div>
            <header className='flex justify-between'>
                <div className='flex items-center gap-2'> 
                    <FaThList className='text-2xl text-sky-700'/> 
                    <span className='text-2xl text-sky-700 font-semibold'> Task List</span>
                </div>
                <motion.button  
                    whileHover={{scale: 1.1}} 
                    whileTap={{scale: 0.9}}
                    className='btn' 
                    onClick={() => setShowSettings(!showSettings)}
                >
                    {!showSettings ? "Show Settings": "High settings"}
                </motion.button>
            </header>
            
            <form className = 'my-4' onSubmit={handleSubmit}>
                <input
                    className='shadow py-1 px-2 rounded-lg outline-none hover:bg-sky-200 transition-all duration-250 focus:ring-2 mr-2'
                    value={newTask}
                    onKeyDown={insertNewItemOnEnterKey}
                    onChange={handleInputChange}
                    type="text"
                    placeholder='New Task'
                />
                <button className='btn' type='submit'>Create Task</button>
            </form>
            {taskList.length === 0 ?
                <p className={'dark: text-gray-100'}>Task List is empty</p>
                : (
                    <ul>
                        {taskList.map((item, index) => (
                            <motion.li initial={{x: "100vw"}} animate={{x:0}} key={index}>
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={() => toggleCompletedItem(index)}
                                        checked={item.completed}
                                    />
                                    <span className={`ml-2 text-gray-800 dark:text-gray-100 text-sm static ${item.completed && "line-through"} `} >{item.task}</span> 
                                </label>
                            </motion.li>
                        ))}
                    </ul>
                )
            }
        </div>
    );
};

export default TaskList;