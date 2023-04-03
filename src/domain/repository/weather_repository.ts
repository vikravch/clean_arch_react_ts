import type Weather from '../model/weather'

export default interface WeatherRepository {
  getWeather: (cityName: string) => Promise<Weather>
}
