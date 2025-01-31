const express = require("express");
const cors = require("cors");
const sequelize = require("./config");
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);

app.listen(5000, async () => {
  await sequelize.sync();
  console.log("Serveur en écoute sur le port 5000");
});
