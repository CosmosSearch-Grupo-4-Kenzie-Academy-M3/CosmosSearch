import { ModalWrapper, ModalContainer, ModalHeader, ModalContent, ModalComments, ModalInfo } from "./ModalStyled"

export const Modal = () => {
    return(
        <ModalWrapper>
            <ModalContainer>
                <ModalHeader>
                    <img src="" alt="" />
                    <div>
                        <h2>title - user</h2>
                    </div>
                </ModalHeader>  
                <ModalContent>
                    <p>Texto completo do artigo da pessoa Aqui vaitudo que a pessoa quiser falar, um texto completo com todas as infos e tudo mais que ela quiser sugerir. Acho que fazer um scroll auto aqui é a ideia melhor ideia!O que voces acham?</p>
                </ModalContent>
                <ModalComments>
                    <li>Aqui vao os comentários. Tambem acho validoo scroll auto.</li>
                </ModalComments>
                <ModalInfo>
                    <span>date: xx/xx/xx</span>
                    <span>topic: Physics</span>
                </ModalInfo>
            </ModalContainer>   
        </ModalWrapper>            
    )
}