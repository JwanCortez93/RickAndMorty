const express = require("express");
const {
  postFav,
  deleteFav,
  getFavs,
} = require("../controllers/favorites_ctrl/handleFavorites");

const routerFavorites = express.Router();

routerFavorites.get("/", (req, res) => {
  try {
    getFavs(req, res);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

routerFavorites.post("/", (req, res) => {
  try {
    postFav(req, res);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

routerFavorites.delete("/:id", (req, res) => {
  try {
    deleteFav(req, res);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
module.exports = routerFavorites;
