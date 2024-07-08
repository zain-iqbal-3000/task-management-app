import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';
const API_URL_TASK = 'http://localhost:5000/api/tasks';

export const loginUser = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    console.log("response")
    console.log(response.data);
    return response.data;
};

export const registerUser = (userData) => {
    return axios.post(`${API_URL}/register`, userData);
};


export const getTasks = (token) => {
    const response =  axios.get(`${API_URL_TASK}/getTasks`, {
        headers: {
            'x-auth-token': token
        }
    });
    console.log("response!!")
    console.log(response)
    console.log("response data")
    console.log(response.data)
    return response.data;
};

export const addComment = (taskId, comment, token) => {
    return axios.put(`${API_URL_TASK}/tasks/${taskId}/comment`, { comment }, {
        headers: {
            'x-auth-token': token
        }
    });
};
