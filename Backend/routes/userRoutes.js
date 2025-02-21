const express = require("express");
const { getUsers, createUser, registerUser, loginUser } = require("../controllers/userControllers");

const router = express.Router();

// Récupérer tous les utilisateurs
router.get("/", getUsers);

// Créer un nouvel utilisateur
router.post("/new", createUser);

// Inscrire un nouvel utilisateur
router.post("/register", registerUser);

// Connexion d'un utilisateur
router.post("/login", loginUser);

module.exports = router;
