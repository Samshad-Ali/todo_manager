import { useContext, useState } from "react";
import { taskContext } from "../lib/taskContext";
import toast from "react-hot-toast";

const useAdd = () => {
    const initialFormData = {
        title: "",
        description: "",
        status:"pending",
        id: Math.random() * 100,
      };
      const [formData, setFormData] = useState(initialFormData);
      const { tasks, setTasks } = useContext(taskContext);
      const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const submitHandler = () => {
        if (formData.title.length > 0) {
          setTasks([...tasks, formData]);
          setFormData(initialFormData);
    
        } else {
          return toast.error("Title is required field.");
        }
      };
  return{changeHandler,formData,submitHandler}
}

export default useAdd;