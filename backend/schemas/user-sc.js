var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    nombre: String,
    email: String
});

module.exports = userSchema;
