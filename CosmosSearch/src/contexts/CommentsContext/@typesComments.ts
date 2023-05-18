export interface IAllComments {
  id: number;
  name: string;
  postId: number;
  userId: number;
  text: string;
}

export interface IComments {
  id?: number;
  postId?: number;
  text?: string;
  postDate?: Date;
  readAllComments: (postId: number) => Promise<void>;
  allComments: IAllComments[];
  setAllComments: React.Dispatch<React.SetStateAction<IAllComments[]>>;
  createNewComment: (data: INewComment, postId: string) => Promise<void>;
  deleteComment: (id:number) => Promise<void>;
  openCommentInput: boolean;
  setOpenCommentInput: React.Dispatch<React.SetStateAction<boolean>>;
  commentButtonIsRotate: boolean;
  setCommentButtonIsRotate: React.Dispatch<React.SetStateAction<boolean>>;
  editComment: (id: number, data: INewComment) => Promise<void>;
  commentWasEdited: boolean;
  setCommentWasEdited: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface INewComment {
  text: string;
}
