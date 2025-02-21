const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,  // Assurer que l'email est unique
    match: [/\S+@\S+\.\S+/, 'Email invalide'],  // Validation regex pour l'email
  },
  password: {
    type: String,
    required: true,
  },
});

// Middleware pour hasher le mot de passe avant d'enregistrer un utilisateur
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);  
    this.password = await bcrypt.hash(this.password, salt);  
    next();
  } catch (error) {
    next(error);
  }
});

// Méthode pour comparer le mot de passe lors de la connexion
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password); 
};

const User = mongoose.model("User", userSchema);

module.exports = User;
