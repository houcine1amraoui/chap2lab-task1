import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";

//
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialization
const app = express();

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//
app.get("/login", function (req, res) {
  res.sendFile(path.resolve(__dirname, "login.html"));
});

app.post("/login", function (req, res) {
  const { username, password } = req.body;
  if (!username === "mohamed-msila" || !password === "mohamed2025") {
    return res.send(401);
  }
  console.log(username, password);
  res.status(200).redirect("/login");
});

const PORT = 1000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
