const axios = require("axios");

const getCharacterById = async (id) => {
  const characters = await axios(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return characters.data;
};

module.exports = getCharacterById;
