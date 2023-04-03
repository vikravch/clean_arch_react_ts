export default interface CacheRepository {
  getLastWeather: () => Promise<string | null>
  saveLastWeather: (value: string) => Promise<void>
}
