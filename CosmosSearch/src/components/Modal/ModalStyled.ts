import styled from "styled-components";

export const ModalWrapper = styled.div`
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    background-color: var(--grey-2-opct);

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: var(--ff-Inter);
`

export const ModalContainer = styled.div `
    width: 500px;
    height: 300px;

    background-color: var(--grey-1);
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 1rem 1.875rem;
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;

    font-family: var(--ff-Oswald);
`

export const ModalContent = styled.div`
    border: 1px solid var(--primary-blue);

    padding: 1rem;
`

export const ModalComments = styled.ul`
    list-style: none;

    display: flex;
    flex-direction: column;

    border: 1px solid var(--primary-blue);

    padding: 1rem;

    overflow-y: scroll;
`

export const ModalInfo = styled.div`
    display: flex;
    justify-content: space-between;
`