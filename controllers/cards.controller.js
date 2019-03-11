const createError = require('http-errors');
const mongoose = require('mongoose');
const Card = require('../models/card.model');

module.exports.card = (req, res, next) => {
  Card.find()
  .then(function (cards) {
    res.status(200).json(cards)
  });
}

module.exports.doCard = (req, res, next) => {
  const card = new Card(req.body);
  if(req.file){
    card.imageUrl = req.file.secure_url
  }
    return card
      .save()
      .then(card =>
            res.status(201).json(card))
      .catch(error => next(error));
}

module.exports.detail = (req, res, next) => {
  Card.findById(req.params.id)
  .then(card => {
    res.status(200).json(card)
  })
  .catch(next);
}

module.exports.update = (req, res, next) => {
  const cardData = {
    title: req.body.title,
    position: req.body.position,
    description:  req.body.description,
    label: req.body.label
}
  Card.findByIdAndUpdate(req.params.id, {
    $set: cardData
  }, {
    safe: true,
    upset: true,
    new: true
  })
  .then(card => {
    if (!card) {
      next(createError(404, 'Card not found'));
    } else {
      res.status(200).json(card)
    }
  })
  .catch(error => next(error));
}

module.exports.delete = (req, res, next) => {
  Card.findByIdAndRemove(req.params.id)
    .then(card => {
      if (!card) {
        next(createError(404, 'Card not found'));
      } else {
        res.status(200).json(card);
      }
    })
    .catch(error => next(error));
}
