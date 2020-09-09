const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const produkSchema = new Schema({
  nama_produk: {
    type: String,
    unique: true,
  },
  harga_beli: {
    type: Number,
  },
  harga_jual: {
    type: Number,
  },
  stok: {
    type: Number,
  },
  foto_barang: {
    type: String,
  },
});

const Produk = mongoose.model("produk", produkSchema);

module.exports = Produk;
