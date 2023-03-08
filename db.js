const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://bhaveen:bhaveen@cluster0.bxyf3qs.mongodb.net/?retryWrites=true&w=majority");

const Schema = mongoose.Schema

var movieSchema = new Schema ({
    mName        : String,
    mActor        : String,
    mActress    : String,
    mDirector   : String  ,
    mRelYear    : Number,
    mCam        : String,
    mProducer   : String,
    mLang       : String

})  

 var movieInfo = mongoose.model("Movies", movieSchema);
module.exports = movieInfo;