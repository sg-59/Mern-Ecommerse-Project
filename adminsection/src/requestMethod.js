import axios from "axios";


const BASE_URL="http://localhost:5000/api/"

    // var TOKEN =(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).userInfo).accessToken)

    if (localStorage.getItem("infiniteScrollEnabled") != null) {
        var TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
        ? (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).userInfo).accessToken)
        : null;
      }

  console.log('user Request ?',TOKEN);

export const publicRequest=axios.create({
    baseURL:BASE_URL,
});

export const userRequest=axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})