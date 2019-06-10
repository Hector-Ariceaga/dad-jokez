import axios from "axios";

export default axios.create({
  baseURL: "https://icanhazdadjoke.com/",
  responseType: "json"
})
