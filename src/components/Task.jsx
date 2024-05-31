
const Task = ({task,btnHandler}) => {
  return (
        <div className="rounded-md border bg-white p-4 flex gap-4 justify-between items-center w-[80%]">
      <div className="flex-1">
        <h3 className="font-semibold">{task?.title}</h3>
        <p className="text-gray-700">{task?.description}</p>
      </div>
      {task?.status === 'pending' && (
        <button
        className="p-1 px-6 text-white bg-teal-600 hover:bg-teal-700 transition-all rounded-sm"
        onClick={() => btnHandler(task?.id, 'inProgress')}>Start</button>
      )}
      {task?.status === 'inProgress' && (
        <button
        className="p-1 px-6 text-white bg-yellow-600 hover:bg-yellow-700 transition-all rounded-sm"
        
        onClick={() => btnHandler(task?.id, 'completed')}>Complete</button>
      )}
      {task?.status === 'completed' && <span className="bg-green-200 font-semibold p-1 px-2 rounded-sm text-xs self-end">🎯 : {task?.time}</span>}

    </div>
  );
};

export default Task;
