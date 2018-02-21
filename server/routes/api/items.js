const express = require('express');
const router = express.Router();
const ItemsController = require('../../controllers/items');

router
    .route('/')
    .get(ItemsController.getItems)
    .post(ItemsController.addItem)
    .put(() => { })
    .delete(() => { });

router
    .route('/:regionId')
    .get(ItemsController.getItemsByRegion)
    .post(() => { })
    .put(() => { })
    .delete(() => { });

module.exports = router;
