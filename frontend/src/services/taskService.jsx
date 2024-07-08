import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

export const createtask = async (userData) => {
  const response = await axios.post(`${API_URL}/create`, userData);
  return response.data;
};

export const getTasks = async () => {
    const response = await axios.get(`${API_URL}/getAll`);
    return response.data;
  };

  export const addComment = async (taskId, comment, user, token) => {
    const commentD = { comment, user }; // Ensure this matches the backend's expected structure
    try {
      console.log("reached adComment");
      console.log("taskId: " + taskId + " comment: " + commentD.comment + " userEmail: " + user)
      const response = await axios.post(`${API_URL}/${taskId}/comments`, commentD,{
        headers: {
          'x-auth-token': token
        }
      
      });
      console.log("reached taskService")
      console.log("response:")
      console.log(response)
      console.log("response data:")
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error("Error adding comment:", error.response ? error.response.data : error.message);
      throw error; // Re-throw the error to be handled by the caller
    }
  };