import Weather from '../model/weather'
import useLocator from '../../di/service_locator'

export default async function (cityName: string): Promise<Weather> {
  const locator = useLocator()
  const { weatherRepository } = locator
  const { cacheRepository } = locator
  try {
    const res = await weatherRepository.getWeather(cityName)
    console.log(res)
    await cacheRepository.saveLastWeather(JSON.stringify(res.toObject()))
    return await Promise.resolve(res)
  } catch (e) {
    console.log(e)
    const res = await cacheRepository.getLastWeather()
    if (res === null) {
      return await Promise.resolve(Weather.fromJson('{}'))
    }
    return await Promise.resolve(Weather.fromJson(res))
  }
}
