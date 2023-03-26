import WeatherServerRepository from "../data/repository/weather_server_repository";
import CacheLocalStoreRepository from "../data/repository/cache_local_store_repository";
import WeatherRepository from "../domain/repository/weather_repository";
import CacheRepository from "../domain/repository/cache_repository";

type Locator = {
    weatherRepository: WeatherRepository,
    cacheRepository: CacheRepository,
}
let locatorResolver:()=>Locator;
function locatorCreator(): ()=>Locator{
    const weatherRepository:WeatherRepository = new WeatherServerRepository();
    const cacheRepository:CacheRepository = new CacheLocalStoreRepository();

    const locator = {
        weatherRepository: weatherRepository,
        cacheRepository: cacheRepository,
    };
    return ()=> locator;
}
export function useLocator():Locator{
    if(!locatorResolver){
        locatorResolver = locatorCreator();
    }
    return locatorResolver();
}
