import { useNavigate } from "react-router-dom";
import TaskList from "../components/tasklist";
import TaskForm from "../components/taskform";
import { useState } from "react";
function Dashboard() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(
      "access_token"
    );

    navigate("/");
  };

  const [selectedTask, setSelectedTask] =
    useState(null);

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome to Task Manager</p>
      <TaskForm />
      <hr></hr>
      <TaskList />

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;