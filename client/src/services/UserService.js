import axios from "axios";

export const API_URL = "http://localhost:3000/api/";


export const login = async (data) => {
    try {
        const res = await axios.post(`${API_URL}login`, data);
        console.log(res)
        return res;
    }  catch (error) {
        console.error('error:', error.message);
        throw error;
      }

};

export const register = async (data) => {
    try {
        const res = await axios.post(`${API_URL}register`, data);
        return res;
    }  catch (error) {
        console.error(' error:', error.message);
        throw error;
      }

};
