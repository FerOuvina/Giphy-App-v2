import React from "react";
import useLocation from "wouter/use-location";
import { AiOutlineFileSearch } from "react-icons/ai";
import { RATINGS } from "../services/settings";
import useForm from "../hooks/useForm";
import "../stylesheets/Search.css";

export default function Search({
  initialRating = RATINGS[0],
  initialKeyword = "",
}) {
  const [path, setLocation] = useLocation();

  const { keyword, rating, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating,
  });

  const input = document.querySelector(".input");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (keyword) {
      setLocation(`/Giphy-App-v2/search/${keyword}/${rating}`);
      input.value = "";
    } else {
      return;
    }
  };

  const handleChange = (event) => {
    updateKeyword(event.target.value);
  };

  const handleRatingChange = (event) => {
    updateRating(event.target.value);
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="formContainer__form">
        <select className="formContainer__form--select" onChange={handleRatingChange} value={rating}>
          <option disabled>Select Rating</option>
          {RATINGS.map((rating) => (
            <option key={rating}>{rating}</option>
          ))}
        </select>
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
