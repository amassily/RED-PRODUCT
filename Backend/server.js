const express = require("express");
const connectDB = require("./config/db"); 
const cors = require("cors");
require("dotenv").config();

// Connexion à la base de données
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Import des routes
const userRoutes = require("./routes/userRoutes");
const hotelRoutes = require("./routes/hotelRoutes");

app.use("/api/users", userRoutes);
app.use("/api/hotels", hotelRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));


