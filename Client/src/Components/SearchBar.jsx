import { useState } from "react";

export function SearchBar(props) {
  const [search, setSearch] = useState("");
  const onChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <input onChange={onChange}></input>
      <button onClick={() => props.onSearch(search)}>Agregar</button>
      <button onClick={props.addRandom}>Agregar Random</button>
    </div>
  );
}
