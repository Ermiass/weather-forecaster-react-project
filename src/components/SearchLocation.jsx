import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
.search-input {
  border: 3px solid black;
  height: 20px;
  width: 250px;
  text-align: center;
  border-radius: 50px;
  padding-left: 25px;
  margin-bottom: 35px;
}
.searchBtn {
  box-shadow: 2px 2px 5px black;
  border: none;
  border-radius: 10px;
  padding: 5px;
  background-color: rgb(116, 116, 244);
}
`;

const SearchLocation = ({ searchTerm, handleSearch, handleFormSubmit }) => {
  // const [isDisabled, setIsDisabled] = useState(false);
  // const handleClick = () => {
  //   setIsDisabled(!isDisabled);
  // };
  let disabled = false;
  if (searchTerm === '') {
    disabled = true;
  }
  return (
    <StyledForm onSubmit={handleFormSubmit} data-testid="ermias">
      <label htmlFor="searchTerm">
        <input
          className="search-input"
          title="label"
          type="text"
          name="searchTerm"
          id="searchTerm"
          placeholder="Dumfries VA"
          value={searchTerm}
          onChange={handleSearch}
          data-testid="azur"
        />
      </label>
      <button disabled={disabled} type="submit" className="searchBtn">Search</button>
    </StyledForm>
  );
};

export default SearchLocation;
