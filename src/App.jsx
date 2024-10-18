import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  const taskHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;

    const newTask = { title, completed: false };
    setTasks([...tasks, newTask]);
    setTitle("");
    console.log(tasks)
  };

  const completeHandler = (index) => {
    const copyTasks = [...tasks];
    copyTasks[index].completed = !copyTasks[index].completed;
    setTasks(copyTasks);
    console.log(tasks)
  };

  let renderedTask = (
    <h1 className="text-blue-500 font-semibold text-xl">No pending tasks...</h1>
  );

  if (tasks.length > 0) {
    renderedTask = tasks.map((task, index) => (
      <div key={index} className="flex items-center p-5 rounded-xl shadow-md bg-gradient-to-r from-blue-500 to-blue-600 transform transition-transform ">
        <span
          onClick={() => completeHandler(index)}
          className={`w-6 h-6 rounded-full mr-4 cursor-pointer transition duration-200 ${task.completed ? "bg-green-500" : "bg-gray-300 hover:bg-blue-400"}`}></span>
        <span className={`flex-grow text-xl ${task.completed ? "line-through text-white" : "text-white"
          }`}>
          {task.title}
        </span>
        <button className="text-white opacity-70 mr-3 transition duration-300">
          ✏️
        </button>
        <button className="text-white opacity-70 transition duration-300">
          🗑️
        </button>
      </div>
    ));
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
          Todo List
        </h1>

        <div className="font-semibold text-blue-600 mb-4 text-center">
          <h2 className="text-lg">Task Completed: {tasks.filter((task) => task.completed).length}/
            {tasks.length}</h2>
        </div>

        <form onSubmit={taskHandler} className="flex items-center mb-6 w-full shadow-sm">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="What do you want to achieve today?"
            className="flex-grow px-5 py-4 border border-gray-200 bg-gray-100 text-gray-800 placeholder-gray-500 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-4 rounded-r-xl transition duration-300"
          >
            +
          </button>
        </form>

        <div className="space-y-4">
          {renderedTask}
        </div>
      </div>
    </div>
  );
};

export default App;
