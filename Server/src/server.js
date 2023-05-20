const express = require("express");
const morgan = require("morgan");
const server = express();
const charactersRoutes = require("./routes/charactersRoutes");
const favoritesRoutes = require("./routes/favoritesRoutes");
const loginRoutes = require("./routes/loginRoutes");

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(express.json());
server.use(morgan("dev"));
server.use("/characters", charactersRoutes);
server.use("/favorites", favoritesRoutes);
server.use("/login", loginRoutes);

module.exports = server;
