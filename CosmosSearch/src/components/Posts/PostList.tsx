
import { useContext, useEffect } from 'react'
import { PostContext } from '../../contexts/PostContext/PostContext'
import { Post } from './Post/Post'
import { PostListStyled} from './PostListStyled'

export const Posts = () => {
  const {posts, getAllPosts} = useContext(PostContext)

  // useEffect(() => {
  //   getAllPosts()
  // }, [])
  useEffect(() => {
    getAllPosts()
  }, [posts])

  return (
    <PostListStyled className='container__pages'>
      {
        posts.map(post =>
          <Post key={post.id} body={post.body} name={post.name} topic={post.topic} postId={post.id} title={post.title} />
        )
      }
    </PostListStyled>
  )
}
