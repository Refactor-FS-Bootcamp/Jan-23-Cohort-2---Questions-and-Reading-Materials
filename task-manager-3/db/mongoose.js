const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@cluster0.90syhiz.mongodb.net/taskDB', {
    useUnifiedTopology: true
})