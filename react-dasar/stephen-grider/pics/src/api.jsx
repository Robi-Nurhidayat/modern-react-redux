import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 2m6wDpQLldiPbuQU2eswOHJXRhwEWeTDiNv3ZwQ0-Mg",
    },
    params: {
      query: "food",
    },
  });

  console.log(response);

  return response;
};

export default searchImages;
