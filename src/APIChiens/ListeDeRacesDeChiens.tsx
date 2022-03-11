import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ListeDeRacesDeChiens = () => {
  const [racesDeChiens, setRacesDeChiens] = useState<string[]>([]);

  useEffect(() => {
    axios.get("https://dog.ceo/api/breed/hound/list").then((reponse) => {
      setRacesDeChiens(reponse.data.message);
    });
  }, []);
  return (
    <>
      <h3>Voic la liste de races disponibles</h3>

      {racesDeChiens && (
        <ul>
          {racesDeChiens.map((race, index) => {
            return (
              <Link to={`/${race}`} key={index.toString()}>
                <li>{race}</li>
              </Link>
            );
          })}
        </ul>
      )}

      {racesDeChiens.length === 0 && (
        <p>Aucune race de chiens n'est disponible</p>
      )}

      <p>
        Cliquez sur un item pour aller sur une nouvelle route qui affiche les
        photos de cette race de chien
      </p>
    </>
  );
};
