import { createContext } from "react";

export const loginModalContext = createContext<{
  loginModalOpen: boolean;
  setLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  loginModalOpen: false,
  setLoginModalOpen: () => {},
});
