import { useContext, useState } from "react";

import { SearchIcon } from "../Svgs/Svg";
import { SearchBarContainer } from "./SearchBarStyled";

import { PostContext } from "../../contexts/PostContext/PostContext";
import { UserContext } from "../../contexts/UserContext/UserContext";

export const SearchBar = () => {
  const { posts, userPosts, setSearchedPosts, setValue, searchFunction } =
    useContext(PostContext);
  const { userState } = useContext(UserContext);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userState === "userLoggedInPerfil") {
      const filteredPosts = userPosts.filter((post) => searchFunction(post));
      setSearchedPosts(filteredPosts);
    }else{
      const filteredPosts = posts.filter((post) => searchFunction(post));
      setSearchedPosts(filteredPosts);
    }
  };

  return (
    <SearchBarContainer onSubmit={(e) => onSubmit(e)}>
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
