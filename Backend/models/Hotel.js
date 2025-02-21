const { Schema, model } = require("mongoose");

const HotelSchema = new Schema({
  nom: {
    type: String,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  prix: {
    type: Number,
    required: true,
  },
  devise: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

const Hotel = model("Hotel", HotelSchema);

module.exports = Hotel;
