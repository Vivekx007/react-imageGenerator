import React, { useState, useRef, useEffect } from "react";

export default function ImageCard(props) {
  const imageRef = useRef();
  const [spans, setSpan] = useState(0);
  useEffect(() => {
    imageRef.current.addEventListener("load", setSpans);
    console.log(imageRef);
  }, []);
  const setSpans = () => {
    console.log(imageRef.current.clientHeight);
    const height = imageRef.current.clientHeight;
    setSpan(Math.ceil(height / 10));
    // setSpan({ span });
  };
  const { urls, alt_description } = props.image;
  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} src={urls.regular} alt={alt_description} />
    </div>
  );
}
