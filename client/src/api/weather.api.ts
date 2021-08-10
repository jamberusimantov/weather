import axios from "axios";
const baseURL = process.env.NODE_ENV === "production" ?
    "http://weather-my-app.herokuapp.com" : "http://localhost:4201";
class Weather {

    getCityObj = async (city: { name: string }) => {
        const { name } = city;
        if (!name) return { success: false, data: 'city name is required' };
        const url = `${baseURL}/cities/cityObjSearch/${name}`;
        try {
            const res = await axios.get(url)
            if (!res) return { success: false, data: 'getCityObj return falsy' }
            return { success: true, data: res.data }
        } catch (error) { return { success: false, error } }
    }
    getCityWeather = async (city: { id: string }) => {
        const { id } = city;
        if (!id) return { success: false, data: 'city id is required' };
        const url = `${baseURL}/cities/cityWeatherSearch/${id}`;
        try {
            const res = await axios.get(url)
            if (!res) return { success: false, data: 'getCityWeather return falsy' }
            return { success: true, data: res.data }
        } catch (error) { return { success: false, error } }
    }







    getCity = async (city: { name: string }) => {
        const { name } = city;
        if (!name) return;
        const url_name = `${baseURL}/cities/city/${name}`
        try {
            const res = await axios.get(url_name)
            return res;
            // return res.data;
        } catch (error) { return { success: false, error } }
    }
    postCity = async (city: { name: string }) => {
        const { name } = city;
        if (!name) return;
        const url_name = `${baseURL}/cities/city`
        const body = { city };
        try {
            const res = await axios.post(url_name, body)
            if (!res) return { success: false, data: {} }
            return { success: true, data: res.data }
        } catch (error) { return { success: false, error } }
    }
}
export default new Weather();