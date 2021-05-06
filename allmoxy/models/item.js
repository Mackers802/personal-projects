const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: {
    type: String,
    required: true,
    default: "",
  },
  description: {
    type: String,
    required: true,
    default: "",
  },
  price: {
    type: String,
    required: true,
    default: "",
  },
  quantity: {
    type: String,
    required: true,
    default: "",
  },
  image: {
    type: String,
    required: false,
    default: "",
  },
});

module.exports = mongoose.model("Item", itemSchema);
