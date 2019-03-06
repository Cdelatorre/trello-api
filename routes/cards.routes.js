const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cards.controller');


router.get('/',  cardsController.card);
router.post('/',  cardsController.doCard);
router.get('/:id', cardsController.detail)
router.put('/:id', cardsController.update)
router.delete('/:id', cardsController.delete)

module.exports = router;