const mongoose = require('mongoose');
const config = require('./config');

//Use native promises
mongoose.Promise = global.Promise;

const connectionURL = `mongodb://${config.db.user}@${config.db.host}:${config.db.port}/${config.db.name}`;

mongoose.connect(connectionURL, { useNewUrlParser: true })
.catch((e) => console.error(e));
const db = mongoose.connection;

// Check connection
db.on('connected', () => {
    console.log(`Mongoose connection open on ${connectionURL}`)
});

// Check for Db errors
db.on('error', (e) => console.error(e));

// Check for disconnected
db.on('disconnected', () => {
    console.log('mongoose connection disconnected')
});

process.on('SIGHT', () => {
    db.close(() => {
        console.log('mongoose connection closed throw app termination');
        process.exit(0)
    })
});