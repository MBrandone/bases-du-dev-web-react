import { FormEvent, useState } from "react";

const produitsInitiaux = ["Pâtes", "Riz", "Carottes"];

export const ListeDeCourses = () => {
  const [produits, setProduits] = useState<string[]>(produitsInitiaux);
  const [nouveauProduit, setNouveauProduit] = useState<string>("");

  const onSubmit: (event: FormEvent<HTMLFormElement>) => void = (event) => {
    event.preventDefault();
    setProduits([...produits, nouveauProduit]);
    setNouveauProduit("");
  };

  return (
    <>
      <ul>
        {produits.map((produit, index) => {
          return <li key={index.toString()}>{produit}</li>;
        })}
      </ul>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="item"
          value={nouveauProduit}
          onChange={(event) => setNouveauProduit(event.target.value)}
        />
        <input type="submit" value="Rajouter un produit" />
      </form>
    </>
  );
};
