
import { useContext } from 'react'
import { Post } from './Post/Post'
import { PostListStyled} from './PostListStyled'

export const Posts = () => {  
  return (
    <PostListStyled className='container__pages'>
      <Post/>
      <Post/>
      <Post/>
    </PostListStyled>
  )
}
