export enum Langue {
  FR,
  EN
}

export type Texte = {
  langue: Langue;
  titre: string;
  description: string;
  texteBoutonChangementDeLangue: string;
};

const texteFrançais: Texte = {
  langue: Langue.FR,
  titre: "Mon titre en français",
  description: "Ma description en français",
  texteBoutonChangementDeLangue: "Put this text in english"
};

const texteAnglais: Texte = {
  langue: Langue.EN,
  titre: "My title in english",
  description: "My description in english",
  texteBoutonChangementDeLangue: "Mettre ce texte en français"
};

export const textesPossibles: Texte[] = [texteFrançais, texteAnglais];
