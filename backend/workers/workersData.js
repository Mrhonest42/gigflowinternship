const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    Name: {type: String, required: true},
    email: {type: String, required: true},
    skill_category: {type: String, required: true},
    portfolio: {type: String, required: true}
});

module.exports = mongoose.model('workers', memberSchema);