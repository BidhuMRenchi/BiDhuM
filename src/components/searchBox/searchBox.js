import React from "react";
import './searchBox.css';

const SearchBox = (props) => {
  return (
    <>
      <div>
        <input
          className={`search-box ${props.className}`}
          type="search"
          placeholder={props.placeholder}
          onChange={(e) => {
            props?.filterMon(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default SearchBox;
