import Axios from "axios";
import endpoints from "./endpoints";
const API = Axios.create({
  baseURL: `${endpoints.serverBaseURL}/api`,
});

export default API;
