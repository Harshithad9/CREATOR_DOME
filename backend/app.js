// Import required packages
const express = require("express");

const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables from .env
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // to parse JSON body

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to PromptPal Backend API!");
});

// Connect to MongoDB and Start Server
const PORT = process.env.PORT || 5000;

