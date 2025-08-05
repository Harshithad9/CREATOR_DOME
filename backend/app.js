const express = require("express");
const cors = require("cors");
const app = express();
const promptRoutes = require("./routes/promptRoutes");

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/prompts", promptRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
