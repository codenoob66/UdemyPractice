import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 5000;
const __dirname = dirname(fileURLToPath(import.meta.url));
let bandName = "";

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the form
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
});

// Custom middleware for POST
function userDetails(req, res, next) {
  console.log("Form data:", req.body);
  bandName = req.body["street"] + req.body["pet"]; // use lowercase to match input name
  next();
}

// Handle form submission
app.post("/submit", userDetails, (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}</h2>`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
