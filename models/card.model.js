const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  position: {
    type: Number,
  },
  description: {
    type: String,
    required: 'Description is required',
  },
  imageUrl: {
    type: String,
    default: 'https://trello-attachments.s3.amazonaws.com/5c6d1055e76442484da8390a/900x400/9c19c2a7773d637c3ec854e955d38fc4/mern-stack.png  '
  },
  label: {
    type: String,
    default: 'Lab'
  },
  column: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Column',
    required: true
  },
  title: {
    type: String,
    default: 'Hola'
  }
}, {
  timestamps: true,
  toJSON: {
    transform: (doc,ret) => {
      ret.id = doc._id;
      delete ret._id;
      delete ret.__v;
      return ret
    }
  } 
});


const Card = mongoose.model('Card', cardSchema);
module.exports = Card;