const mongoose= require('mongoose');
// Définir le schéma pour les paroles
const paroleSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    parole: { type: String, required: true }
});

// Exporter le modèle
module.exports = mongoose.model('Parole', paroleSchema);