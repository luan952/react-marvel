import React, { useState } from "react";
import { Container } from "./styles";

export function Search({ ...props }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(searchTerm);
  };

  return (
    <Container>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="search-input">Search Character:</label>
        <input
          type="text"
          id="search-input"
          className="search-input"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
}
