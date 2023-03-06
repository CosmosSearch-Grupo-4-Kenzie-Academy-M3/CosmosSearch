import React from 'react'
import { PostListStyled, PostStyled } from './PostsStyled'

export const Posts = () => {
  return (
    <PostListStyled className='container__pages'>
      <PostStyled/>
      <PostStyled/>
      <PostStyled/>
    </PostListStyled>
  )
}
