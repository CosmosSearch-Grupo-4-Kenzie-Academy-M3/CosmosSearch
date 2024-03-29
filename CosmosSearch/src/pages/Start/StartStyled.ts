import styled from "styled-components";

export const StartStyled = styled.div`
  min-height: 100vh;
  width: 100%;

  button {
    background-color: transparent;

    width: max-content;
  }

  .burger__div {
    height: 103px;
    width: 100%;

    margin-bottom: 68px;
    margin-top: 200px;

    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .links__start {
    display: flex;
    flex-direction: column;
    gap: var(--links-distance-line-to-text);

    :hover .links__line {
      width: 20px;
      opacity: .4;
    }
  }

  .links__hover {
    :hover .links__line {
      width: 20px;
      opacity: .4;
    }
  }

  .links__start--desktop {
    display: none;
  }

  .top__start {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .top__start--desktop {
    display: none;
  }

  @media (min-width: 441px) {
    .top__start {
      align-items: flex-start;
    }
  }

  @media (min-width: 1000px) {
    .burger__div {
      display: none;
    }
    .top__start {
      display: none;
    }
    .top__start--desktop {
      display: block;
    }
    .links__start--desktop {
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  @media (min-width: 1700px) {
    width: 1700px;  
    margin-inline: auto;
  }
`;
