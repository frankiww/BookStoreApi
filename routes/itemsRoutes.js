const itemsController = require('../controllers/itemsController');
const express = require('express');
const router = express.Router();

router.get('/', itemsController.getAllItems);
router.get('/:id', itemsController.getItemById);
router.post('/', itemsController.createItem);


module.exports = router;