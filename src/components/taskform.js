import { useState } from "react";
import { createTask } from "../services/taskService";

function TaskForm() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskData = {
      title,
      description
    };

    try {
      await createTask(taskData);

      alert("Task Created Successfully");

      setTitle("");
      setDescription("");

    } catch (error) {
      console.log(error);
      alert("Failed to create task");
    }
  };

  return (
    <div>
      <h2>Add Task</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Task Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <br /><br />

        <textarea
          placeholder="Enter Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <br /><br />

        <button type="submit">
          Add Task
        </button>

      </form>
    </div>
  );
}

export default TaskForm;