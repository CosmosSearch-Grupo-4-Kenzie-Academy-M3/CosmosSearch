import { useContext, useState } from "react";
import { PostContext } from "../../contexts/PostContext/PostContext";
import { SearchIcon } from "../Svgs/Svg";
import { SearchBarContainer } from "./SearchBarStyled";

export const SearchBar = () => {
  const { posts, setIsSearch, setSearchedPosts, value, setValue } =
    useContext(PostContext);

  const onSubmit = () => {
    setIsSearch(true);
    const filteredPosts = posts.filter(
      (post) => value === post.title || value === post.topic
    );
    setSearchedPosts(filteredPosts);
  };

  return (
    <SearchBarContainer>
      <input
       className="input__placeholder"
        type="text"
        placeholder="Type something..."
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={onSubmit}>
        <SearchIcon />
      </button>
    </SearchBarContainer>
  );
};
