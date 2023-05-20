const express = require("express");
const getCharacters = require("../controllers/characters_ctrl/getCharacters");
const getCharacterById = require("../controllers/characters_ctrl/getCharacterById");

const routerCharacters = express.Router();

routerCharacters.get("/", async (req, res) => {
  try {
    const characters = await getCharacters();
    res.status(200).json(characters);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

routerCharacters.get("/:id", async (req, res) => {
  try {
    const character = await getCharacterById(req.params.id);
    res.status(200).json(character);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = routerCharacters;
