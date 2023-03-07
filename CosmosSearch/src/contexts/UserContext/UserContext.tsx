import { createContext } from "react";

import { iChildren } from "../@childrenType";

export const UserContext = createContext({});

export const UserProvider = ({ children}: iChildren) => {
    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}