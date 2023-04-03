import type WeatherRepository from '../../domain/repository/weather_repository'
import Weather from '../../domain/model/weather'

export default class WeatherFakeRepository implements WeatherRepository {
  async getWeather (cityName: string): Promise<Weather> {
    return await Promise.resolve(new Weather(
      'Haifa',
      24,
      3,
      30
    ))
  }
}
