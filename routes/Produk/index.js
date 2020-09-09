const express = require("express");
const router = express.Router();

router.get("/", require("./controller").getProduk);
router.post("/upload", require("./controller").addProduk);
router.delete("/remove/:id", require("./controller").deleteProduk);
router.put("/update/:id", require("./controller").updateProduk);

module.exports = router;
