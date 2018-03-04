const express = require('express');
const router = express.Router();
const ItemsController = require('../../controllers/items');

router
  .route('/')
  .get(ItemsController.getItems)
  .post(ItemsController.addItem)
  .put(() => {})
  .delete(() => {});

router
  .route('/:itemId')
  .get(ItemsController.getItem)
  .post(() => {})
  .put(() => {})
  .delete(() => {});

module.exports = router;
