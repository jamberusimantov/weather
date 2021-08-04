const validator = require('./city_validation')
const citiesCollection = require("./city_model");
const utils = require('../../utils/ctrl.utils');
const { successHandler, failHandler, errorHandler } = utils;
const cityList = require('../../utils/city.list.json').list
const { validateCityId, validateCityName } = validator;


const getCityLocation = async(req, res) => {
    const city = req.params;
    let cityArr = [];
    if (!validateCityName(city).isQuery) return failHandler(city, res, 'getCity')
    try {
        console.log(`get id for city: ${city.name} ...`);
        cityList.forEach(element => {
            element.name.toLowerCase().indexOf(city.name.toLowerCase()) === 0 &&
                cityArr.push(element)
        });
        switch (true) {
            case (cityArr.length === 1):
                console.log(`success get id for city: ${city.name}`);
                return successHandler(cityArr, res, 'getCityId');
            case (cityArr.length > 1):
                console.log(`multiple results for city: ${city.name}`);
                return successHandler(cityArr.length > 5 ? cityArr.splice(0, 5) : cityArr, res, 'getCityId');
            default:
                console.log(`failure get id for city: ${city.name}`);
                return failHandler(city.name, res, 'getCityId')
        }

    } catch (error) {
        console.log(`error get city ${city.name}...`);
        errorHandler(error, res, 'getCity');
    } finally {}
}
const getCity = async(req, res) => {
    const city = req.params;
    if (!city) return failHandler(city, res, 'getCity')
    if (!validateCityName(city).isQuery) return failHandler('no city', res, 'getCity')
    try {
        const post = await citiesCollection.findOne({ name: city.name });
        if (!post) return failHandler(city.id, res, 'getCity')
        console.log(`send city ${post.name}...`);
        successHandler(post, res, 'getCity');
    } catch (error) {
        errorHandler(error, res, 'getCity');
        console.log(`error get city ${city.name}...`);
    } finally {}
}
const postCity = async(req, res) => {
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

module.exports = { getCity, postCity, getCityLocation }