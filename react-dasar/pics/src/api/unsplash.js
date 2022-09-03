import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 2m6wDpQLldiPbuQU2eswOHJXRhwEWeTDiNv3ZwQ0-Mg",
  },
});
