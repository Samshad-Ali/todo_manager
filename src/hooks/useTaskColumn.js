import { useContext } from "react";
import { taskContext } from "../lib/taskContext";

const useTaskColumn = (status) => {
    const { tasks,setTasks } = useContext(taskContext);
    const btnHandler=(id,newStatus)=>{
      const updatedTasks = tasks.map(task=>{
        if(task.id===id){
          return {...task,status:newStatus,time:newStatus==='completed' && new Date().toLocaleString()};
        }
        return task;
      })
      setTasks(updatedTasks)
    }
    const filteredTasks = tasks.filter((task) => task.status === status);
  return{
    filteredTasks,btnHandler
  }
}

export default useTaskColumn;