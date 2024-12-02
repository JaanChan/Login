const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

app.post("/submit", (req, res) => {
  const data = req.body;
  console.log("User Data:", data);
  fs.appendFileSync("./data/user-data.txt", JSON.stringify(data) + "\n");
  res.status(200).send("Data received");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
