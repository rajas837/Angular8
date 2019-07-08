var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/aprang')
.then(() =>  console.log('DB connection successful'))
.catch((err) => console.error(err));;