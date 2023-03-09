export interface IComments {
    id?: number;
    postId?: number;
    text?: string;
    postDate?: Date;
    readAllComments: (postId: number) => Promise<void>;
    allComments: {
        id: number,
        name: string,
        postId: number,
        text: string,
        userId: number    
    },
    setAllComments: React.Dispatch<React.SetStateAction<never[]>>


}