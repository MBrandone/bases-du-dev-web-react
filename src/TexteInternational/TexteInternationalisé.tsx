import { useTexteInternational } from "./useTexteInternational";

export const TexteInternationalis√© = () => {
  const {
    texte: { titre, description }
  } = useTexteInternational();

  return (
    <>
      <h3>{titre}</h3>
      <p>{description}</p>
    </>
  );
};
