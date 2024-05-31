import React, { useEffect, useState } from 'react'
import { taskContext } from './taskContext';

const ContextWrapper = ({children}) => {
  const savedData = JSON.parse(localStorage.getItem('tasks'));
    const [tasks,setTasks] = useState( savedData ? savedData : []);
    useEffect(()=>{
      localStorage.setItem('tasks',JSON.stringify(tasks))
    },[tasks])
  return (
    <taskContext.Provider 
    value={{tasks,setTasks}}
    >{children}</taskContext.Provider>
  )
}

export default ContextWrapper