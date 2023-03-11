import React from "react";
import { IFormPostRegister } from "../UserContext/@types_User";

export interface IPost {
  id: number;
  userId: number;
  title: string;
  name: string;
  topic: string;
  body: string;
}

export interface IPostContext {
  posts: IPost[];
  userPosts: IPost[];
  getAllPosts: () => Promise<void>;
  getAllUserPosts: (id: number) => Promise<void>;
  createPost: (data: IFormPostRegister) => Promise<void>;
  deletePost: (postId: number) => Promise<void>;
  actualPostId: number;
  setActualPostId:  React.Dispatch<React.SetStateAction<number>>;
}

