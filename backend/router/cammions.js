const express = require("express");
const router = express.Router();
const cammions = require("../models/cammions");

// Ajouter une cammion
router.post("/", async (req, res) => {
    try {
        const maxCammionionId = await cammions.findOne(
            {},
            {},
            { sort: { cammionsId: -1 }, cammionsId: 1 }
        );

        // Generate the new userId by incrementing the maximum value by 1
        const newCammionId = maxCammionionId ? maxCammionionId.cammionsId + 1 : 1;
        const cammion = new cammions({ ...req.body, cammionsId: newCammionId });
        await cammion.save();
        res.status(201).json(cammion);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Consulter toutes les demandes
router.get("/user/:id", async (req, res) => {
    try {
        const cammion = await cammions.find({ chauffeurUid: req.params.id });
        res.json(cammion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const cammion = await cammions.find();
        res.json(cammion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Consulter toutes les demandes
router.get("/:id", async (req, res) => {
    try {
        const cammion = await cammions.findOne({ cammionsId: req.params.id });
        res.json(cammion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});




// Supprimer une demande par ID
router.delete("/:id", async (req, res) => {
    try {
        console.log(req.params.id);
        const cammion = await cammions.findOneAndRemove({
            cammionsId: req.params.id,
        });

        if (!cammion) {
            return res.status(404).json({ message: "cammion not found" });
        }
        res.status(200).json({ message: "cammion deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
