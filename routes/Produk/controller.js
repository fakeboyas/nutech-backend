const { Produk } = require("../../models");

module.exports = {
  //get produk
  getProduk: async (req, res) => {
    try {
      const result = await Produk.find();
      res.send({ message: "get all data", data: result });
    } catch (error) {
      res.send(error);
    }
  },

  //add produk
  addProduk: async (req, res) => {
    try {
      const result = await Produk.create({
        ...req.body,
      });
      res.send({ message: "produk berhasil ditambah", data: result });
    } catch (error) {
      res.send(error);
    }
  },

  //update produk
  updateProduk: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Produk.findByIdAndUpdate(id, {
        ...req.body,
        photo: {
          data: req.file.buffer,
          contentType: req.file.mimetype,
        },
      });
    } catch (error) {
      res.send(error);
    }
  },

  //delete produk
  deleteProduk: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Produk.findByIdAndRemove(id);
      res.send({ message: "data berhasil dihapus", data: result });
    } catch (error) {
      res.send(error);
    }
  },
};
