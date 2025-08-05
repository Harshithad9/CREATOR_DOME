// routes/promptRoutes.js
const express = require("express");
const router = express.Router();
const verifyFirebaseToken = require("../middleware/authMiddleware");
const { savePrompt } = require("../controllers/promptController");

router.post("/save", verifyFirebaseToken, savePrompt);

module.exports = router;
