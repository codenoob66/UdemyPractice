import express from "express";

const app = express();
const port = 3100;

app.get("/", (req, res) => {
  const day = new Date().getDay();
  console.log(day);
  if (day > 0 && day < 6) {
    res.send("hello its a weekday my friends");
  } else {
    res.send("hi its a weekend");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}. raf`);
});
