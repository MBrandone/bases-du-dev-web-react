import { useState, ReactNode } from "react";

type ToggleProps = {
  children: ReactNode;
};

export const Toggle = ({ children }: ToggleProps) => {
  const [affiche, setAffiche] = useState<boolean>(false);

  const texteBouton: string = affiche ? "Ne plus afficher" : "Afficher";

  const toggle = () => {
    setAffiche(!affiche);
  };

  return (
    <>
      <button onClick={toggle}>{texteBouton}</button>
      {affiche && children}
    </>
  );
};
