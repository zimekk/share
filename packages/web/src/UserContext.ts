import { createContext, useContext } from "react";

const UserContext = createContext(null);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = UserContext.Provider;
