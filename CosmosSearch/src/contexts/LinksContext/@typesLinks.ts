export interface iLinks {
    burgerOpen: boolean;
    setBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
    mainComponent: string;
    setMainComponent: React.Dispatch<React.SetStateAction<string>>;
    modalIsOpen: boolean;
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}