const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect('mongodb://localhost/flutter-node-tutorial', {
        useNewUrlParser: true,
        useUnifiedTopology: true,//necessario por ser padrão
    });
    console.log('Database: Connected');
};

module.exports = { connect };