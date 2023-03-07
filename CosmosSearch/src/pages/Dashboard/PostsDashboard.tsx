import { useContext } from "react"
import { Header } from "../../components/Header/Header"
import { Post } from "../../components/Posts/Post/Post"
import { LinksContext } from "../../contexts/LinksContext/LinksContext"
import { ButtonNewPost, PostListStyleDashboardPosts } from "./PostsDashboardStyled"

export const PostsDashboard = () => {
    const { burgerOpen, mainComponent } = useContext(LinksContext);
    
    return(
        <div>
            <Header path="userDeslogged"/>
            <PostListStyleDashboardPosts>   
                <Post />
                <ButtonNewPost>+ New Post</ButtonNewPost>
            </PostListStyleDashboardPosts> 
        </div> 
    )
}