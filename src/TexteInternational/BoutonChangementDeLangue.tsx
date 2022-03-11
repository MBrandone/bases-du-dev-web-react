import { useTexteInternational } from "./useTexteInternational";

export const BoutonChangementDeLangue = () => {
  const {
    texte: { texteBoutonChangementDeLangue },
    changerDeLangue
  } = useTexteInternational();

  return (
    <button onClick={() => changerDeLangue()}>
      {texteBoutonChangementDeLangue}
    </button>
  );
};
