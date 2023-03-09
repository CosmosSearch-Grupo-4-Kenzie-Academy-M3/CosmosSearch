import { CloseModal } from "../../Svgs/Svg";
import {
  CommentDiv,
  CommentsList,
  ContentDiv,
  HeaderModal,
  InfosDiv,
  CloseButton,
  PostModalDivStyled,
  PostModalStyled,
} from "./PostModalStyled";

export const PostModal = () => {
  return (
    <PostModalDivStyled>
      <PostModalStyled>
        <CloseButton>
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
        <CommentsList>
          <p className="title__comments">Comments</p>
          <CommentDiv>
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
          </CommentDiv>
        </CommentsList>
        <InfosDiv>
          <p className="post__text__preview--mobile">data: xx/xx/xx</p>
          <p className="post__text__preview--mobile">topic: physics</p>
        </InfosDiv>
      </PostModalStyled>
    </PostModalDivStyled>
  );
};
