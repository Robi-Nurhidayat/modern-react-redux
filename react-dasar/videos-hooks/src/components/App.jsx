import React, { useState } from "react";
import "./App.css";
import ListVideos from "./ListVideos";
import SearchBar from "./SearchBar";
import youtube from "./youtube";

const App = () => {
  const [video, setVideo] = useState([]);
  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    const { items } = response.data;
    setVideo(items);
  };

  return (
    <div className="container mx-auto mt-5">
      <SearchBar onTermSubmit={onTermSubmit} />
      <div className="grid grid-cols-2 mt-4 gap-x-6">
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          earum soluta maiores vero impedit, aspernatur voluptatem, doloribus
          saepe nisi voluptate itaque officiis nostrum, eligendi at veniam
          quaerat velit porro ad? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Debitis veritatis voluptatem itaque perspiciatis
          quibusdam. Beatae nisi assumenda eveniet eaque dolore vero soluta
          voluptatem voluptatibus sunt. Eum magni distinctio molestias iste.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius saepe,
          ea quidem inventore sit eligendi facere placeat adipisci. Autem
          nostrum cum laudantium ad, nobis accusantium asperiores cupiditate
          esse. Commodi, repellat!
        </div>
        <div>
          <ListVideos videos={video} />
        </div>
      </div>
    </div>
  );
};

export default App;
