let mongoose = require('mongoose');

//mongoose.connect('mongodb://username:password@port.mlab.com:15446/databasename', { useMongoClient: true }); 
mongoose.connect('mongodb://localhost:27018/crud', { useMongoClient: true }); 

module.exports = mongoose;