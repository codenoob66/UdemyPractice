import express from "express";

const app = express();
const port = 3100;

app.get("/", (req, res) => {
  const today = new Date().getDay();
  console.log(today);

  if (today === 0 || today === 6) {
    res.render("index.ejs", {
      dataType: "the weekend",
      advice: "its time to relax",
    });
  } else {
    res.render("index.ejs", {
      dataType: "a weekday",
      advice: "it's time to work hard",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}. raf`);
});
