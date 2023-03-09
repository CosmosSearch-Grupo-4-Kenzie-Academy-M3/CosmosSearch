import { createContext, useState } from "react";
import { api } from "../../services/api";
import { iChildren } from "../@childrenType";
import { IPost, IPostContext } from "./@typesPost";

export const PostContext = createContext({} as IPostContext)

export const PostProvider = ({children}: iChildren) => {
    const [posts, setPosts] = useState<IPost[]>([])
    const [userPosts, setUserPosts] = useState<IPost[]>([])

    const getAllPosts = async () => {
        try {
            const response = await api.get(`/posts`)
            setPosts(response.data) 
        } catch (error) {
            console.log("Erro")
        }        
    }

    const getAllUserPosts = async (userId: number) => {
        const token: string | null = localStorage.getItem("@CosmosSearch:TOKEN")
        if (token){
            try {
                const response = await api.get(`/users/${userId}/posts`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
            	})
                setUserPosts(response.data)
            } catch (error) {
                console.log("Erro, token expirado")
            }    
        }
    }

    const createPost = async (data: IPost) => {
        const token: string | null = localStorage.getItem("@CosmosSearch:TOKEN")
        if(token){
            try {
                const response = await api.post(`posts`, data, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setPosts([...posts, response.data]) 
            } catch (error) {
                console.log("Erro, token expirado")
            }
        }
    }

    const deletePost = async (postId: number) => {
        const token = localStorage.getItem("@CosmosSearch:TOKEN")
        if (token){
            try {
                await api.delete(`/posts/${postId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                getAllPosts()
            } catch (error) {
                console.log(error)
            } 
        }    
    }

    return(
        <PostContext.Provider value={{posts, userPosts, getAllPosts, getAllUserPosts, createPost, deletePost}}>
            {children}
        </PostContext.Provider>
    )
}