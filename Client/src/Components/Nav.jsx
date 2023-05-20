import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";

export function Nav(props) {
  return (
    <div>
      <SearchBar onSearch={props.onSearch} addRandom={props.addRandom} />
      <Link to="/home">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/favorites">Favorites</Link>
      <button type="button" onClick={props.logout}>
        Log out
      </button>
    </div>
  );
}
