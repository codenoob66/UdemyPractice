import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3200;

app.use(express.static(__dirname + "/public"));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
