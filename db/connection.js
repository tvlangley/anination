var mongoose = require("mongoose");

var AnimeSchema = new mongoose.Schema({
    name: String,
    img: String,
    description: String,
    watch_url: String
    // rank: Number
});

var GenreSchema = new mongoose.Schema({
    name: String,
    img: String,
    anime: [AnimeSchema]
});

mongoose.model("Genre", GenreSchema);
mongoose.model("Anime", AnimeSchema);

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.MONGOLAB_URL);
} else {
    mongoose.connect("mongodb://localhost/anination");
}

module.exports = mongoose;
