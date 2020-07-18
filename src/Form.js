const mongoose = require('mongoose');
const { Schema } = mongoose;

const quoteSchema = new Schema({
	name: String,
    phone: String,
    message: String
});

mongoose.model('quotes', quoteSchema);

const bodyParser = require('body-parser');
require('./Quote');

const Quote = mongoose.model('quotes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());