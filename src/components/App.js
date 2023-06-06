import React, { useState } from "react";
import unsplash from "../Api/unsplash";
import SearchBar from "./SearchBar";
import ImageLists from "./ImageLists";
const App = () => {
  const [images, setImages] = useState([]);
  const onSearchSubmit = async (value) => {
    console.log(value);
    const response = await unsplash.get("/search/photos", {
      params: {
        query: value,
      },
    });
    console.log(response.data.results);
    setImages(response.data.results);
  };
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
      {/* Found: {images.length} images */}
      <ImageLists images={images} />
    </div>
  );
};

export default App;
