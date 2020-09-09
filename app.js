const express = require("express");
const app = express();
const cosr = require("cors");

const { db, PORT } = require("./config");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cosr());

app.get("/", (req, res) => {
  res.send("welcome to rest Api");
});

app.use("/produk", require("./routes/Produk"));

app.get("*", (req, res) => {
  res.send("404 Page Not Found");
});

if (db) {
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
}
