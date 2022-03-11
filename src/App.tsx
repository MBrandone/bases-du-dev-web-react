import "./styles.css";
import { MonPrenom } from "./MonPrenom";
import { ListeDeCourses } from "./ListeDeCourses";
import { Compteur, CompteurBonus } from "./Compteur";
import { Toggle } from "./Toggle";
import { TexteInternational } from "./TexteInternational/TexteInternational";
import { APIChiens } from "./APIChiens/APIChiens";

export default function App() {
  return (
    <div className="App">
      <h1>Exemples de réponse aux exercices</h1>

      <h2>Composant qui écrit mon prénom</h2>
      <MonPrenom />

      <h2>Composant Liste de courses</h2>
      <ListeDeCourses />

      <h2>Compteur</h2>
      <Compteur />

      <h2>Compteur Bonus</h2>
      <CompteurBonus />

      <h2>Toggle</h2>
      <Toggle>
        <MonPrenom />
      </Toggle>

      <h2>Composant avec choix de langue</h2>
      <p>
        On a abordé le contexte React très succintement, mais vous allez
        surement le voir en mission. On l'utilise pour passer de l'état à toute
        la grappe de composant sans passer par les props. Voici un exemple
        simple de son utilisation. On l'utilise en mission pour faire de
        l'injection de dépendances parfois.
      </p>
      <p>
        Pour plus d'infos, aller voir{" "}
        <a href="https://kentcdodds.com/blog/how-to-use-react-context-effectively">
          ce lien
        </a>{" "}
        qui vous en dira plus sur les bonnes pratiques d'utilisation de contexte
      </p>
      <TexteInternational />

      <h2>
        Composant Fetch d'une API Web avec une autre route pour + de détails
      </h2>
      <APIChiens />
    </div>
  );
}
