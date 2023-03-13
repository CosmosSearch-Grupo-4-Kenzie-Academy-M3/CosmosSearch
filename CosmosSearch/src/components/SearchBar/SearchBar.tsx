import { useContext, useState } from "react";

import { SearchIcon } from "../Svgs/Svg";
import { SearchBarContainer } from "./SearchBarStyled";

import { PostContext } from "../../contexts/PostContext/PostContext";

export const SearchBar = () => {
  const { posts, setSearchedPosts, setValue, searchFunction } =
    useContext(PostContext);

  const onSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();

    const filteredPosts = posts.filter((post) => searchFunction(post));
    setSearchedPosts(filteredPosts);
  };

  return (
    <SearchBarContainer onClick={(e) => onSubmit(e)}>
      <input
        className="input__placeholder"
        type="text"
        placeholder="Type something..."
        onChange={(event) => setValue(event.target.value)}
      />
      <button>
        <SearchIcon />
      </button>
    </SearchBarContainer>
  );
};
