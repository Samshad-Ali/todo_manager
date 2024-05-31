import Task from "./Task";
import useTaskColumn from "../hooks/useTaskColumn";

const TaskColumn = ({ status, name, icon }) => {
  const {btnHandler,filteredTasks} = useTaskColumn(status)
  return (
    <div className="flex-1 p-4 flex items-center gap-2 flex-col">
      <h2 className="font-semibold text-lg self-start flex items-center gap-2">
        {name} <span className="text-teal-500"> {icon}</span>
      </h2>

      <div className="flex flex-col  gap-2 w-full  overflow-y-auto">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((item) => <Task btnHandler={btnHandler} task={item} key={item.id} />)
        ) : status === "pending" ? (
          <p className="text-red-500"> Task not found, Add first.</p>
        ) : (
          <p className="text-red-500">No, {name} Task is available</p>
        )}
      </div>
    </div>
  );
};

export default TaskColumn;
