import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";
if (localStorage.getItem("infiniteScrollEnabled") != null) {
  var TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentuser
  ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
      .currentuser.accesstoken
  : null;
}



export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
