import { createContext, useState } from "react";
import { BoutonChangementDeLangue } from "./BoutonChangementDeLangue";
import { TexteInternationalisé } from "./TexteInternationalisé";
import { Texte, Langue, textesPossibles } from "./Texte";

type WhichLanguageContext = {
  texte: Texte;
  changerDeLangue: () => void;
};
export const WhichLanguage = createContext<WhichLanguageContext | null>(null);

export const TexteInternational = () => {
  const [langueChoisie, setLangueChoisie] = useState<Langue>(Langue.FR);
  const changerDeLangue = () => {
    const nouvelLangue = langueChoisie === Langue.FR ? Langue.EN : Langue.FR;
    setLangueChoisie(nouvelLangue);
  };

  return (
    <WhichLanguage.Provider
      value={{
        texte: textesPossibles.find((texte) => texte.langue === langueChoisie)!,
        changerDeLangue
      }}
    >
      <BoutonChangementDeLangue />
      <TexteInternationalisé />
    </WhichLanguage.Provider>
  );
};
