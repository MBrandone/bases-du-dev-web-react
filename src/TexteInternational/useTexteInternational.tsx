import { useContext } from "react";
import { WhichLanguage } from "./TexteInternational";

export const useTexteInternational = () => {
  const context = useContext(WhichLanguage);
  if (!context) {
    throw new Error(
      "useTexteInternational doit être utilisé dans un WhichLanguageContext"
    );
  }
  return context;
};
