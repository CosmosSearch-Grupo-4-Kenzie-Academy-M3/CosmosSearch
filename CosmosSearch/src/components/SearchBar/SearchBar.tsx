import { useContext, useState } from "react";

import { CloseModal, SearchIcon } from "../Svgs/Svg";
import { SearchBarContainer } from "./SearchBarStyled";

import { PostContext } from "../../contexts/PostContext/PostContext";
import { UserContext } from "../../contexts/UserContext/UserContext";

export const SearchBar = () => {
  const {
    posts,
    userPosts,
    setSearchedPosts,
    setValue,
    searchFunction,
    searchOpen,
    setSearchOpen,
    resetSearch,
  } = useContext(PostContext);
  const { userState } = useContext(UserContext);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userState === "userLoggedInPerfil") {
      const filteredPosts = userPosts.filter((post) => searchFunction(post));
      setSearchedPosts(filteredPosts);
    } else {
      const filteredPosts = posts.filter((post) => searchFunction(post));
      setSearchedPosts(filteredPosts);
    }
  };

  return (
    <>
      {searchOpen ? (
        <SearchBarContainer onSubmit={(e) => onSubmit(e)}>
          <div className="animation">
            <button
              className="close__button"
              type="button"
              onClick={(e) => resetSearch(e)}
            >
              <CloseModal />
            </button>
            <div className="searchbar__header">
              <input
                className="input__placeholder"
                type="text"
                placeholder="Type something..."
                onChange={(event) => setValue(event.target.value)}
              />
              <button className="search__border">
                <SearchIcon />
              </button>
            </div>
          </div>
        </SearchBarContainer>
      ) : (
        <SearchBarContainer>
          <button 
            className="animation--btn open__search  search__border--close"
            onClick={() => setSearchOpen(true)}
          >
            <SearchIcon />
          </button>
        </SearchBarContainer>
      )}
    </>
  );
};
