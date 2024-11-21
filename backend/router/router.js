const express = require("express");

const router = express.Router();
const userRouter = require("./user");
const demandesRouter = require("./demandes");
const interventionsRouter = require("./intervention");
const avisRouter = require("./avis");
const cammionsRouter = require("./cammions");

router.use("/user", userRouter);
router.use("/demandes", demandesRouter);

router.use("/interventions", interventionsRouter);

router.use("/avis", avisRouter);
router.use("/cammion", cammionsRouter);

module.exports = router;
