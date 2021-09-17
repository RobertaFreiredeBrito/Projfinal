const mongoose = require("mongoose");


mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true
});

module.exports = mongoose