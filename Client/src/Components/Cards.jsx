import Card from "./Card";

export function Cards({ characters, onClose }) {
  return (
    <div>
      {characters.map((char, index) => (
        <div>
          <Card
            key={index}
            gender={char.gender}
            onClose={onClose}
            id={char.id}
            name={char.name}
            status={char.status}
            origin={char.origin}
            image={char.image}
            species={char.species}
          />
        </div>
      ))}
    </div>
  );
}
