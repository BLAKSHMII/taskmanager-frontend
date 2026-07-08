import { useEffect, useState } from "react";
import { getTasks } from "../services/taskService";

function TaskList(tasks,onEdit) {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const response = await getTasks();

      setTasks(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Task List</h2>

      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button
            onClick={() => onEdit(task)}
          >
            Edit
          </button>
          <hr/>
        </div>
      ))}
    </div>
  );
}

export default TaskList;