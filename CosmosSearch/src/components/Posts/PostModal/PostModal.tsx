import { useContext, useState } from "react";
import { CommentsContext } from "../../../contexts/CommentsContext/CommentsContext";
import { LinksContext } from "../../../contexts/LinksContext/LinksContext";
import { CloseModal, PlusComment } from "../../Svgs/Svg";
import { CommentLi } from "./CommentLi/CommentLi";
import { CommentUl } from "./CommentUl/CommentUl";
import {
  CommentDiv,
  CommentsList,
  ContentDiv,
  HeaderModal,
  InfosDiv,
  CloseButton,
  PostModalDivStyled,
  PostModalStyled,
  NewCommentInput,
  NewCommentInputButton,
  DivInput,
} from "./PostModalStyled";

export const PostModal = () => {
  const { setModalIsOpen } = useContext(LinksContext);
  const { allComments, readAllComments } = useContext(CommentsContext);
  const [openCommentInput, setOpenCommentInput] = useState(false);
  return (
    <PostModalDivStyled>
      <PostModalStyled>
        <CloseButton onClick={() => setModalIsOpen(false)}>
          <CloseModal />
        </CloseButton>
        <HeaderModal>
          <p className="title__posts">Post Title</p>
          <p className="title__posts">User</p>
        </HeaderModal>
        <ContentDiv>
          <p className="post__text__preview--mobile">
            Texto completo do artigo da pessoa Aqui vai tudo que a pessoa quiser
            falar, um texto completo com todas as infos e tudo mais que ela
            quiser sugerir. Acho que fazer um scroll auto aqui é a ideia melhor
            ideia!O que voces acham?
          </p>
        </ContentDiv>
        {/* <CommentUl /> */}
        <CommentsList>
      <div className="comments__header">
        <p className="title__comments">Comments</p>
        <div
          className="plus__comment"
          onClick={() => setOpenCommentInput(!openCommentInput)}
        >
          <PlusComment />
        </div>
      </div>
      {openCommentInput ? (
        <DivInput>
          <NewCommentInput
            className="post__text__preview--mobile"
            type="text"
          />
          <NewCommentInputButton className="title__comments">
            ENVIAR
          </NewCommentInputButton>
        </DivInput>
      ) : (
        <></>
      )}
      <ul>
        {allComments.map(comment => <CommentLi key={comment.id} id={comment.id} name={comment.name} postId={comment.postId} userId={comment.id} body={comment.body} />)}
      </ul>
      
    </CommentsList>
  

          {/* comments.map ((comment) => {
            <CommentDiv>
            <p> </p>
            <span>
            comment.user
            </span>
            </CommentDiv>
          }) */}
          {/* <CommentDiv>
            <p className="post__text__preview--mobile">
              <span className="title__comments">User: </span>
              Opa parece estar ficando bem legal nossa aplicação!
            </p>
          </CommentDiv>
          <CommentDiv>
            <p className="post__text__preview--mobile">
              <span className="title__comments">User: </span>
              Opa parece estar ficando bem legal nossa aplicação! Vamos fazer um
              teste de tamanho para nosso comentário. Ainda não foi o suficiente
              para ativar o scroll. Vamos forçando até chegar lá. Consegui.
              Imaginando um comentário grande, com respostas de outros
              comentários e tudo mais Opa parece estar ficando bem legal nossa
              aplicação! Vamos fazer um teste de tamanho para nosso comentário.
              Ainda não foi o suficiente para ativar o scroll. Vamos forçando
              até chegar lá. Consegui. Imaginando um comentário grande, com
              respostas de outros comentários e tudo mais Opa parece estar
              ficando bem legal nossa aplicação! Vamos fazer um teste de tamanho
              para nosso comentário. Ainda não foi o suficiente para ativar o
              scroll. Vamos forçando até chegar lá. Consegui. Imaginando um
              comentário grande, com respostas de outros comentários e tudo mais
            </p>
          </CommentDiv>
          <CommentDiv>
            <p className="post__text__preview--mobile">
              <span className="title__comments">User: </span>
              Agora aquele comentário para ativar o scroll da lista de
              comentários!
            </p>
          </CommentDiv> */}
        
        <InfosDiv>
          <p className="post__text__preview--mobile">data: xx/xx/xx</p>
          <p className="post__text__preview--mobile">topic: physics</p>
        </InfosDiv>
      </PostModalStyled>
    </PostModalDivStyled>
  );
};
