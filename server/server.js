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
app.use(express.json());
app.use(cors());

const users = [
  {
    username: "mohamed-msila",
    password: "mohamed2025",
  },
  {
    username: "amina-msila",
    password: "amina2025",
  },
];

//
app.get("/login", function (req, res) {
  res.sendFile(path.resolve(__dirname, "login.html"));
});

app.post("/login", function (req, res) {
  const { username, password } = req.body;
  const result = users.find((user) => {
    return user.username === username && user.password === password;
  });
  if (result) {
    return res.send("Welcome");
  } else {
    return res.status(401).send("Invalid username or password");
  }
});

const PORT = 1000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
