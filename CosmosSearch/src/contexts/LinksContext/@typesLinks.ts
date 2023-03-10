import React from "react";

export interface iLinks {
  burgerOpen: boolean;
  setBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mainComponent: string;
  setMainComponent: React.Dispatch<React.SetStateAction<string>>;
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalId: number;
  setModalId: React.Dispatch<React.SetStateAction<number>>;
  editModalIsOpen: boolean;
  setEditModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deleteModalIsOpen: boolean;
  setDeleteModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
