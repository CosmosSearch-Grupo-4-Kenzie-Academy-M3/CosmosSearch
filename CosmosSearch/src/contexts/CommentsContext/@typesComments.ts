export interface IAllComments {
    id: number,
    name: string,
    postId: number,    
    userId: number,
    text: string,    
};

export interface IComments {
    id?: number;
    postId?: number;
    text?: string;
    postDate?: Date;
    readAllComments: (postId: number) => Promise<void>;
    allComments: IAllComments[],    
    setAllComments: React.Dispatch<React.SetStateAction<IAllComments[]>>
}

