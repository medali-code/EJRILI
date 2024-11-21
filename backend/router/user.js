const express = require("express");
const router = express.Router();
const userModel = require("../models/user");
const bcrypt = require("bcrypt");

// POST route for user registration
router.post("/signup", async (req, res) => {
  try {
    const { prenom, nom, cin, userEmail, ville, userPwd, type, telephone } = req.body;

    const hashedPassword = await bcrypt.hash(userPwd, 10);
    const maxUserId = await userModel.findOne(
      {},
      {},
      { sort: { uid: -1 }, limit: 1 }
    );

    // Generate the new userId by incrementing the maximum value by 1
    const newUserId = maxUserId ? maxUserId.uid + 1 : 1;
    const newUser = new userModel({
      uid: newUserId,
      type: type,
      cin: cin,
      nom: nom,
      prenom,
      ville,
      email: userEmail,
      password: hashedPassword,
      telephone
    });
    console.log(newUser);

    await newUser.save();

    res.status(200).send({ message: "Registration successful" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// POST route for user login
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      res.status(401).send("Invalid username or password");
      return;
    }


    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(401).send("Invalid username or password");
      return;
    }

    res.status(200).send(user.toJSON());
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});


// Modifier une demande par ID
router.put("/editprofile/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const demande = await userModel.findOneAndUpdate({ uid: userId }, req.body);
    if (!demande) {
      return res.status(404).json({ message: "Demande not found" });
    }
    res.status(200).json(demande);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).json(users);
  } catch (err) {
    console.error("Error occurred while retrieving users:", err);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving users." });
  }
});

router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await userModel.findOne({ uid: userId });
    res.status(200).json(user);
  } catch (err) {
    console.error("Error occurred while retrieving users:", err);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving users." });
  }
});

router.delete("/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const deletedUser = await userModel
      .findOneAndDelete({ uid: userId })
      .exec();
    if (!deletedUser) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.json({ message: "User deleted successfully" });
    }
  } catch (err) {
    console.error("Error occurred while deleting user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
