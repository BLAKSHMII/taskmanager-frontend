import { useState, useEffect } from "react";
import {
  createTask,
  updateTask
} from "../services/taskService";

function TaskForm({ selectedTask }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {

    if (selectedTask) {

      setTitle(selectedTask.title);
      setDescription(
        selectedTask.description
      );

    }

  }, [selectedTask]);

  const handleSubmit = async (e) => {

    e.preventDefault();

    const taskData = {
      title,
      description
    };

    try {

      if (selectedTask) {

        await updateTask(
          selectedTask.id,
          taskData
        );

        alert("Task Updated Successfully");

      } else {

        await createTask(taskData);

        alert("Task Created Successfully");

      }

      setTitle("");
      setDescription("");

    } catch (error) {

      console.log(error);

      alert("Operation Failed");

    }
  };

  return (
    <div>

      <h2>
        {selectedTask
          ? "Edit Task"
          : "Add Task"}
      </h2>

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

          {selectedTask
            ? "Update Task"
            : "Add Task"}

        </button>

      </form>

    </div>
  );
}

export default TaskForm;