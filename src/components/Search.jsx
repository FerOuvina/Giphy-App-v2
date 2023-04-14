import React, { useState } from "react";
import useLocation from "wouter/use-location";
import { AiOutlineFileSearch } from "react-icons/ai";
import "../stylesheets/Search.css";

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [path, setLocation] = useLocation();

  const input = document.querySelector(".input");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (keyword) {
      setLocation(`/Giphy-App-v2/search/${keyword}`);
      input.value = "";
    } else {
      return;
    }
  };
  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="formContainer__form">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search gifs here..."
          className="input"
        />
        <div className="formContainer__form--btnContainer">
          <button type="submit">
            <AiOutlineFileSearch />
          </button>
        </div>
      </form>
    </div>
  );
}
