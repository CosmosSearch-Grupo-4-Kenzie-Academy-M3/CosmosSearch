export interface IPost {
    id?: number;
    title: string;
    topic: string;
    body: string;
    userId?: number;
}

export interface IPostContext {
    posts: IPost[];
    userPosts: IPost[];
    getAllPosts: () => Promise<void>;
    getAllUserPosts: (id: number) => Promise<void>;
    createPost: (data: IPost) => Promise<void>;
    deletePost: (postId: number) => Promise<void>
}