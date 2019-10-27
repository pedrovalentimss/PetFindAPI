const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:123@petfindcluster-8gkrv.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;