// Importations nécessaires
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
require('dotenv').config(); // Chargement des variables d'environnement
const paroleRoutes = require('./routes/paroles'); // Importer les routes


// Initialisation de l'application
const app = express();
app.use(express.json());

app.use('/favicon.ico', express.static(path.join(__dirname, 'favicon.ico')));

// Configuration des headers pour CORS
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
   next();
});


// Routes
app.use('/api', paroleRoutes);

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
   .then(() => console.log("Connecté avec succès à MongoDB !"))
   .catch(error => console.error("Erreur de connexion à MongoDB :", error));

// Route pour accéder aux paroles de chanson
app.get('/api/listeParole', (req, res) => {
    const listeParole = [
        { Titre: "Lehibe.", parole: "upim dolor upim dolor upim dolor" },
        { Titre: "Midéra an'i Jehovah.", parole: "upim dolor upim dolor upim dolor" },
        { Titre: "Ho an'ilay mipetraka.", parole: "upim dolor upim dolor upim dolor" },
        { Titre: "Deraina", parole: "upim dolor upim dolor upim dolor" }
    ];
    res.status(200).json(listeParole);
});



// Exportation de l'application
module.exports = app;
