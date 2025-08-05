// routes/userRoutes.js
const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("👋 Backend route working!");
});

module.exports = router;
