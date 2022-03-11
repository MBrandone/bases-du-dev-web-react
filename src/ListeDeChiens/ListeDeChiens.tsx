import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export const APIChiens = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"></Route>
        <ListeDeRacesDeChiens />
        <Route path="/dogs-images"></Route>
      </Switch>
    </BrowserRouter>
  );
};

const ImagesDeChiensAvecRacesSpécifique = () => {};

const ListeDeRacesDeChiens = () => {
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
            return <li key={index.toString()}>{race}</li>;
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
