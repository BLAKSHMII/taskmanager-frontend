import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const getTasks = async () => {
  const token = localStorage.getItem("access_token");

  return await axios.get(
    `${API_URL}/tasks/`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const createTask = async (taskData) => {
  const token = localStorage.getItem("access_token");

  return await axios.post(
    `${API_URL}/tasks/`,
    taskData,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};


export const updateTask = async (id, taskData) => {
  const token = localStorage.getItem("access_token");

  return await axios.put(
    `${API_URL}/tasks/${id}/`,
    taskData,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};