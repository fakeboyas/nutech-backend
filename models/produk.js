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
    type: String,
  },
  stok: {
    type: Number,
  },
  foto_barang: {
    data: Buffer,
    contentType: String,
  },
});

const Produk = mongoose.model("produk", produkSchema);

module.exports = Produk;
