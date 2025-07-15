import express from "express";

const app = express();
const port = 3100;

app.get("/", (req, res) => {
  const today = new Date().getDay();
  console.log(today);
  res.render("index.ejs", {
    dayType: "a weekday",
    advice: "it's time to work hard",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}. raf`);
});
