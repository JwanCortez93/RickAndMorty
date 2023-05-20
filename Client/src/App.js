import "./App.css";
import { Nav } from "./Components/Nav";
import { Error } from "./Components/Error";
import { Form } from "./Components/Form/Form";
import { Cards } from "./Components/Cards";
import { About } from "./Components/About";
import { Detail } from "./Components/Detail";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Favorites from "./Components/Favorites";

function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  async function login(userData) {
    const { email, password } = userData;
    await axios(
      `http://localhost:3001/login/?email=${email}&password=${password}`
    ).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    });
  }

  function logout() {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  function onSearch(id) {
    if (characters.filter((char) => char.id === +id).length > 0)
      window.alert("Este personaje ya fue agregado");
    else {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        }
      );
    }
  }

  function onClose(id) {
    let newChar = characters.filter((char) => char.id !== id);
    setCharacters(newChar);
  }
  function addRandom() {
    const randomNum = Math.floor(Math.random() * 826 + 1);
    onSearch(randomNum);
  }

  return (
    <div className="App">
      {location.pathname !== "/" ? (
        <Nav onSearch={onSearch} addRandom={addRandom} logout={logout} />
      ) : null}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/home/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
