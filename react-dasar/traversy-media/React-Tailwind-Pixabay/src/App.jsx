import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  const api_key = "17291291-0d998009e97b6614c5511e6ea";

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await axios.get(
          `https://pixabay.com/api/?key=${api_key}&q=${term}`
        );

        setIsLoading(false);

        setImages(data.hits);
      };

      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, [term]);

  const renderImage = images.map((img) => {
    return <ImageCard key={img.id} img={img} />;
  });
  return (
    <div className="container mx-auto">
      <ImageSearch setTerm={setTerm} />

      {!isLoading && images.length === 0 && <h1>Image Not Found</h1>}
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">{renderImage}</div>
      )}
    </div>
  );
};

export default App;
