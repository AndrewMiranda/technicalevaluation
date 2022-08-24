import mongoose from "mongoose";


mongoose.connect('mongodb://localhost/technicalevaluation', {
    useCreateIndex: true,
    useNewUrlParse: true,
    useFindAndModify: false
    })
.then(db => console.log("Ok"))
.catch(err => console.log("no"));