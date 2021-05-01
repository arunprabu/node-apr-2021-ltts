const mongoose = require('./mongo'); //importing connection config
const autoIncrement = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

//schema 
const Contact = new Schema(
  {
    contactId: {
      unique: true,
      type: Number
    },
    name: String,
    phone: Number,
    email: String,
    status: String,
    hash: String,
    salt: String,
    createdBy: String,
    createdOn: { type: Date, default: Date.now },
    updatedBy: String,
    updatedOn: { type: Date, default: Date.now }
  }
);

Contact.plugin(autoIncrement.plugin, { model: 'Contact', field: 'contactId', startAt: 1 });
module.exports = mongoose.model('Contact', Contact);