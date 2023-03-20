const express = require("express");
const fs = require("fs");
const app = express();
const cors = require('cors');

app.use(cors());

app.get("/drug1", (req, res) => {
  fs.readFile("database/drug1.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Server error" });
    }

    res.json(JSON.parse(data));
  });
});

app.get("/drug2", (req, res) => {
    fs.readFile("database/drug2.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error" });
      }
  
      res.json(JSON.parse(data));
    });
  });


app.listen(5000, () => {
  console.log("Server started on port 3000");
});