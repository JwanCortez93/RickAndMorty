let myFavorites = [];

const getFavs = (req, res) => {
  try {
    res.status(200).json(myFavorites);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postFav = (req, res) => {
  try {
    const newFav = req.body;
    myFavorites.push(newFav);
    res.status(200).json(newFav);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const deleteFav = (req, res) => {
  try {
    myFavorites = myFavorites.filter((fav) => fav.id !== +req.params.id);
    res.status(200).json(myFavorites);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postFav, deleteFav, getFavs };
