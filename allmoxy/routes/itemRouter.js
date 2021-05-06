const express = require("express");
const itemRouter = express.Router();
const Item = require("../models/item.js");

// get all posts ✅
itemRouter.get("/", (req, res, next) => {
  Item.find((err, items) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(items);
  });
});

// add post ✅
itemRouter.post("/", (req, res, next) => {
  const newItem = new Item(req.body);
  newItem.save((err, savedItem) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedItem);
  });
});

//   delete post ✅
itemRouter.delete("/:itemId", (req, res, next) => {
  Item.findOneAndDelete({ _id: req.params.itemId }, (err, deletedItem) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(`Successfully deleted ${deletedItem.title}`);
  });
});

// update post ✅
itemRouter.put("/:itemId", (req, res, next) => {
  Item.findOneAndUpdate(
    { _id: req.params.itemId },
    req.body,
    { new: true },
    (err, updatedItem) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedItem);
    }
  );
});

module.exports = itemRouter;
