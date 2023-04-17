import React from "react";
import useLocation from "wouter/use-location";
import { AiOutlineFileSearch } from "react-icons/ai";
import { RATINGS } from "../services/settings";
import useForm from "../hooks/useForm";
import {
  FormContainer,
  FormContainer__Form,
  FormContainer__FormSelect,
  FormContainer__FormInput,
  FormContainer__FormBtn__Container,
  FormContainer__FormBtn__Btn,
} from "../styled components/Search";

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
    <FormContainer>
      <FormContainer__Form
        onSubmit={handleSubmit}
        className="formContainer__form"
      >
        <FormContainer__FormSelect onChange={handleRatingChange} value={rating}>
          <option disabled>Select Rating</option>
          {RATINGS.map((rating) => (
            <option key={rating}>{rating}</option>
          ))}
        </FormContainer__FormSelect>
        <FormContainer__FormInput
          onChange={handleChange}
          type="text"
          placeholder="Search gifs here..."
          className="input"
        />
        <FormContainer__FormBtn__Container>
          <FormContainer__FormBtn__Btn>
            <AiOutlineFileSearch />
          </FormContainer__FormBtn__Btn>
        </FormContainer__FormBtn__Container>
      </FormContainer__Form>
    </FormContainer>
  );
}
