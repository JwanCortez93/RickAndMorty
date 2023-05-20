import { connect, useDispatch } from "react-redux";
import CardFavorite from "./CardFavorite";
import { orderCards, filterCards } from "../Redux/actions";
import { useState } from "react";

function Favorites({ myFavorites }) {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      {myFavorites.map((char, index) => {
        return (
          <CardFavorite
            key={index}
            id={char.id}
            gender={char.gender}
            name={char.name}
            status={char.status}
            origin={char.origin}
            image={char.image}
            species={char.species}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
