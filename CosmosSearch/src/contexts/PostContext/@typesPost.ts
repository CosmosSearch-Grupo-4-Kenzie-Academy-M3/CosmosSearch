import React from "react";
import { IFormPostRegister } from "../UserContext/@types_User";

export interface IPost {
  id: number;
  userId: number;
  title: string;
  name: string;
  topic: string;
  body: string;
  date: string;
  postLiked?: boolean
  likes?: number;
}

export interface IUpdatePost {
  body: string;
}

export interface IAllLikes {
  id: number;
  qnt: number;
  postId: number
}

export interface IPostContext {
  posts: IPost[];
  getAllPosts: () => Promise<void>;
  createPost: (data: IFormPostRegister) => Promise<void>;
  deletePost: (postId: number) => Promise<void>;
  actualPostId: number;
  setActualPostId: React.Dispatch<React.SetStateAction<number>>;
  likeClicked: boolean;
  setLikeClicked: React.Dispatch<React.SetStateAction<boolean>>;
  editPost: (postId: number, data: IUpdatePost) => Promise<void>;
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
  isSearch: boolean;
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
  searchedPosts: IPost[];
  setSearchedPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
  isDashboard: boolean;
  setIsDashboard: React.Dispatch<React.SetStateAction<boolean>>;
  searchFunction: (post: IPost) => IPost | undefined;
  searchOpen: boolean;
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  resetSearch: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  alterLikeCount: (likes: number, postId: number, postLiked: boolean) => void;
  mapPostsListInRelationWithPostsUsersOwners: (list: IPost[]) => IPost[]
}
