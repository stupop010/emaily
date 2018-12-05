const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
    email: String,
    responded: { type: Boolean, defailt: false }
});

module.exports = recipientSchema;
