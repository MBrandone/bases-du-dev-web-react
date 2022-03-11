import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const ListeDesImagesParRaces = () => {
  const { id } = useParams();
  const [images, setimages] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/hound/${id}/images`)
      .then((reponse) => {
        setimages(reponse.data.message);
      });
  }, [id]);

  return (
    <>
      <Link to="/">Retour à la première page</Link>
      <h3>Voic les images de chiens de races {id}</h3>

      {images && (
        <ul className="dog-list">
          {images.map((imageUrl, index) => {
            return (
              <li key={index.toString()}>
                <img className="image-chien" alt="Un chien" src={imageUrl} />
              </li>
            );
          })}
        </ul>
      )}

      {images.length === 0 && <p>Aucune race de chiens n'est disponible</p>}
    </>
  );
};
