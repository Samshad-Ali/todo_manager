import React from "react";
import { Toaster } from "react-hot-toast";
import AddTask from "./components/AddTask";
import TaskColumn from "./components/TaskColumn";
import { MdOutlinePendingActions } from "react-icons/md";
import { RiProgress6Line } from "react-icons/ri";
import { GoGoal } from "react-icons/go";

const App = () => {
  return (
    <>
      <Toaster />
      <div className=" w-full h-screen flex gap-4 p-2 sm:p-4 flex-col items-center">
        <h2 className="border-b-2 border-black text-xl font-bold">
          Task Management App
        </h2>
        <AddTask />
        <div className="w-full sm:w-[70%] lg:w-full bg-gray-50 h-[70%]  rounded-sm flex lg:flex-row flex-col gap-4 ">
          <TaskColumn
            status="pending"
            name="Pending Task"
            icon={<MdOutlinePendingActions color="#09D7DA" size={23} />}
          />
          <TaskColumn
            status="inProgress"
            name="In Progress"
            icon={<RiProgress6Line color="#E2CB08" size={23} />}
          />
          <TaskColumn
          status='completed'
            name="Completed"
            icon={<GoGoal color="#16B226" size={23} />}
          />
      
        </div>
      </div>
    </>
  );
};

export default App;
