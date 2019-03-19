const createError = require('http-errors');
const mongoose = require('mongoose');
const Column = require('../models/column.model');

module.exports.column = (req, res, next) => {
  Column.find()
  .populate('cards')
  .then(function (columns) {
    res.status(200).json(columns)
  });
}

module.exports.doColumn = (req, res, next) => {
  const columnData = {
    title: req.body.title,
    position: req.body.position,
}
  const column = new Column(columnData);
    return column
      .save()
      .then(column =>
            res.status(201).json(column))
      .catch(error => next(error));
}

module.exports.detail = (req, res, next) => {
  Column.findById(req.params.id)
  .populate('cards')
  .then(column => {
    if (!column) {
      next(createError(404, 'column not found'));
    } else {
      res.status(200).json(column)
    }
  })
  .catch(next);
}

module.exports.update = (req, res, next) => {
  const columnData = {
    title: req.body.title,
    position: req.body.position,
}
  Column.findByIdAndUpdate(req.params.id, {
    $set: columnData
  }, {
    safe: true,
    upset: true,
    new: true
  })

  .then(column => {
    if (!column) {
      next(createError(404, 'column not found'));
    } else {
      res.status(200).json(column)
    }
  })
  .catch(error => next(error));
}

module.exports.delete = (req, res, next) => {
  Column.findByIdAndRemove(req.params.id)
    .populate('cards')
    .then(column => {
      if (!column) {
        next(createError(404, 'column not found'));
      } else {
        res.status(200).json(column);
      }
    })
    .catch(error => next(error));
}
