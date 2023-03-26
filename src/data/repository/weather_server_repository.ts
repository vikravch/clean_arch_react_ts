import WeatherRepository from "../../domain/repository/weather_repository";
import Weather from "../../domain/model/weather";
import WeatherServerDTO from "../dto/WeatherServerDTO";

const API_KEY = 'c3bd24f13cecf13f96cfdc182bc8d4e8';
export default class WeatherServerRepository implements WeatherRepository {
    constructor() {
        console.log('WeatherServerRepository created');
    }
    //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    getWeather(cityName: string): Promise<Weather> {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.cod === 200) {
                    console.log(`WeatherServerRepository: ${response}`);
                    return Promise.resolve(new WeatherServerDTO(response));
                } else {
                    return Promise.reject(new Error(response.message));
                }
            });
    }
}