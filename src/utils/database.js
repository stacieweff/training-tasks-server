const mongoose = require('mongoose');
require('../models');
mongoose.connect('mongodb+srv://default-user:Test123@firstcluster-6hqob.mongodb.net/test?retryWrites=true', {
  useNewUrlParser: true
}, (err) => {
  if (err) throw err;
});