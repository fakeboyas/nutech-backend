const express = require("express");
const router = express.Router();

router.get("/", require("./controller").getProduk);
router.get("/nama_produk/", require("./controller").filterByName);
router.post("/upload", require("./controller").addProduk);
router.delete("/remove/:id", require("./controller").deleteProduk);
router.put("/update/:id", require("./controller").updateProduk);
// router.get("/nama_produk/", require("./controller").filterByName);

module.exports = router;
