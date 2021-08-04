import axios from "axios";
const baseURL = process.env.NODE_ENV === "production" ? "https://.herokuapp.com" : "http://localhost:4201";
class Weather {
    headers = {
        'x-rapidapi-key': '82c7f16668msh09e14b2110b9ff5p12af1ejsn6a28ac24ac2b',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
    }

    getCityLocationObj = async (city: { name: string }) => {
        const { name } = city;
        if (!name) return { success: false, data: 'city name is required' };
        const url_name = `${baseURL}/cities/cityObj/${name}`
        try {
            const res = await axios.get(url_name)
            if (!res) return { success: false, data: 'res return falsy' }
            return { success: true, data: res.data }
        } catch (error) { return { success: false, error } }
    }
    fetchNewCity = async (cityId:number) => {

        if (!cityId) return { success: false, data: 'cityId invalid' };
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
            headers: this.headers,
        };
        try {
            const res = await axios.request(options)
            return { success: true, data: res.data }
        } catch (error) { return { success: false, error } }
    
    }
    getCity = async (city: { name:string}) => {
        const { name } = city;
        if (!name) return;
        const url_name = `${baseURL}/cities/city/${name}`
        try {
            const res = await axios.get(url_name)
            if (!res) return { success: false, data: {} }
            return { success: true, data: res.data }
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