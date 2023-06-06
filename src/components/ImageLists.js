import React from "react";
import ImageCard from "./ImageCard";
import "./ImageLists.css";
export default function ImageLists(props) {
  console.log(props.images);
  const img = props.images.map((image) => {
    return (
      <ImageCard
        key={image.id}
        // src={image.urls.regular}
        // alt={image.alt_description}
        image={image}
      />
    );
  });
  return <div className="image-list">{img}</div>;
}
