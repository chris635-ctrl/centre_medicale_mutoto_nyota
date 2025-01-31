const express = require("express"); 
const cors = require("cors");
const sequelize = require("./config");
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);

// Utilise le port fourni par l'environnement ou 5000 en fallback
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
