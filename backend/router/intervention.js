const express = require("express");
const router = express.Router();
const Intervention = require("../models/intervention");

// Create a new intervention
router.post("/", async (req, res) => {
  const interventionData = req.body;
  const maxInterventionId = await Intervention.findOne(
    {},
    {},
    { sort: { interventionId: -1 }, interventionId: 1 }
  );

  // Generate the new userId by incrementing the maximum value by 1
  const newInterventionId = maxInterventionId ? maxInterventionId.interventionId + 1 : 1;
  Intervention.create({ ...interventionData, interventionId: newInterventionId })
    .then((createdIntervention) => {
      res.status(201).json(createdIntervention);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Read all interventions
router.get("/", (req, res) => {
  Intervention.find()
    .then((interventions) => {
      res.json(interventions);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});



// Get demandes by user IDaccepter
router.get("/user/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const intervention = await Intervention.find({ garageId: userId });
    res.status(200).json(intervention);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read a specific intervention by interventionId
router.get("/:interventionId", (req, res) => {
  const interventionId = req.params.interventionId;

  Intervention.findOne({ interventionId })
    .then((intervention) => {
      if (!intervention) {
        return res.status(404).json({ message: "Intervention not found" });
      }
      res.json(intervention);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Update an intervention by interventionId
router.put("/:interventionId", (req, res) => {
  const interventionId = req.params.interventionId;
  const updateData = req.body;

  Intervention.findOneAndUpdate({ interventionId }, updateData, { new: true })
    .then((updatedIntervention) => {
      if (!updatedIntervention) {
        return res.status(404).json({ message: "Intervention not found" });
      }
      res.json(updatedIntervention);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Delete an intervention by interventionId
router.delete("/:interventionId", (req, res) => {
  const interventionId = req.params.interventionId;

  Intervention.findOneAndDelete({ interventionId })
    .then((deletedIntervention) => {
      if (!deletedIntervention) {
        return res.status(404).json({ message: "Intervention not found" });
      }
      res.json(deletedIntervention);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
