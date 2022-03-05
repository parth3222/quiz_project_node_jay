const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/quiz-project',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connecting Successfully With database")
})