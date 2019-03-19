const express = require('express');
const router = express.Router();

const secure = require('../middlewares/secure.mid');
const columnController = require('../controllers/columns.controller');



router.get('/',secure.isAuthenticated,  columnController.column);
router.post('/', secure.isAuthenticated, columnController.doColumn);
router.get('/:id',secure.isAuthenticated, columnController.detail)
router.put('/:id', secure.isAuthenticated,columnController.update)
router.delete('/:id',secure.isAuthenticated, columnController.delete)

module.exports = router;
