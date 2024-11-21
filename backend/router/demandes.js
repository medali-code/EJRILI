const express = require("express");
const router = express.Router();
const Demande = require("../models/demandes");
const userModel = require("../models/user");

// Ajouter une demande
router.post("/", async (req, res) => {
  try {
    const maxDemandeionId = await Demande.findOne(
      {},
      {},
      { sort: { demandesId: -1 }, demandesId: 1 }
    );

    // Generate the new userId by incrementing the maximum value by 1
    const newDemandeId = maxDemandeionId ? maxDemandeionId.demandesId + 1 : 1;
    const demande = new Demande({ ...req.body, demandesId: newDemandeId });
    await demande.save();
    res.status(201).json(demande);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Consulter toutes les demandes
router.get("/", async (req, res) => {
  try {
    const demandes = await Demande.find();
    res.json(demandes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* // Consulter une demande par ID
router.get("/:id", async (req, res) => {
  try {
    const demande = await Demande.findById(req.params.id);
    if (!demande) {
      return res.status(404).json({ message: "Demande not found" });
    }
    res.json(demande);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}); */

router.put("/accepter", async (req, res) => {
  try {
    const demande = await Demande.findOneAndUpdate(
      { demandesId: req.body.demandesId },
      { Etat: "R", chauffeurUid: req.body.userUid, cammionsId: req.body.cammionsId }
    );

    if (!demande) {
      return res.status(404).json({ message: "Demande not found" });
    }

    res.json(demande);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.put("/valide", async (req, res) => {
  try {
    const demande = await Demande.findOneAndUpdate(
      { demandesId: req.body.demandesId },
      { valid: true }
    );

    if (!demande) {
      return res.status(404).json({ message: "Demande not found" });
    }

    res.json(demande);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/terminal", async (req, res) => {
  try {
    const demande = await Demande.findOneAndUpdate(
      { demandesId: req.body.demandeId },
      { Etat: "T" }
    );

    if (!demande) {
      return res.status(404).json({ message: "Demande not found" });
    }

    res.json(demande);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/MesRemorquages/:chauffeurUid", async (req, res) => {
  try {
    const demande = await Demande.find({
      chauffeurUid: req.params.chauffeurUid,
    });

    if (!demande) {
      return res.status(404).json({ message: "Demande not found" });
    }

    res.json(demande);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get demandes by user IDaccepter
router.get("/user/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const demandes = await Demande.find({ userUid: userId });
    res.status(200).json(demandes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const Demandeid = req.params.id;

    const demandes = await Demande.findOne({ demandesId: Demandeid });
    res.status(200).json(demandes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Modifier une demande par ID
router.put("/:id", async (req, res) => {
  try {
    const demande = await Demande.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!demande) {
      return res.status(404).json({ message: "Demande not found" });
    }
    res.json(demande);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// Décider une demande par ID
router.patch("/:id", async (req, res) => {
  try {
    const demande = await Demande.findByIdAndUpdate(
      req.params.id,
      { Etat: req.body.Etat },
      { new: true }
    );
    if (!demande) {
      return res.status(404).json({ message: "Demande not found" });
    }
    res.status(200).json(true);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// Supprimer une demande par ID
router.delete("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const demande = await Demande.findOneAndRemove({
      demandesId: req.params.id,
    });

    if (!demande) {
      return res.status(404).json({ message: "Demande not found" });
    }
    res.status(200).json({ message: "Demande deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
