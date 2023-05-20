const axios = require("axios");

const getCharacters = async () => {
  const characters = await axios("https://rickandmortyapi.com/api/character/");

  return characters.data.results;
};

module.exports = getCharacters;
