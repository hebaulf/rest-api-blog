import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://restapimern-blog.herokuapp.com/api/",
});