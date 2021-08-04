const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const city = new Schema({
    id: String,
    name: String,
    coord: { lat: Number, lon: Number },
    country: String,
    population: Number,
    timezone: Number,
    sunrise: Number,
    sunset: Number,
    list: [{
        weather: [{ id: Number, main: String, description: String, icon: String }],
        wind: { speed: Number, deg: Number, gust: Number },
        visibility: Number,
        dt: Number,
        dt_txt: String,
        clouds: { all: Number },
        main: {
            temp: Number,
            feels_like: Number,
            temp_min: Number,
            temp_max: Number,
            pressure: Number,
            sea_level: Number,
            grnd_level: Number,
            humidity: Number,
            temp_kf: Number
        }
    }],
}, { timestamps: true });

module.exports = mongoose.model("city", city);