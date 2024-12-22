const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Create Express App
const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for cross-origin requests

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/lessonsDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Video Schema
const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  vimeoId: String, // Store Vimeo Video ID
  uploadDate: { type: Date, default: Date.now },
});

const Video = mongoose.model("Video", videoSchema);

// Test Route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// API: Add Video Metadata
app.post("/api/videos", async (req, res) => {
  const { title, description, vimeoId } = req.body;

  try {
    const videos = await Video.insertMany(req.body); // Accepts multiple records
    res.status(201).json(videos); // Responds with created data
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API: Fetch All Videos
app.get("/api/videos", async (req, res) => {
  try {
    const videos = await Video.find({});
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
