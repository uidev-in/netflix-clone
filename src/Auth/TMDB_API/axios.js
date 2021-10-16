import axios from "axios";

//creating a new instance of axios with a custom config.

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3',
});

export default instance;