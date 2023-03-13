import { useContext, useState } from "react";
import { string } from "yup";
import { IPost } from "../../contexts/PostContext/@typesPost";
import { PostContext } from "../../contexts/PostContext/PostContext";
import { SearchIcon } from "../Svgs/Svg";
import { SearchBarContainer } from "./SearchBarStyled";

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
