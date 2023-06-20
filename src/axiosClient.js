import axios from 'axios'


//Δημιουργία ενός axiosClient με σκοπό την αποστολή HTTP requests στο API
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,       //BaseURL του API
});

export default axiosClient;