import axios from "axios";

    export const API_URL = "http://localhost:3000/api/file";

    function getToken(){
        var token = localStorage.getItem('token')
        const headers = {
            'Authorization': `Bearer ${token}`
          };

        return headers
    }


export const createFile = async (file) => {
    try {
        const headers = getToken()
        console.log(file)
   
        const res = await axios.post(API_URL, file , { headers }  );
        // console.log(res)
        return res;
    }  catch (error) {
        console.error('createFile error:', error.message);
        throw error;
      }

};