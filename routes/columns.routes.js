const express = require('express');
const router = express.Router();
const columnController = require('../controllers/columns.controller');

router.get('/',  columnController.column);
router.post('/',  columnController.doColumn);
router.get('/:id', columnController.detail)
router.put('/:id', columnController.update)
router.delete('/:id', columnController.delete)

// module.exports = router;
module.exports = router;
