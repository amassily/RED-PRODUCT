const express = require("express");
const Hotel = require("../models/Hotel"); // Assurez-vous que le modèle Hotel est bien importé

const router = express.Router();

// Fusionner la logique des deux routes POST dans une seule
router.post("/", async (req, res) => {
  try {
    // Récupérer les données du corps de la requête
    const { nom, adresse, email, phone, prix, devise, imageUrl } = req.body;

    // Créer un nouvel hôtel avec les données reçues
    const newHotel = new Hotel({
      nom,
      adresse,
      email,
      phone,
      prix,
      devise,
      image: imageUrl, // Utilise `image` au lieu de `imageUrl` si le modèle attend cette propriété
    });

    // Sauvegarder le nouvel hôtel dans la base de données
    await newHotel.save();

    // Répondre avec un message de succès
    res.status(201).json({ message: "Hôtel créé avec succès", hotel: newHotel });
  } catch (error) {
    // Gérer les erreurs
    res.status(500).json({ message: "Erreur serveur lors de la création de l'hôtel", error });
  }
});

module.exports = router;
