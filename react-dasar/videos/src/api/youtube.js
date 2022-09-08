import axios from "axios";
const KEY = "AIzaSyAzruStatb1eynrcM5zFCN0aU1nCifUIvE";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
