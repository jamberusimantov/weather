const cityRouter = require('express').Router();
const cityCtrl = require('./city_ctrl');
const { getCity, postCity, getCityObj, getCityWeather } = cityCtrl


cityRouter.get('/cityObjSearch/:name', getCityObj);
cityRouter.get('/cityWeatherSearch/:id', getCityWeather);


cityRouter.get('/city/:name', getCity);
cityRouter.post('/city', postCity);

module.exports = cityRouter;