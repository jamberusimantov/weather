import * as actionTypes from '../actions/city.actions';

const { SET_CITY } = actionTypes;

const city = (
    city = {
        id: '',
        name: '',
        coord: { lat: 0, lon: 0 },
        country: '',
        population: 0,
        timezone: 0,
        sunrise: 0,
        sunset: 0,
        list: [{
            dt: 0,
            dt_txt: '',
            wind: { speed: 0, deg: 0, gust: 0 },
            clouds: { all: 0 },
            visibility:0,
            weather: [{ id: 0, main: '', description: '', icon: '' }],
            main: {
                temp: 0,
                feels_like: 0,
                temp_min: 0,
                temp_max: 0,
                pressure: 0,
                sea_level: 0,
                grnd_level: 0,
                humidity: 0,
                temp_kf: 0
            }
        }],
    },
    action: any) => {
    switch (action.type) {
        case SET_CITY: return action.payload ;

        default: return city;
    }
}
export default city;