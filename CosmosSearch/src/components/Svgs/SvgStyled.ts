import styled from "styled-components";

export const SvgStyled = styled.img`
  max-width: max-content;
  height: max-content;

  border: transparent;

  cursor: pointer;
`;

export const SvgStyledFliped = styled.img`
  max-width: max-content;
  height: 20px;

  border: transparent;
  
  transform: rotate(45deg);

  cursor: pointer;
`;

export const SvgPlusComment = styled.img`
  max-width: max-content;
  height: 20px;

  border: transparent;

  cursor: pointer;
`;

export const SvgCloseModal = styled.img`
  height: 100%;

  padding: 0;

  cursor: pointer;
`;

export const SvgLike = styled.img`
  max-width: max-content;
  height: max-content;

  transform: scale(1.1);

  border: transparent;

  cursor: pointer;

  transition: .25s;

  :hover {
    transform: scale(1.3);
  }
`

export const SvgSearch = styled.img`
  width: 100%;
  height: 20px;

  border: 2px solid var(--primary--blue);

  background-color: transparent;
`
export const SvgPosts = styled.img`
  width: 20px;
  height: 20px;

  background-color: transparent;
`
export const SvgForCloseInput = styled.img`
  width: 35px;
  height: 35px;

  background-color: transparent;
`
export const SvgThreeDots = styled.img`
  width: 15px;
  height: 15px;

  background-color: transparent;

  cursor: pointer;
`
export const SvgArrowRight = styled.img`
  width: 15px;
  height: 15px;

  background-color: transparent;

  transform: rotate(90deg);
 `

export const SvgForComments = styled.img`
  width: 15px;
  height: 15px;

  background-color: transparent;
 `