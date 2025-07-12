const express = require('express');
const router = express.Router();
const Parole = require('../models/parole');

// Route pour ajouter une parole
router.post('/addParole', async (req, res) => {
    try {
        const { titre, parole } = req.body;

        if (!titre || !parole) {
            return res.status(400).json({ message: 'Veuillez remplir tous les champs.' });
        }

        // Créer une nouvelle parole
        const newParole = new Parole({ titre, parole });
        await newParole.save();

        res.status(201).json({ message: 'Parole ajoutée avec succès !', parole: newParole });
    } catch (error) {
        res.status(500).json({ message: 'Erreur interne du serveur', error: error.message });
    }
});


// Route pour récupérer toutes les paroles
router.get('/listeParole', async (req, res) => {
    try {
        const paroles = await Parole.find(); // Récupère toutes les paroles depuis MongoDB
        res.status(200).json(paroles);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des paroles', error: error.message });
    }
});

// Exporter les routes
module.exports = router;
