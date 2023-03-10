import { useContext } from "react"
import { LinksContext } from "../../../../contexts/LinksContext/LinksContext"
import { UpdatePost } from "../../../Forms/UpdatePost/UpdatePost"
import { CloseModal } from "../../../Svgs/Svg"
import { CloseButton, HeaderModal } from "../PostModalStyled"
import { PostEditModalDivStyled, PostEditModalStyled } from "./PostEditStyled"

export const PostEdit = () => {
    const { setEditModalIsOpen } = useContext(LinksContext)

  return (
    <PostEditModalDivStyled>
        <PostEditModalStyled>
        <CloseButton onClick={() => setEditModalIsOpen(false)}>
          <CloseModal />
        </CloseButton>
        <HeaderModal>
        <p className="title__posts">Update</p>
        </HeaderModal>
        <UpdatePost></UpdatePost>

        
        </PostEditModalStyled>
    </PostEditModalDivStyled>
  )
}
