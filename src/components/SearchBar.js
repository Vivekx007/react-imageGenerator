import React, { useState } from "react";
const SearchBar = (props) => {
  // const onChangeInput = (event) => {
  //   console.log(event.target.value);
  // };
  const [term, setTerm] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(term);
    props.onSubmit(term);
  };
  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);

              // console.log(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};
export default SearchBar;
