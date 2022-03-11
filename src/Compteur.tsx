import { useEffect, useState } from "react";

export const Compteur = () => {
  const [compte, setCompte] = useState<number>(0);

  return (
    <>
      <button onClick={() => setCompte(compte - 1)}>Décrémente</button>
      <span>{compte}</span>
      <button onClick={() => setCompte(compte + 1)}>Incrémente</button>
    </>
  );
};

export const CompteurBonus = () => {
  const [compte, setCompte] = useState<number>(0);

  useEffect(() => {
    document.title = compte.toString();
  }, [compte]);

  const incremente = () => {
    if (compte < 10) setCompte(compte + 1);
  };

  const decremente = () => {
    if (compte > 0) setCompte(compte - 1);
  };

  return (
    <>
      <button onClick={decremente}>Décrémente</button>
      <span>{compte}</span>
      <button onClick={incremente}>Incrémente</button>
    </>
  );
};
