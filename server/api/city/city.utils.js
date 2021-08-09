const dotenv = require('dotenv')
dotenv.config();
const axios = require('axios')
const citiesCollection = require("./city_model");


const errorHandler = (error, res, message, status = 404) => res.status(status).json({
    success: false,
    message: `${message} error`,
    error: error.message,
    errorFull: error,
})
const successHandler = (data, res, message, status = 200) => res.status(status).json({
    success: true,
    message: `${message} success`,
    data,
})
const failHandler = (data, res, message, status = 400) => res.status(status).json({
    success: false,
    message: `${message} failure`,
    data,
})
const fetchNewCity = async(cityId) => {
    if (!cityId) return console.log('cityId invalid');
    const options = {
        Method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
        params: {
            id: cityId,
            lang: 'heb',
            cnt: '40',
            type: 'accurate',
            units: 'metric'
        },
        headers: {
            'x-rapidapi-key': process.env.xRapidApiKey,
            'x-rapidapi-host': process.env.xRapidApiHost
        },
    };
    try {
        console.log('fetch City');
        const res = await axios.request(options)
        return res.data;
    } catch (error) { console.error(error); } finally {}

}
const updateCityList = async(cityId, list) => {
    console.log(`update City ${cityId} List`);
    if (!cityId) return console.log('cityId invalid');
    try {
        const post = await citiesCollection.findOneAndUpdate({ id: cityId }, { list }, { returnNewDocument: true },
            (error) => { if (error) throw error; });
        return post;
    } catch (error) { console.error(error); } finally {}
}
const fetchInterval = async() => {
    const sec = 1000;
    const min = 60 * sec;
    const hour = 60 * min;
    const days = 24 * hour;
    const interval = 5 * days;

    const update = async() => {
        try {
            const response = await fetchNewCity(293397);
            if (!response) return console.log('fetchNewCity return falsy ');
            const response2 = await updateCityList(293397, response.list)
            if (!response2) return console.log('updateCityList return falsy ');
        } catch (error) { console.error(error); } finally {};
    }

    try {
        console.log('fetch default city - 5 days Interval');
        update();
        setInterval(() => {
            update();
        }, interval)

    } catch (error) {
        return console.error(error)
    } finally {}


}


module.exports = { successHandler, failHandler, errorHandler, fetchNewCity, fetchInterval }