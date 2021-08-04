const cityRouter = require('express').Router();
const cityCtrl = require('./city_ctrl');
const { getCity, postCity, getCityLocation } = cityCtrl


cityRouter.get('/cityObj/:name', getCityLocation);



cityRouter.get('/city/:name', getCity);
cityRouter.post('/city', postCity);

module.exports = cityRouter;