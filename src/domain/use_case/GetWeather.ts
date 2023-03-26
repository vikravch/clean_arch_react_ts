import Weather from "../model/weather";
import WeatherRepository from "../repository/weather_repository";
import CacheRepository from "../repository/cache_repository";
import {useLocator} from "../../di/service_locator";

export default async function (cityName: string): Promise<Weather> {
    const locator = useLocator();
    const weatherRepository: WeatherRepository = locator.weatherRepository;
    const cacheRepository: CacheRepository = locator.cacheRepository;
        try{
            const res = await weatherRepository.getWeather(cityName);
            console.log(res);
            await cacheRepository.saveLastWeather(JSON.stringify(res.toObject()));
            return Promise.resolve(res);
        } catch (e) {
            console.log(e);
            const res = await cacheRepository.getLastWeather();
            return Promise.resolve(Weather.fromJson(res||'{}'));
        }
}