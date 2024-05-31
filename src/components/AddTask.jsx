import useAdd from "../hooks/useAdd";

const AddTask = () => {
  const {submitHandler,changeHandler,formData} = useAdd();
  return (
    <div className=" w-full sm:w-[520px] flex flex-col border rounded-sm p-2 gap-2">
      <input
        onInput={changeHandler}
        value={formData.title}
        name="title"
        placeholder="Title..."
        className="bg-gray-100 outline-none border-none rounded-sm p-1 px-2"
        type="text"
        required
      />
      <textarea
        onChange={changeHandler}
        value={formData.description}
        name="description"
        placeholder="Description..."
        className="bg-gray-100 outline-none border-none rounded-sm p-1 px-2 resize-none"
      ></textarea>
      <button
        className="text-white bg-green-600 hover:bg-green-700 transition-all rounded-sm p-2"
        onClick={submitHandler}
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
