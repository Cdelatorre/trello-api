const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cards.controller');
const uploadCloud = require('../configs/storage.config.js');
const secure = require('../middlewares/secure.mid');


router.get('/', secure.isAuthenticated, cardsController.card);
router.post('/', secure.isAuthenticated, uploadCloud.single('imageUrl'), cardsController.doCard);
router.get('/:id',secure.isAuthenticated, cardsController.detail)
router.put('/:id', secure.isAuthenticated,cardsController.update)
router.delete('/:id',secure.isAuthenticated, cardsController.delete)
router.delete('/',secure.isAuthenticated, cardsController.deleteAll)

module.exports = router;
