const express = require("express");
const mongoose = require("mongoose");
const routes = require("./router/router");
const cors = require("cors");

require("dotenv").config();

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  const apiInfo = {
    name: "Your API Name",
    version: "1.0.0",
    description: "Description of your API",
    endpoints: [
      {
        url: "api/register",
        method: "POST",
        description: "User registration endpoint",
      },
      {
        url: "api/login",
        method: "POST",
        description: "User login endpoint",
      },
      // Add more endpoints here
    ],
  };

  res.json(apiInfo);
});

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
