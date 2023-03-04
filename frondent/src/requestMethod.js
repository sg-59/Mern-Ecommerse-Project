import axios from "axios";

const BASE_URL="http://localhost:5000/api/"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjcxY2FjYjgyNTRiNmNiNWU4ZWE0YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzkyNzU1MSwiZXhwIjoxNjc4MTg2NzUxfQ.yqFOlrQVUX0qqSBQ2Z0p3-N7imGM7MOTsfonq6fWktI"

export const publicRequest=axios.create({
    baseURL:BASE_URL,
});

export const userRequest=axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})