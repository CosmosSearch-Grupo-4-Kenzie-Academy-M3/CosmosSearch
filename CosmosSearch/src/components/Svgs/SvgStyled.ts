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
