import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}. bitch`);
});

app.get('/', (req,res) => {
    res.send("hey why are you here?")
})

app.get('/about', (req, res) => {
  res.send("you have arrived at the about page")
})

app.get('/contact', (req, res) => {
  res.send("you have arrived at the contact page")
})
