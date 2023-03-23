import { OWkey } from './OWkey';
import axios from 'axios';

const OWServer = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather'
});

OWServer.interceptors.request.use(
    async(config) => {
        config.headers.Accept = 'application/json';
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)

export const getWeatherData = async(lat, lon, callback) => {
    const response = await OWServer.get(
        `?lat=37.7749&lon=-122.4194&appid=${OWkey}`
    );
    callback(response.data);
}

export async function fetchWeatherData(lat, lon, updateState) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OWkey}&units=imperial`;
    const response = await fetch(url);
    const data = await response.json();
    updateState(data);
    console.log(data)
  }


export default OWServer;