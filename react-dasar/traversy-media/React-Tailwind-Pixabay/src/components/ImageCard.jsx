import React from "react";

const ImageCard = ({ img }) => {
  let tags = img.tags;
  const myTags = tags.split(",");

  return (
    <div className="max-w-sm rounded  overflow-hidden shadow-lg">
      <img src={img.webformatURL} className="w-full" alt="image" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {img.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {img.views}
          </li>
          <li>
            <strong>Download: </strong>
            {img.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {img.likes}
          </li>
        </ul>
      </div>

      <div className="px-6 py-4">
        {myTags.map((myTag, i) => {
          return (
            <span
              key={i}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2"
            >
              #{myTag}
            </span>
          );
        })}

        {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag3
        </span> */}
      </div>
    </div>
  );
};

export default ImageCard;
