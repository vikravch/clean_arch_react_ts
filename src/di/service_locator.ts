import WeatherServerRepository from '../data/repository/weather_server_repository'
import CacheLocalStoreRepository from '../data/repository/cache_local_store_repository'
import type WeatherRepository from '../domain/repository/weather_repository'
import type CacheRepository from '../domain/repository/cache_repository'

interface Locator {
  weatherRepository: WeatherRepository
  cacheRepository: CacheRepository
}
let locatorResolver: () => Locator
function locatorCreator (): () => Locator {
  const weatherRepository: WeatherRepository = new WeatherServerRepository()
  const cacheRepository: CacheRepository = new CacheLocalStoreRepository()

  const locator = {
    weatherRepository,
    cacheRepository
  }
  return () => locator
}
export default function useLocator (): Locator {
  if (locatorResolver !== undefined) {
    locatorResolver = locatorCreator()
  }
  return locatorResolver()
}
