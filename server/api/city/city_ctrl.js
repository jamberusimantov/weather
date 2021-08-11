const validator = require('./city_validation')
const citiesCollection = require("./city_model");
const utils = require('./city.utils');
const { successHandler, failHandler, errorHandler, fetchNewCity } = utils;
const cityList = require('./city.list.json').list
const { validateCityName, validateCityId } = validator;
const clientUrl = process.env.NODE_ENV === "production" ?
    "https://weather-my-app.herokuapp.com" : "http://localhost:3000";

const getCityObj = async(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', clientUrl);
    console.log('get City Obj');
    const city = req.params;
    let cityArr = [];
    const valid = validateCityName(city)
    if (!valid.isQuery) return failHandler(city, res, 'getCityObj')
    try {
        cityList.forEach((element) => {
            if (cityArr.length < 5) {
                valid.query.name &&
                    element.name.toLowerCase().indexOf(valid.query.name.toLowerCase()) === 0 &&
                    cityArr.push(element);
            }
        });
        successHandler(cityArr, res, 'getCityObj');
    } catch (error) {
        errorHandler(error, res, 'getCityObj');
    } finally {}
}
const getCityWeather = async(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', clientUrl);
    console.log('get City weather');
    const city = req.params;
    let cityArr = [];
    const valid = validateCityId(city)
    if (!valid.isQuery) return failHandler(city, res, 'getCityWeather')
    try {
        const response = await fetchNewCity(valid.query.id);
        if (!response) failHandler(city, res, 'getCityWeather');
        return successHandler(response, res, 'getCityWeather');
    } catch (error) {
        errorHandler(error, res, 'getCityWeather');
    } finally {}
}
const getCity = async(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', clientUrl);
    const city = req.params;
    if (!city) return failHandler(city, res, 'getCity')
    if (!validateCityName(city).isQuery) return failHandler('no city', res, 'getCity')
    console.log(`get city ${city.name}...`);
    try {
        const post = await citiesCollection.findOne({ name: city.name });
        if (!post) return failHandler(city.name, res, 'getCity')
        console.log(`send city ${post.name}...`);
        successHandler(post, res, 'getCity');
    } catch (error) {
        console.log(`error get city ${city.name}...`);
        errorHandler(error, res, 'getCity');
    } finally {}
}







const postCity = async(req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log('post city...');
    const city = req.body.city;
    if (!city) return failHandler('no city', res, 'postCity')
    if (!validateCityName(city).isQuery) return failHandler('no city', res, 'postCity')
    try {
        console.log({ city });
        const post = new citiesCollection(city)
        await post.save();

        console.log(`save city ${post.name}...`);
        successHandler(post, res, 'postCity');
    } catch (error) {
        errorHandler(error, res, 'postCity');
        console.log(`error post city ${city.name}...`);
    } finally {}
}

module.exports = { getCity, postCity, getCityObj, getCityWeather }