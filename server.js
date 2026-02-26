const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
  const userValue = req.body.userInput;

  console.log("მივიღე მონაცემი:", userValue);

  res.send("მონაცემი მიღებულია ✅");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});