import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 2m6wDpQLldiPbuQU2eswOHJXRhwEWeTDiNv3ZwQ0-Mg",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
