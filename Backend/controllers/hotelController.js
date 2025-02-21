import Hotel from "../models/Hotel.js";

// Récupérer tous les hôtels
const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des hôtels", error });
  }
};

// Ajouter un nouvel hôtel
const createHotel = async (req, res) => {
  try {
    const { name, adresse, email, phone, prix, devise, imageUrl } = req.body;

    if (!name || !adresse || !email || !phone || !prix || !devise) {
      return res.status(400).json({ message: "Tous les champs obligatoires doivent être remplis" });
    }

    const newHotel = new Hotel({ name, adresse, email, phone, prix, devise, imageUrl });
    await newHotel.save();

    res.status(201).json({ message: "Hôtel créé avec succès", hotel: newHotel });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};

export { getHotels, createHotel };
