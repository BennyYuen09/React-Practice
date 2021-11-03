import axios from "axios";

const api = axios.create({
    baseURL:'https://618225f784c2020017d89cb2.mockapi.io/api/'
})

export default api;