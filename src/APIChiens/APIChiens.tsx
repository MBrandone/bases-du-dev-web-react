import { ListeDeRacesDeChiens } from "./ListeDeRacesDeChiens";
import { ListeDesImagesParRaces } from "./ListeDesImagesParRaces";
import { BrowserRouter, Route } from "react-router-dom";

export const APIChiens = () => {
  return (
    <BrowserRouter>
      <Route path="/:id">
        <ListeDesImagesParRaces />
      </Route>

      <Route exact path="/">
        <ListeDeRacesDeChiens />
      </Route>
    </BrowserRouter>
  );
};
