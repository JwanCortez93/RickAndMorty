import { Link } from "react-router-dom";
import { addFav, removeFav } from "../Redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function CardFavorite(props) {
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else if (!isFav) {
      setIsFav(true);
      props.addFav(props);
    }
  };

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  return (
    <div>
      <button onClick={handleFavorite}> {isFav ? "❤️" : "🤍"} </button>
      <Link to={`detail/${props.id}`}>
        <h1>{props.name}</h1>
      </Link>
      <h3>Status: {props.status}</h3>
      <img src={props.image} alt={props.name} />
      <h3>Género: {props.gender}</h3>
      <h3>Especie: {props.species}</h3>
      <h3>Origen: {props.origin.name}</h3>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardFavorite);
