import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export function Detail() {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .finally(() => {
        setLoading(false);
      });
    return setCharacter({});
  }, [id]);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
          <h2>Status: {character.status}</h2>
          <h2>Species: {character.species}</h2>
          <h2>Type: {character.type}</h2>
          <h2>Gender: {character.gender}</h2>
          <h2>Origin: {character.origin.name}</h2>
          <h2>Location: {character.location.name}</h2>
          <h4>ID: {character.id}</h4>
        </div>
      )}
    </div>
  );
}
