/* eslint-disable no-console */
import axios from "axios";

const baseURL = "https://api.tvmaze.com/";

const api = axios.create({
  baseURL,
});

export default api;
