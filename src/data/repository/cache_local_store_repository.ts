import type CacheRepository from '../../domain/repository/cache_repository'

export default class CacheLocalStoreRepository implements CacheRepository {
  async getLastWeather (): Promise<string | null> {
    return await Promise.resolve(localStorage.getItem('weather'))
  }

  async saveLastWeather (value: string): Promise<void> {
    localStorage.setItem('weather', value)
  }
}
